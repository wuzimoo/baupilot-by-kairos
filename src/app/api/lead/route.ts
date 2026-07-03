import { NextResponse } from "next/server";

type LeadPayload = {
  activeProjects?: string;
  companyName?: string;
  currentProcess?: string;
  email?: string;
  fieldEmployees?: string;
  fullName?: string;
  interest?: string;
  locale?: string;
  meetingFormat?: string;
  phone?: string;
  role?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeTelegramHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function sendTelegramLead(payload: Record<string, string>) {
  const botToken =
    process.env.TELEGRAM_BOT_TOKEN || process.env.KAIROS_TELEGRAM_BOT_TOKEN;
  const chatId =
    process.env.TELEGRAM_CHAT_ID ||
    process.env.TELEGRAM_CHANNEL_USERNAME ||
    process.env.KAIROS_TELEGRAM_CHAT_ID ||
    process.env.KAIROS_TELEGRAM_CHANNEL_USERNAME;
  const messageThreadId =
    process.env.TELEGRAM_MESSAGE_THREAD_ID ||
    process.env.KAIROS_TELEGRAM_MESSAGE_THREAD_ID;

  if (!botToken || !chatId) {
    return null;
  }

  const lines = [
    "New BauPilot lead",
    "",
    `<b>Name:</b> ${escapeTelegramHtml(payload.fullName)}`,
    `<b>Company:</b> ${escapeTelegramHtml(payload.companyName)}`,
    `<b>Email:</b> ${escapeTelegramHtml(payload.email)}`,
    `<b>Phone / WhatsApp:</b> ${escapeTelegramHtml(payload.phone || "Not provided")}`,
    `<b>Role:</b> ${escapeTelegramHtml(payload.role)}`,
    `<b>Field employees:</b> ${escapeTelegramHtml(payload.fieldEmployees)}`,
    `<b>Active projects:</b> ${escapeTelegramHtml(payload.activeProjects)}`,
    `<b>Meeting format:</b> ${escapeTelegramHtml(payload.meetingFormat || "Not selected")}`,
    `<b>Main interest:</b> ${escapeTelegramHtml(payload.interest || "Not selected")}`,
    `<b>Locale:</b> ${escapeTelegramHtml(payload.locale || "unknown")}`,
    `<b>Submitted:</b> ${escapeTelegramHtml(payload.submittedAt)}`,
    "",
    "<b>Current process:</b>",
    escapeTelegramHtml(payload.currentProcess),
  ];

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      disable_web_page_preview: true,
      message_thread_id: messageThreadId ? Number(messageThreadId) : undefined,
      parse_mode: "HTML",
      text: lines.join("\n"),
    }),
  });

  return response;
}

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  const payload = {
    fullName: normalize(body.fullName),
    companyName: normalize(body.companyName),
    email: normalize(body.email),
    phone: normalize(body.phone),
    role: normalize(body.role),
    fieldEmployees: normalize(body.fieldEmployees),
    activeProjects: normalize(body.activeProjects),
    meetingFormat: normalize(body.meetingFormat),
    currentProcess: normalize(body.currentProcess),
    interest: normalize(body.interest),
    locale: normalize(body.locale),
    submittedAt: new Date().toISOString(),
  };

  if (
    !payload.fullName ||
    !payload.companyName ||
    !payload.email ||
    !payload.role ||
    !payload.fieldEmployees ||
    !payload.activeProjects ||
    !payload.currentProcess
  ) {
    return NextResponse.json(
      { error: "Missing required lead fields." },
      { status: 400 }
    );
  }

  const telegramDelivery = await sendTelegramLead(payload);
  const webhookTargets = [
    process.env.KAIROS_CRM_WEBHOOK_URL,
    process.env.KAIROS_EMAIL_WEBHOOK_URL,
  ].filter(Boolean) as string[];

  if (!telegramDelivery && !webhookTargets.length) {
    return NextResponse.json(
      {
        error:
          "Lead forwarding is not fully configured yet. Add TELEGRAM_CHAT_ID or TELEGRAM_CHANNEL_USERNAME on the server.",
      },
      { status: 503 }
    );
  }

  const deliveries = await Promise.allSettled([
    ...(telegramDelivery ? [Promise.resolve(telegramDelivery)] : []),
    ...webhookTargets.map((url) =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
    ),
  ]);

  const hasSuccessfulDelivery = deliveries.some(
    (result) => result.status === "fulfilled" && result.value.ok
  );

  if (!hasSuccessfulDelivery) {
    return NextResponse.json(
      { error: "Lead forwarding failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, mode: "live" });
}

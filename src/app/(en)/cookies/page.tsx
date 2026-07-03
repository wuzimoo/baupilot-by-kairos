import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies | BauPilot by Kairos",
  description: "Cookie notice for the BauPilot by Kairos landing page.",
};

export default function CookiesPage() {
  return (
    <main className="section-shell py-20">
      <div className="max-w-3xl space-y-6">
        <p className="section-kicker">Cookies</p>
        <h1 className="font-heading text-4xl font-semibold text-balance text-foreground">
          Cookie notice
        </h1>
        <p className="text-base leading-8 text-muted text-pretty">
          This preview does not display an intrusive popup. If analytics or
          additional tracking tools require consent in your production setup,
          integrate the approved cookie banner and policy here before launch.
        </p>
        <p className="text-base leading-8 text-muted text-pretty">
          Vercel Analytics events for booking clicks, WhatsApp clicks, demo
          opens and form submissions are already instrumented in the frontend
          code and can be governed by your consent layer later.
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | BauPilot by Kairos",
  description: "Privacy notice for BauPilot by Kairos lead collection and workflow review requests.",
};

export default function PrivacyPage() {
  return (
    <main className="section-shell py-20">
      <div className="max-w-3xl space-y-6">
        <p className="section-kicker">Privacy</p>
        <h1 className="font-heading text-4xl font-semibold text-balance text-foreground">
          Privacy notice
        </h1>
        <p className="text-base leading-8 text-muted text-pretty">
          Lead form submissions on this landing page are intended for workflow
          review and pilot qualification. They may be forwarded to configured
          CRM or email endpoints when those integrations are enabled in the
          deployment environment.
        </p>
        <p className="text-base leading-8 text-muted text-pretty">
          If you need the final company privacy policy or processor list, replace
          this page content with the approved legal text before publishing the
          production URL.
        </p>
      </div>
    </main>
  );
}

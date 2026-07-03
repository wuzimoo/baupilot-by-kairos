import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { LandingLocale, ProductScreenKey } from "@/content/landing";

const screenCopy = {
  en: {
    nav: ["Cockpit", "Reports", "Calendar", "Projects", "People", "Teams", "Payroll"],
    dashboard: {
      subtitle: "Management",
      stats: [
        ["With foreman", "1"],
        ["In office", "1"],
        ["Approved", "1"],
        ["Active workers", "12"],
      ],
      searchTitle: "Search the system",
      searchCopy:
        "Find names, dates, projects, codes and report numbers in one place.",
      searchHint: "e.g. Markus, 2026-06-04, DR-2026-0042",
      analyticsTitle: "Project analytics",
      analyticsCopy: "Live data combines approved hours, progress and site visibility.",
      projects: [
        ["Larnaca Coastal Offices", "24.4 h"],
        ["Nicosia MEP Upgrade", "18.8 h"],
        ["Limassol Solar Retrofit", "16.1 h"],
      ],
    },
    project: {
      back: "Back to projects",
      subtitle: "Larnaca · Makarios Avenue 88",
      summary:
        "Live interior fit-out with electrical, HVAC and low-voltage packages running in parallel.",
      stats: [
        ["Workers", "4"],
        ["Teams", "1"],
        ["Hours", "24.4 h"],
        ["Cost", "1,047 EUR"],
      ],
      scopeTitle: "Scope and milestones",
      planItems: [
        ["Start date", "01.05.2026"],
        ["End date", "30.07.2026"],
        ["Foreman", "Oleh Kovalenko"],
      ],
      packagesTitle: "Work packages",
      packages: [
        ["Cable tray installation · Level 02", "Install 180 m of cable trays and verify routing against the drawing set.", "96/180 m", "53%"],
        ["Distribution boards and temporary power", "Prepare boards, temporary feeds and QA checks before close-out.", "3/6 pcs", "50%"],
      ],
      teamTitle: "Teams and workers",
      teamCopy: "Team Elektro Ost · Oleh Kovalenko, Markus Meyer, Leon Schulz",
      reportsTitle: "Recent reports",
      reports: [
        ["DR-2026-0031", "Installed cable trays on level 02 and prepared the next zone for foreman review.", "7.75 h"],
        ["DR-2026-0030", "Prepared temporary feeds and distribution boards for the next inspection round.", "8.17 h"],
      ],
    },
    review: {
      title: "Daily report DR-2026-0031",
      submitted: "Received: 29.05.2026, 19:15",
      fields: [
        ["Worker", "Markus Meyer"],
        ["Date", "29.05.2026"],
        ["Project", "Larnaca Coastal Offices"],
        ["Work package", "Cable tray installation · Level 02"],
        ["Start", "08:00"],
        ["End", "16:15"],
        ["Work time", "7.75 h"],
        ["Quantity", "12 m"],
      ],
      descriptionTitle: "Work description",
      description:
        "Installed cable trays on level 02, checked the riser route and prepared the next zone for foreman review.",
      sidebarTitle: "Approval",
      sidebarCopy: "Status, phase and available actions",
      status: "With foreman",
      actions: ["Approve", "Reject", "Request rework"],
      historyTitle: "Comments and history",
      history: [
        ["Report submitted from site", "The worker sent the report for foreman review before close-out."],
        ["Foreman note", "Quantity confirmed against the work package. Ready for approval."],
      ],
    },
    worker: {
      back: "Back to overview",
      title: "Create daily report",
      copy: "Review the times, quantity and work description before submitting.",
      projectLabel: "Assigned project",
      projectTitle: "Larnaca Coastal Offices",
      projectMeta: "Markus Meyer · Team Elektro Ost",
      fields: [
        ["Date", "26.06.2026"],
        ["Work package", "Cable tray installation · Level 02"],
        ["Start", "08:00"],
        ["End", "16:30"],
        ["Break, min.", "30"],
      ],
      description: "Installed cable trays in corridor B and prepared support anchors for the next section.",
      tabs: ["Home", "Report", "Calendar", "More"],
    },
    payroll: {
      title: "Payroll overview",
      copy: "Monthly review based on payroll period, calendar month or free date range.",
      filters: [
        ["Mode", "Payroll period 21-20"],
        ["Month", "May 2026"],
        ["Start", "21.04.2026"],
        ["End", "20.05.2026"],
      ],
      action: "Refresh",
      export: "CSV export",
      headers: ["Worker", "Role", "EUR/h", "Approved hours", "Total", "Reports"],
      row: ["Markus Meyer", "Electrician", "EUR 28.00", "16.25 h", "455.00 EUR", "2"],
    },
  },
  gr: {
    nav: ["Cockpit", "Αναφορές", "Ημερολόγιο", "Έργα", "Άτομα", "Ομάδες", "Μισθοδοσία"],
    dashboard: {
      subtitle: "Διοίκηση",
      stats: [
        ["Στον εργοδηγό", "1"],
        ["Στο γραφείο", "1"],
        ["Εγκεκριμένα", "1"],
        ["Ενεργοί εργαζόμενοι", "12"],
      ],
      searchTitle: "Αναζήτηση στο σύστημα",
      searchCopy:
        "Βρείτε ονόματα, ημερομηνίες, έργα, κωδικούς και αριθμούς αναφορών σε ένα σημείο.",
      searchHint: "π.χ. Markus, 2026-06-04, DR-2026-0042",
      analyticsTitle: "Ανάλυση έργων",
      analyticsCopy:
        "Τα live δεδομένα συνδυάζουν εγκεκριμένες ώρες, πρόοδο και ορατότητα έργου.",
      projects: [
        ["Larnaca Coastal Offices", "24,4 ώρες"],
        ["Nicosia MEP Upgrade", "18,8 ώρες"],
        ["Limassol Solar Retrofit", "16,1 ώρες"],
      ],
    },
    project: {
      back: "Πίσω στα έργα",
      subtitle: "Λάρνακα · Λεωφόρος Μακαρίου 88",
      summary:
        "Ζωντανό fit-out εσωτερικού χώρου με ηλεκτρολογικά, HVAC και low-voltage πακέτα σε παράλληλη εκτέλεση.",
      stats: [
        ["Εργαζόμενοι", "4"],
        ["Ομάδες", "1"],
        ["Ώρες", "24,4 ώρες"],
        ["Κόστος", "1.047 EUR"],
      ],
      scopeTitle: "Αντικείμενο και ορόσημα",
      planItems: [
        ["Έναρξη", "01.05.2026"],
        ["Λήξη", "30.07.2026"],
        ["Εργοδηγός", "Oleh Kovalenko"],
      ],
      packagesTitle: "Πακέτα εργασίας",
      packages: [
        ["Εγκατάσταση cable tray · Επίπεδο 02", "Τοποθέτηση 180 m cable trays και έλεγχος όδευσης με βάση το σχέδιο.", "96/180 m", "53%"],
        ["Πίνακες διανομής και προσωρινή τροφοδοσία", "Προετοιμασία πινάκων, προσωρινών παροχών και QA ελέγχων πριν το κλείσιμο.", "3/6 τεμ.", "50%"],
      ],
      teamTitle: "Ομάδες και εργαζόμενοι",
      teamCopy: "Team Elektro Ost · Oleh Kovalenko, Markus Meyer, Leon Schulz",
      reportsTitle: "Πρόσφατες αναφορές",
      reports: [
        ["DR-2026-0031", "Τοποθετήθηκαν cable trays στο επίπεδο 02 και προετοιμάστηκε η επόμενη ζώνη για έλεγχο εργοδηγού.", "7,75 ώρες"],
        ["DR-2026-0030", "Προετοιμάστηκαν προσωρινές παροχές και πίνακες για τον επόμενο γύρο επιθεώρησης.", "8,17 ώρες"],
      ],
    },
    review: {
      title: "Ημερήσια αναφορά DR-2026-0031",
      submitted: "Παραλήφθηκε: 29.05.2026, 19:15",
      fields: [
        ["Εργαζόμενος", "Markus Meyer"],
        ["Ημερομηνία", "29.05.2026"],
        ["Έργο", "Larnaca Coastal Offices"],
        ["Πακέτο εργασίας", "Εγκατάσταση cable tray · Επίπεδο 02"],
        ["Έναρξη", "08:00"],
        ["Λήξη", "16:15"],
        ["Χρόνος εργασίας", "7,75 ώρες"],
        ["Ποσότητα", "12 m"],
      ],
      descriptionTitle: "Περιγραφή εργασίας",
      description:
        "Τοποθετήθηκαν cable trays στο επίπεδο 02, ελέγχθηκε η όδευση και προετοιμάστηκε η επόμενη ζώνη για έλεγχο εργοδηγού.",
      sidebarTitle: "Έγκριση",
      sidebarCopy: "Κατάσταση, φάση και διαθέσιμες ενέργειες",
      status: "Στον εργοδηγό",
      actions: ["Έγκριση", "Απόρριψη", "Αίτημα διόρθωσης"],
      historyTitle: "Σχόλια και ιστορικό",
      history: [
        ["Υποβολή από το εργοτάξιο", "Ο εργαζόμενος έστειλε την αναφορά για έλεγχο εργοδηγού πριν το close-out."],
        ["Σημείωση εργοδηγού", "Η ποσότητα επιβεβαιώθηκε σε σχέση με το work package. Έτοιμο για έγκριση."],
      ],
    },
    worker: {
      back: "Πίσω στην επισκόπηση",
      title: "Καταχώριση ημερήσιας αναφοράς",
      copy: "Ελέγξτε ώρες, ποσότητα και περιγραφή εργασίας πριν την υποβολή.",
      projectLabel: "Ανατεθειμένο έργο",
      projectTitle: "Larnaca Coastal Offices",
      projectMeta: "Markus Meyer · Team Elektro Ost",
      fields: [
        ["Ημερομηνία", "26.06.2026"],
        ["Πακέτο εργασίας", "Εγκατάσταση cable tray · Επίπεδο 02"],
        ["Έναρξη", "08:00"],
        ["Λήξη", "16:30"],
        ["Διάλειμμα, λεπτά", "30"],
      ],
      description: "Τοποθετήθηκαν cable trays στον διάδρομο B και προετοιμάστηκαν τα στηρίγματα για το επόμενο τμήμα.",
      tabs: ["Αρχική", "Αναφορά", "Ημερολόγιο", "Περισσότερα"],
    },
    payroll: {
      title: "Επισκόπηση μισθοδοσίας",
      copy: "Μηνιαία αξιολόγηση ανά περίοδο μισθοδοσίας, ημερολογιακό μήνα ή ελεύθερο εύρος ημερομηνιών.",
      filters: [
        ["Τύπος", "Περίοδος 21-20"],
        ["Μήνας", "Μάιος 2026"],
        ["Έναρξη", "21.04.2026"],
        ["Λήξη", "20.05.2026"],
      ],
      action: "Ανανέωση",
      export: "Εξαγωγή CSV",
      headers: ["Εργαζόμενος", "Ρόλος", "EUR/ώρα", "Εγκεκριμένες ώρες", "Σύνολο", "Αναφορές"],
      row: ["Markus Meyer", "Ηλεκτρολόγος", "EUR 28,00", "16,25 ώρες", "455,00 EUR", "2"],
    },
  },
} as const;

export function ProductScreen({
  className,
  locale,
  screen,
}: {
  className?: string;
  locale: LandingLocale;
  screen: ProductScreenKey;
}) {
  switch (screen) {
    case "admin-dashboard":
      return <DashboardScreen className={className} locale={locale} />;
    case "project-detail":
      return <ProjectDetailScreen className={className} locale={locale} />;
    case "report-review":
      return <ReportReviewScreen className={className} locale={locale} />;
    case "worker-report":
      return <WorkerReportScreen className={className} locale={locale} />;
    case "payroll":
      return <PayrollScreen className={className} locale={locale} />;
  }
}

function ScreenShell({
  activeIndex = 0,
  children,
  className,
  locale,
}: {
  activeIndex?: number;
  children: ReactNode;
  className?: string;
  locale: LandingLocale;
}) {
  const copy = screenCopy[locale];

  return (
    <div
      className={cn(
        "size-full overflow-hidden border border-[#d9e3f1] bg-[#fbfcfe] text-[#243241] [container-type:inline-size]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-[#d9e3f1] bg-white px-[1.5%] py-[1.5%]">
        <div>
          <div className="text-[2.5cqw] font-semibold leading-none">BauPilot</div>
          <div className="mt-[0.3cqw] text-[1.4cqw] text-[#778391]">
            {copy.dashboard.subtitle}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-[0.7cqw] rounded-[1.4cqw] border border-[#d9e3f1] bg-[#fbfcfe] px-[0.6cqw] py-[0.45cqw] text-[1.4cqw] text-[#495a6c]">
          {copy.nav.map((item, index) => (
            <div
              key={item}
              className={cn(
                "rounded-[1cqw] px-[1cqw] py-[0.65cqw]",
                index === activeIndex &&
                  "border border-[#d9e3f1] bg-white text-[#385674]"
              )}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

function DashboardScreen({
  className,
  locale,
}: {
  className?: string;
  locale: LandingLocale;
}) {
  const copy = screenCopy[locale].dashboard;

  return (
    <ScreenShell activeIndex={0} className={className} locale={locale}>
      <div className="space-y-[1.5cqw] bg-[#f7f9fc] p-[1.5cqw]">
        <div className="grid grid-cols-4 gap-[1.2cqw]">
          {copy.stats.map(([label, value]) => (
            <div key={label} className="rounded-[1.4cqw] border border-[#d9e3f1] bg-white p-[1.3cqw]">
              <div className="text-[1.35cqw] text-[#697888]">{label}</div>
              <div className="mt-[0.5cqw] text-[3cqw] font-semibold leading-none">{value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="text-[2.5cqw] font-semibold">{copy.searchTitle}</div>
          <div className="mt-[0.4cqw] text-[1.45cqw] text-[#748291]">{copy.searchCopy}</div>
          <div className="mt-[1cqw] rounded-[1cqw] border border-[#d9e3f1] px-[1.2cqw] py-[1cqw] text-[1.4cqw] text-[#8da0b6]">
            {copy.searchHint}
          </div>
        </div>
        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="text-[2.5cqw] font-semibold">{copy.analyticsTitle}</div>
          <div className="mt-[0.4cqw] text-[1.45cqw] text-[#748291]">{copy.analyticsCopy}</div>
          <div className="mt-[1.1cqw] space-y-[1cqw]">
            {copy.projects.map(([project, hours], index) => (
              <div key={project} className="rounded-[1cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[1.15cqw]">
                <div className="flex items-center justify-between gap-[1cqw] text-[1.5cqw]">
                  <span>{project}</span>
                  <span className="font-semibold">{hours}</span>
                </div>
                <div className="mt-[0.8cqw] h-[0.9cqw] rounded-full bg-[#e4ebf3]">
                  <div
                    className="h-full rounded-full bg-[#516f8d]"
                    style={{ width: `${88 - index * 18}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

function ProjectDetailScreen({
  className,
  locale,
}: {
  className?: string;
  locale: LandingLocale;
}) {
  const copy = screenCopy[locale].project;

  return (
    <ScreenShell activeIndex={3} className={className} locale={locale}>
      <div className="space-y-[1.5cqw] bg-[#f7f9fc] p-[1.5cqw]">
        <div className="rounded-[1.8cqw] bg-[#1b2740] px-[1.8cqw] py-[1.9cqw] text-white">
          <div className="text-[1.5cqw] text-white/72">{copy.back}</div>
          <div className="mt-[0.7cqw] text-[3.2cqw] font-semibold leading-none">
            Larnaca Coastal Offices
          </div>
          <div className="mt-[0.45cqw] text-[1.6cqw] text-white/70">{copy.subtitle}</div>
          <div className="mt-[0.95cqw] max-w-[70%] text-[1.55cqw] text-white/76">
            {copy.summary}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[1.2cqw]">
          {copy.stats.map(([label, value]) => (
            <div key={label} className="rounded-[1.4cqw] border border-[#d9e3f1] bg-white p-[1.3cqw]">
              <div className="text-[1.35cqw] text-[#697888]">{label}</div>
              <div className="mt-[0.55cqw] text-[2.8cqw] font-semibold leading-none">{value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="text-[2.4cqw] font-semibold">{copy.scopeTitle}</div>
          <div className="mt-[1cqw] grid grid-cols-3 gap-[1.1cqw]">
            {copy.planItems.map(([label, value]) => (
              <div key={label} className="rounded-[1.1cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[1.15cqw]">
                <div className="text-[1.35cqw] text-[#7a8694]">{label}</div>
                <div className="mt-[0.45cqw] text-[1.7cqw] font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="text-[2.4cqw] font-semibold">{copy.packagesTitle}</div>
          <div className="mt-[1cqw] space-y-[1cqw]">
            {copy.packages.map(([title, body, qty, progress]) => (
              <div key={title} className="rounded-[1.2cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[1.15cqw]">
                <div className="text-[1.65cqw] font-semibold">{title}</div>
                <div className="mt-[0.5cqw] text-[1.4cqw] text-[#697888]">{body}</div>
                <div className="mt-[0.8cqw] flex items-center gap-[1cqw] text-[1.35cqw] text-[#697888]">
                  <span>{qty}</span>
                  <div className="h-[0.85cqw] flex-1 rounded-full bg-[#e4ebf3]">
                    <div className="h-full w-[53%] rounded-full bg-[#476585]" />
                  </div>
                  <span className="font-semibold text-[#243241]">{progress}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[0.75fr_1.25fr] gap-[1.2cqw]">
          <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
            <div className="text-[2.2cqw] font-semibold">{copy.teamTitle}</div>
            <div className="mt-[0.8cqw] text-[1.4cqw] text-[#697888]">{copy.teamCopy}</div>
          </div>
          <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
            <div className="text-[2.2cqw] font-semibold">{copy.reportsTitle}</div>
            <div className="mt-[0.8cqw] space-y-[0.8cqw]">
              {copy.reports.map(([id, body, hours]) => (
                <div key={id} className="rounded-[1cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[1cqw]">
                  <div className="flex items-center justify-between gap-[1cqw] text-[1.45cqw]">
                    <span className="font-semibold">{id}</span>
                    <span className="font-semibold text-[#697888]">{hours}</span>
                  </div>
                  <div className="mt-[0.45cqw] text-[1.35cqw] text-[#697888]">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

function ReportReviewScreen({
  className,
  locale,
}: {
  className?: string;
  locale: LandingLocale;
}) {
  const copy = screenCopy[locale].review;

  return (
    <ScreenShell activeIndex={1} className={className} locale={locale}>
      <div className="grid grid-cols-[1.9fr_0.9fr] gap-[1.5cqw] bg-[#f7f9fc] p-[1.5cqw]">
        <div className="space-y-[1.2cqw]">
          <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
            <div className="text-[2.4cqw] font-semibold">{copy.title}</div>
            <div className="mt-[0.4cqw] text-[1.4cqw] text-[#748291]">{copy.submitted}</div>
            <div className="mt-[1cqw] grid grid-cols-3 gap-[1cqw]">
              {copy.fields.map(([label, value]) => (
                <div key={label} className="rounded-[1cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[0.95cqw]">
                  <div className="text-[1.25cqw] text-[#7a8694]">{label}</div>
                  <div className="mt-[0.35cqw] text-[1.55cqw] font-semibold">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-[1cqw] text-[1.4cqw] font-semibold">{copy.descriptionTitle}</div>
            <div className="mt-[0.5cqw] rounded-[1cqw] border border-[#d9e3f1] px-[1.1cqw] py-[1cqw] text-[1.45cqw]">
              {copy.description}
            </div>
          </div>
          <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
            <div className="text-[2.2cqw] font-semibold">{copy.historyTitle}</div>
            <div className="mt-[0.9cqw] space-y-[0.85cqw]">
              {copy.history.map(([title, body], index) => (
                <div
                  key={title}
                  className={cn(
                    "rounded-[1cqw] border px-[1.1cqw] py-[1cqw]",
                    index === 0
                      ? "border-[#f0c56f] bg-[#fff8ea]"
                      : "border-[#b8e1c4] bg-[#effcf4]"
                  )}
                >
                  <div className="text-[1.45cqw] font-semibold">{title}</div>
                  <div className="mt-[0.4cqw] text-[1.35cqw] text-[#5f6e7d]">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="text-[2.3cqw] font-semibold">{copy.sidebarTitle}</div>
          <div className="mt-[0.35cqw] text-[1.35cqw] text-[#748291]">{copy.sidebarCopy}</div>
          <div className="mt-[1cqw] rounded-[1cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[1cqw]">
            <div className="text-[1.2cqw] text-[#7a8694]">Status</div>
            <div className="mt-[0.45cqw] inline-flex rounded-full border border-[#f4cf89] bg-[#fff7e7] px-[0.8cqw] py-[0.3cqw] text-[1.25cqw] font-semibold text-[#a4680e]">
              {copy.status}
            </div>
          </div>
          <div className="mt-[1cqw] space-y-[0.75cqw]">
            {copy.actions.map((action, index) => (
              <div
                key={action}
                className={cn(
                  "rounded-[1cqw] border px-[1.1cqw] py-[1cqw] text-center text-[1.5cqw] font-semibold",
                  index === 0
                    ? "border-[#5f7894] bg-[#5f7894] text-white"
                    : "border-[#d9e3f1] bg-white"
                )}
              >
                {action}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

function WorkerReportScreen({
  className,
  locale,
}: {
  className?: string;
  locale: LandingLocale;
}) {
  const copy = screenCopy[locale].worker;

  return (
    <div
      className={cn(
        "size-full overflow-hidden border border-[#d9e3f1] bg-white text-[#243241] [container-type:inline-size]",
        className
      )}
    >
      <div className="space-y-[3.3cqw] p-[6cqw]">
        <div className="text-center text-[3.6cqw] font-semibold text-[#516983]">
          {copy.back}
        </div>
        <div>
          <div className="text-[6cqw] font-semibold leading-[1.05]">{copy.title}</div>
          <div className="mt-[2.2cqw] text-[4cqw] leading-[1.45] text-[#697888]">
            {copy.copy}
          </div>
        </div>
        <div className="rounded-[4cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[4.5cqw]">
          <div className="text-[3.7cqw] text-[#697888]">{copy.projectLabel}</div>
          <div className="mt-[1.5cqw] text-[5cqw] font-semibold">{copy.projectTitle}</div>
          <div className="mt-[1.4cqw] text-[3.7cqw] text-[#7b8796]">{copy.projectMeta}</div>
        </div>
        <div className="space-y-[3cqw]">
          {copy.fields.map(([label, value]) => (
            <div key={label}>
              <div className="mb-[1.5cqw] text-[4.1cqw] font-semibold text-[#4e6073]">
                {label}
              </div>
              <div className="rounded-[3.5cqw] border border-[#d9e3f1] px-[4.5cqw] py-[3.5cqw] text-[4.6cqw] font-semibold">
                {value}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[3.5cqw] border border-[#d9e3f1] p-[4cqw] text-[4.1cqw] leading-[1.45] text-[#546678]">
          {copy.description}
        </div>
      </div>
      <div className="grid grid-cols-4 border-t border-[#d9e3f1] bg-[#f4f7fb]">
        {copy.tabs.map((tab, index) => (
          <div
            key={tab}
            className={cn(
              "px-[1.5cqw] py-[3.2cqw] text-center text-[3.5cqw] font-semibold text-[#66788b]",
              index === 1 && "rounded-t-[3cqw] bg-[#dfe8f3] text-[#3f5872]"
            )}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

function PayrollScreen({
  className,
  locale,
}: {
  className?: string;
  locale: LandingLocale;
}) {
  const copy = screenCopy[locale].payroll;

  return (
    <ScreenShell activeIndex={6} className={className} locale={locale}>
      <div className="space-y-[1.3cqw] bg-[#f7f9fc] p-[1.5cqw]">
        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="flex items-start justify-between gap-[1cqw]">
            <div>
              <div className="text-[2.5cqw] font-semibold">{copy.title}</div>
              <div className="mt-[0.4cqw] text-[1.35cqw] text-[#748291]">{copy.copy}</div>
            </div>
            <div className="rounded-[1cqw] border border-[#d9e3f1] px-[1.15cqw] py-[0.85cqw] text-[1.35cqw] font-semibold">
              {copy.export}
            </div>
          </div>
          <div className="mt-[1cqw] grid grid-cols-[1fr_1fr_1fr_1fr_1.05fr] gap-[1cqw]">
            {copy.filters.map(([label, value]) => (
              <div key={label} className="rounded-[1cqw] border border-[#d9e3f1] bg-[#fbfcfe] p-[1cqw]">
                <div className="text-[1.2cqw] text-[#7a8694]">{label}</div>
                <div className="mt-[0.35cqw] text-[1.55cqw] font-semibold">{value}</div>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-[1cqw] bg-[#4f6f8d] px-[1cqw] text-[1.5cqw] font-semibold text-white">
              {copy.action}
            </div>
          </div>
        </div>
        <div className="rounded-[1.6cqw] border border-[#d9e3f1] bg-white p-[1.5cqw]">
          <div className="grid grid-cols-6 gap-[1cqw] border-b border-[#d9e3f1] pb-[0.8cqw] text-[1.2cqw] font-semibold text-[#6c7886]">
            {copy.headers.map((header) => (
              <div key={header}>{header}</div>
            ))}
          </div>
          <div className="mt-[0.8cqw] grid grid-cols-6 gap-[1cqw] text-[1.45cqw]">
            {copy.row.map((value) => (
              <div key={value}>{value}</div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

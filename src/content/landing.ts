export type LandingLocale = "en" | "gr";

type HeroMetric = {
  label: string;
  value: string;
  copy: string;
};

type WorkflowStep = {
  step: string;
  label: string;
  title: string;
  copy: string;
  screen: ProductScreenKey;
  alt: string;
};

type ProofCard = {
  label: string;
  title: string;
  copy: string;
  screen: ProductScreenKey;
  alt: string;
  points: string[];
};

export type ProductScreenKey =
  | "admin-dashboard"
  | "project-detail"
  | "report-review"
  | "worker-report"
  | "payroll";

type ComparisonCard = {
  label: string;
  title: string;
  copy: string;
};

type SubscriptionItem = {
  title: string;
  copy: string;
};

type PricingStep = {
  title: string;
  copy: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type LeadFormCopy = {
  fullNameLabel: string;
  companyNameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  roleLabel: string;
  fieldEmployeesLabel: string;
  activeProjectsLabel: string;
  preferredFormatLabel: string;
  preferredFormatOptions: string[];
  mainInterestLabel: string;
  interestOptions: string[];
  currentProcessLabel: string;
  submitIdle: string;
  submitPending: string;
  helper: string;
  successMessage: string;
  requestError: string;
  unknownError: string;
};

type LandingContent = {
  metadataTitle: string;
  metadataDescription: string;
  ogLocale: string;
  topBarLead: string;
  topBarSupport: string;
  brandSubline: string;
  nav: {
    workflow: string;
    proof: string;
    pilot: string;
    pricing: string;
    faq: string;
  };
  headerSupportCta: string;
  headerBookCta: string;
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
    metrics: HeroMetric[];
    shotLabels: {
      cockpit: string;
      livePilot: string;
      fieldInput: string;
      projectControl: string;
      approvalChain: string;
    };
  };
  trustPoints: string[];
  pain: {
    kicker: string;
    title: string;
    copy: string;
    items: string[];
    audienceLabel: string;
    audienceTitle: string;
    audienceCopy: string;
    trades: string[];
    localLabel: string;
    localTitle: string;
    localCopy: string;
    localBadges: string[];
  };
  workflow: {
    kicker: string;
    title: string;
    copy: string;
    steps: WorkflowStep[];
  };
  proof: {
    kicker: string;
    title: string;
    copy: string;
    cards: ProofCard[];
  };
  pilot: {
    kicker: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    includesLabel: string;
    fitLabel: string;
    includes: string[];
    fit: string[];
  };
  pricing: {
    kicker: string;
    title: string;
    copy: string;
    comparisonLabel: string;
    comparison: ComparisonCard[];
    subscriptionLabel: string;
    subscriptionPrice: string;
    subscriptionCopy: string;
    subscriptionBadges: string[];
    subscriptionItems: SubscriptionItem[];
    customLabel: string;
    customItems: string[];
    customCopy: string;
    pathLabel: string;
    pathSteps: PricingStep[];
  };
  founder: {
    kicker: string;
    title: string;
    copy: string;
    contextLabel: string;
    contextCopy: string;
    stepLabel: string;
    steps: string[];
  };
  faq: {
    kicker: string;
    title: string;
    copy: string;
    items: FaqItem[];
  };
  contact: {
    kicker: string;
    title: string;
    copy: string;
    prepItems: string[];
    bookCta: string;
    whatsappCta: string;
  };
  finalCta: {
    kicker: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    copy: string;
    privacy: string;
    cookies: string;
  };
  leadForm: LeadFormCopy;
};

const landingContentByLocale: Record<LandingLocale, LandingContent> = {
  en: {
    metadataTitle:
      "BauPilot by Kairos | Construction Workflow for Cyprus Contractors",
    metadataDescription:
      "Projects, daily site reports, crew hours and approvals in one workflow for Cyprus contractors. Free 14-day guided pilot, founder-led onboarding, 30-minute review, English and Greek support.",
    ogLocale: "en_GB",
    topBarLead: "Larnaca-based founder onboarding for contractors across Cyprus",
    topBarSupport: "Free 30-minute workflow review · One live project pilot",
    brandSubline: "Cyprus contractor operations",
    nav: {
      workflow: "Workflow",
      proof: "Product",
      pilot: "Free Pilot",
      pricing: "Pricing",
      faq: "FAQ",
    },
    headerSupportCta: "Any questions? Contact us",
    headerBookCta: "Book 30-Min Review",
    hero: {
      eyebrow: "Free 14-Day Guided Pilot for Selected Cyprus Contractors",
      title:
        "Reliable site reports, crew hours and approvals without rebuilding the day from WhatsApp.",
      copy:
        "BauPilot gives small contractors a structured workflow between the site and the office through projects, work packages, daily reports, foreman review, management approval and payroll preparation.",
      primaryCta: "Book the free review",
      secondaryCta: "WhatsApp us",
      badges: [
        "No setup fee",
        "No credit card",
        "No long-term commitment",
        "English and Greek support",
      ],
      metrics: [
        {
          label: "Primary outcome",
          value: "Site -> office",
          copy:
            "One structured reporting flow instead of scattered updates across chat, calls and spreadsheets.",
        },
        {
          label: "Pilot model",
          value: "14 days",
          copy:
            "A guided pilot on one live project after setup, onboarding and the first working flow are ready.",
        },
        {
          label: "Founding partner plan",
          value: "EUR 199",
          copy:
            "Monthly subscription after the pilot. No setup fee, no card and no long-term commitment.",
        },
        {
          label: "Local delivery",
          value: "Larnaca",
          copy:
            "Founder-led onboarding with office or site visits across Cyprus when the workflow needs it.",
        },
      ],
      shotLabels: {
        cockpit: "BauPilot cockpit",
        livePilot: "CY-LCA-014 · Live pilot",
        fieldInput: "Field input",
        projectControl: "Project control",
        approvalChain: "Approval chain",
      },
    },
    trustPoints: [
      "Free 30-minute workflow review",
      "One live project configured during the pilot",
      "Founder-led onboarding and rollout support",
      "Continue only if the workflow proves useful in practice",
    ],
    pain: {
      kicker: "01 · The pain point",
      title:
        "Site-to-office reporting becomes expensive once the company is juggling several sites.",
      copy:
        "Most small contractors do not have a reporting problem because the team refuses to communicate. They have a workflow problem because project information arrives in fragments.",
      items: [
        "The office reconstructs the day from WhatsApp messages and phone calls.",
        "Crew hours need manual checking before payroll can even start.",
        "Foremen approve work late because the report is not structured.",
        "Management cannot quickly compare planned work against completed work.",
      ],
      audienceLabel: "Who BauPilot is for",
      audienceTitle:
        "Small field teams that need operational clarity, not a giant ERP rollout.",
      audienceCopy:
        "BauPilot is aimed at Cyprus contractors with active field teams, foremen or project managers, and daily information still spread across employee phones, paper, calls and spreadsheets.",
      trades: [
        "Electrical contractors",
        "HVAC contractors",
        "Solar installers",
        "Plumbing teams",
        "Fire and security installers",
        "Fit-out contractors",
        "Facility maintenance companies",
        "Small specialist contractors",
      ],
      localLabel: "Local advantage",
      localTitle:
        "Founder-led onboarding matters when the workflow has to work on a real site.",
      localCopy:
        "Daniil is based in Larnaca and can personally visit offices or construction sites across Cyprus. The pilot is guided locally instead of being handed off to a remote support queue.",
      localBadges: ["Larnaca", "Nicosia", "Limassol", "Office or site visit"],
    },
    workflow: {
      kicker: "02 · How the workflow works",
      title: "A clear reporting chain from the site to the office.",
      copy:
        "The workflow is intentionally narrow: set the project, capture the day, review it on site, then move approved information toward project control and payroll preparation.",
      steps: [
        {
          step: "01",
          label: "Project setup",
          title: "Set the live project, work packages and responsible people.",
          copy:
            "The pilot starts with one real project, clear work packages and the reporting structure your team will actually use.",
          screen: "project-detail",
          alt:
            "BauPilot project detail view showing progress, work packages and recent reports.",
        },
        {
          step: "02",
          label: "Field submission",
          title:
            "Workers submit completed work and hours against the right package.",
          copy:
            "The worker flow keeps the site update compact: date, work package, time, quantity and a usable work description.",
          screen: "worker-report",
          alt: "BauPilot worker report form on mobile for daily report entry.",
        },
        {
          step: "03",
          label: "Foreman review",
          title: "Foremen review the report before management sees it.",
          copy:
            "Approvals and corrections happen while the day is still fresh, so the office receives something usable instead of another round of clarification.",
          screen: "report-review",
          alt:
            "BauPilot report review screen with approval actions and comment history.",
        },
        {
          step: "04",
          label: "Office control",
          title:
            "Management gets a clearer operational picture and cleaner payroll input.",
          copy:
            "Approved reports roll into project visibility, pending items and payroll preparation without rebuilding the story of the day.",
          screen: "payroll",
          alt: "BauPilot payroll overview screen with approved hours by employee.",
        },
      ],
    },
    proof: {
      kicker: "03 · Product proof",
      title: "Real BauPilot screens across the live workflow.",
      copy:
        "The screenshots show the actual product across field input, project control, approvals and admin views. BauPilot supports English and Greek workflows for mixed teams.",
      cards: [
        {
          label: "Cockpit",
          title: "Management visibility across active work",
          copy:
            "See what is waiting for foreman review, what is ready for management approval and which projects are moving.",
          screen: "admin-dashboard",
          alt: "BauPilot admin dashboard with analytics and project progress.",
          points: [
            "Pending approvals are visible immediately",
            "Project progress and hours sit in one place",
            "Useful for owners and operations leads, not just office admins",
          ],
        },
        {
          label: "Project control",
          title: "Track work packages against planned quantities",
          copy:
            "The project view ties teams, progress, hours and recent reports back to a real live project instead of a generic activity feed.",
          screen: "project-detail",
          alt: "BauPilot project detail page with work packages and progress.",
          points: [
            "Planned versus completed work stays explicit",
            "Work package ownership is clear",
            "Recent reports stay connected to the project record",
          ],
        },
        {
          label: "Approvals",
          title: "Keep the foreman and office approval path explicit",
          copy:
            "The review screen shows status, working time, quantities, comments and next actions in one place.",
          screen: "report-review",
          alt: "BauPilot report approval interface with status and comments.",
          points: [
            "The site report becomes an auditable record",
            "Corrections are documented instead of disappearing in chat",
            "Management sees what has already been checked",
          ],
        },
        {
          label: "Payroll prep",
          title: "Release cleaner approved hours for payroll preparation",
          copy:
            "BauPilot does not replace accounting. It gives payroll work better approved input from the site and foreman flow.",
          screen: "payroll",
          alt: "BauPilot payroll preparation screen with approved hours and totals.",
          points: [
            "Approved hours are visible by employee",
            "Pending and rejected items stay visible",
            "Exports remain possible for later finance workflows",
          ],
        },
      ],
    },
    pilot: {
      kicker: "04 · Free pilot offer",
      title: "Test BauPilot on one real project for 14 days, free.",
      copy:
        "This is not anonymous trial access. The pilot is a guided implementation on one live project so you can test whether the site-to-office reporting flow actually works with your team.",
      primaryCta: "Apply for the pilot",
      secondaryCta: "Book the review",
      includesLabel: "Included in the guided pilot",
      fitLabel: "Good fit if",
      includes: [
        "Free 30-minute workflow review before the pilot starts",
        "Setup of BauPilot on one live project",
        "Work package and reporting workflow configuration",
        "Onboarding for the responsible foreman and field team",
        "Support during the 14-day guided pilot",
        "Final pilot review with a continue-or-stop recommendation",
      ],
      fit: [
        "You have 5 to 40 field employees",
        "You run two or more active projects or have reporting complexity across teams",
        "An owner, director or operations lead is still close to daily operations",
        "A foreman, project manager or team leader is involved on site",
        "You want to test a better reporting workflow before committing long-term",
      ],
    },
    pricing: {
      kicker: "05 · After the pilot",
      title:
        "Simple subscription first. Custom work only when it is genuinely needed.",
      copy:
        "After the pilot, the commercial path stays simple. Standard BauPilot usage is covered by subscription. Larger custom workflows, reports and integrations remain separate scoped work.",
      comparisonLabel: "Why this buying path is cleaner",
      comparison: [
        {
          label: "WhatsApp + Excel",
          title: "Fast to start, hard to control",
          copy:
            "Useful for basic communication, but painful once hours, quantities, approvals and several sites need structure.",
        },
        {
          label: "Broad enterprise platform",
          title: "More system than many small teams need",
          copy:
            "Strong at scale, but often heavier than a Cyprus contractor needs when the core issue is site-to-office reporting discipline.",
        },
        {
          label: "Custom software project",
          title: "Good later, slow as a first test",
          copy:
            "Custom development still matters, but only after the real workflow is proven and the right scope is clear.",
        },
      ],
      subscriptionLabel: "Founding partner subscription",
      subscriptionPrice: "EUR 199",
      subscriptionCopy: "per month after the pilot",
      subscriptionBadges: [
        "No long-term commitment",
        "English and Greek workflows",
      ],
      subscriptionItems: [
        {
          title: "Projects and work packages",
          copy: "Set live projects, packages and responsibilities in one operating layer.",
        },
        {
          title: "Daily field reporting",
          copy: "Capture hours, quantities and work notes directly from the site team.",
        },
        {
          title: "Foreman and management approvals",
          copy: "Move reports through a clear review path before office use and payroll prep.",
        },
        {
          title: "Payroll-ready exports",
          copy: "Release cleaner approved hours and data exports for back-office processing.",
        },
        {
          title: "Standard support and updates",
          copy: "Keep the core workflow stable with ongoing product support from Kairos.",
        },
      ],
      customLabel: "Scoped separately by Kairos",
      customItems: [
        "Custom workflows",
        "Custom reports",
        "Accounting or payroll integrations",
        "Other business-specific modules or automation",
      ],
      customCopy:
        "The subscription does not imply unlimited custom development. If a company needs custom workflows, reports or integrations, those are scoped after the operational foundation has already been proven.",
      pathLabel: "Commercial path",
      pathSteps: [
        {
          title: "Run the guided pilot first",
          copy:
            "Use one live project to prove the reporting workflow before making a monthly decision.",
        },
        {
          title: "Move to the EUR 199 core subscription",
          copy:
            "Keep standard BauPilot usage simple once the site-to-office flow is working in practice.",
        },
        {
          title: "Scope custom work only with a clear need",
          copy:
            "Add reports, integrations or extra modules only when the business case is specific and proven.",
        },
      ],
    },
    founder: {
      kicker: "06 · Founder-led onboarding",
      title: "Local rollout is part of the offer, not a footnote.",
      copy:
        "The workflow review, pilot setup, team onboarding and rollout guidance are led directly by Daniil rather than delegated to a generic implementation queue.",
      contextLabel: "Cyprus delivery context",
      contextCopy:
        "For many small contractors, trust comes from seeing that the product can be configured on a live project and explained in practical terms. That is why the first outreach path points to a real 30-minute workflow review, not just a generic self-serve sign-up.",
      stepLabel: "Founder-led step",
      steps: [
        "Initial workflow review with management",
        "Pilot setup on one live project",
        "Foreman and field onboarding",
        "Office or site visit in Cyprus when useful",
        "Pilot support during the rollout",
        "Final review and next-step recommendation",
      ],
    },
    faq: {
      kicker: "07 · FAQ",
      title: "Questions a small contractor owner is likely to ask first.",
      copy:
        "The goal is to qualify the fit clearly and reduce buying friction, not to oversell.",
      items: [
        {
          question: "Is BauPilot a full construction ERP?",
          answer:
            "No. BauPilot is positioned as a focused workflow between the site and the office. The promise here is better reporting, approvals and payroll preparation input, not a full finance or procurement system.",
        },
        {
          question: "What exactly happens during the free 14-day guided pilot?",
          answer:
            "Kairos sets up BauPilot on one live project, onboards the team, helps test the reporting flow and reviews the result with you after 14 days of actual use.",
        },
        {
          question: "When does the 14-day period start?",
          answer:
            "The pilot starts after setup, onboarding and the first live workflow are ready. The goal is to test the working process, not to waste days on account setup.",
        },
        {
          question: "What happens after the pilot?",
          answer:
            "If the workflow is a fit, the founding partner subscription is EUR 199 per month. If it is not a fit, there is no setup fee, no card and no long-term commitment keeping you in.",
        },
        {
          question:
            "Are custom workflows, reports and integrations included in the subscription?",
          answer:
            "No. Standard BauPilot usage is covered by the subscription. Larger custom workflows, reports and integrations are scoped separately by Kairos.",
        },
        {
          question: "Can our founder Daniil meet us in person in Cyprus?",
          answer:
            "Yes. Our founder Daniil is based in Larnaca and can personally visit offices or construction sites across Cyprus during the workflow review, setup and pilot rollout.",
        },
      ],
    },
    contact: {
      kicker: "08 · Request a review",
      title: "Book the workflow review or apply for the guided pilot.",
      copy:
        "The review can happen in your office, on a construction site or on a video call. Use the form if you want Daniil to follow up, or go straight to WhatsApp if that is faster.",
      prepItems: [
        "Preferred format: office visit, site visit or video call",
        "Team size, active projects and current reporting workflow",
        "Whether you want the review only, the pilot, or both",
      ],
      bookCta: "Book the review",
      whatsappCta: "WhatsApp us",
    },
    finalCta: {
      kicker: "09 · Next step",
      title: "Start with one live project, not a heavy software commitment.",
      copy:
        "If you are a small contractor in Cyprus and the current reporting workflow is still spread across WhatsApp, calls, paper and spreadsheets, the next step is a practical workflow review, not a long software procurement cycle.",
      primaryCta: "Book the review",
      secondaryCta: "WhatsApp us",
    },
    footer: {
      copy:
        "BauPilot by Kairos. Structured site-to-office workflow for small contractors in Cyprus.",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    leadForm: {
      fullNameLabel: "Full name",
      companyNameLabel: "Company name",
      emailLabel: "Work email",
      phoneLabel: "Phone or WhatsApp",
      roleLabel: "Role",
      fieldEmployeesLabel: "Field employees",
      activeProjectsLabel: "Active projects",
      preferredFormatLabel: "Preferred meeting format",
      preferredFormatOptions: [
        "Office visit",
        "Construction site visit",
        "Video call",
      ],
      mainInterestLabel: "Main interest",
      interestOptions: ["Workflow review", "14-day guided pilot", "Both"],
      currentProcessLabel: "Current reporting process",
      submitIdle: "Request a workflow review",
      submitPending: "Submitting...",
      helper: "Free setup · clear qualification · no credit card",
      successMessage:
        "Request received. Daniil can follow up for the workflow review or guided pilot.",
      requestError: "The request could not be submitted. Please try again.",
      unknownError: "Unexpected submission error.",
    },
  },
  gr: {
    metadataTitle:
      "BauPilot by Kairos | Workflow για εργολάβους στην Κύπρο",
    metadataDescription:
      "Έργα, ημερήσιες αναφορές εργοταξίου, ώρες συνεργείων και εγκρίσεις σε ένα workflow για εργολάβους στην Κύπρο. Δωρεάν pilot 14 ημερών, founder-led onboarding, 30λεπτο review και υποστήριξη στα αγγλικά και στα ελληνικά.",
    ogLocale: "el_CY",
    topBarLead: "Founder-led onboarding από τη Λάρνακα για εργολάβους σε όλη την Κύπρο",
    topBarSupport: "Δωρεάν 30λεπτο workflow review · Πιλοτική εφαρμογή σε ένα live project",
    brandSubline: "Λειτουργίες εργολάβων στην Κύπρο",
    nav: {
      workflow: "Ροή",
      proof: "Product",
      pilot: "Δωρεάν Pilot",
      pricing: "Τιμή",
      faq: "FAQ",
    },
    headerSupportCta: "Απορίες; Επικοινωνήστε μαζί μας",
    headerBookCta: "Κλείσε 30λεπτο review",
    hero: {
      eyebrow: "Δωρεάν καθοδηγούμενο pilot 14 ημερών για επιλεγμένους εργολάβους στην Κύπρο",
      title:
        "Αξιόπιστες αναφορές εργοταξίου, ώρες συνεργείων και εγκρίσεις χωρίς να ξαναχτίζετε τη μέρα από το WhatsApp.",
      copy:
        "Το BauPilot δίνει στους μικρούς εργολάβους μια δομημένη ροή ανάμεσα στο εργοτάξιο και το γραφείο με έργα, πακέτα εργασίας, ημερήσιες αναφορές, έλεγχο εργοδηγού, διοικητική έγκριση και προετοιμασία μισθοδοσίας.",
      primaryCta: "Κλείσε το δωρεάν review",
      secondaryCta: "WhatsApp us",
      badges: [
        "Χωρίς setup fee",
        "Χωρίς κάρτα",
        "Χωρίς μακροχρόνια δέσμευση",
        "Υποστήριξη σε αγγλικά και ελληνικά",
      ],
      metrics: [
        {
          label: "Βασικό αποτέλεσμα",
          value: "Εργοτάξιο -> γραφείο",
          copy:
            "Μία δομημένη ροή αναφορών αντί για διάσπαρτες ενημερώσεις σε chat, κλήσεις και spreadsheets.",
        },
        {
          label: "Μοντέλο pilot",
          value: "14 ημέρες",
          copy:
            "Καθοδηγούμενο pilot σε ένα live project αφού ολοκληρωθούν το setup, το onboarding και η πρώτη πραγματική ροή.",
        },
        {
          label: "Ιδρυτικό πλάνο",
          value: "EUR 199",
          copy:
            "Μηνιαία συνδρομή μετά το pilot. Χωρίς setup fee, χωρίς κάρτα και χωρίς μακροχρόνια δέσμευση.",
        },
        {
          label: "Τοπική υποστήριξη",
          value: "Λάρνακα",
          copy:
            "Founder-led onboarding με επισκέψεις σε γραφείο ή εργοτάξιο σε όλη την Κύπρο όταν το workflow το χρειάζεται.",
        },
      ],
      shotLabels: {
        cockpit: "BauPilot cockpit",
        livePilot: "CY-LCA-014 · Live pilot",
        fieldInput: "Καταχώριση πεδίου",
        projectControl: "Έλεγχος έργου",
        approvalChain: "Αλυσίδα εγκρίσεων",
      },
    },
    trustPoints: [
      "Δωρεάν 30λεπτο workflow review",
      "Ένα live project παραμετροποιημένο μέσα στο pilot",
      "Founder-led onboarding και υποστήριξη rollout",
      "Συνεχίζετε μόνο αν το workflow αποδείξει αξία στην πράξη",
    ],
    pain: {
      kicker: "01 · Το πρόβλημα",
      title:
        "Η ροή εργοταξίου προς γραφείο γίνεται ακριβή μόλις η εταιρεία τρέχει πολλά έργα μαζί.",
      copy:
        "Οι περισσότεροι μικροί εργολάβοι δεν έχουν πρόβλημα επειδή η ομάδα δεν επικοινωνεί. Έχουν πρόβλημα ροής επειδή οι πληροφορίες των έργων φτάνουν αποσπασματικά.",
      items: [
        "Το γραφείο ξαναχτίζει τη μέρα από μηνύματα WhatsApp και τηλεφωνήματα.",
        "Οι ώρες των συνεργείων χρειάζονται χειροκίνητο έλεγχο πριν καν αρχίσει η μισθοδοσία.",
        "Οι εργοδηγοί εγκρίνουν αργά επειδή η αναφορά δεν είναι δομημένη.",
        "Η διοίκηση δεν μπορεί να συγκρίνει γρήγορα το προγραμματισμένο έργο με το ολοκληρωμένο.",
      ],
      audienceLabel: "Για ποιους είναι το BauPilot",
      audienceTitle:
        "Μικρές field teams που χρειάζονται λειτουργική καθαρότητα, όχι ένα τεράστιο ERP rollout.",
      audienceCopy:
        "Το BauPilot απευθύνεται σε εργολάβους στην Κύπρο με ενεργές ομάδες πεδίου, εργοδηγούς ή project managers, όπου η καθημερινή πληροφορία είναι ακόμη μοιρασμένη σε κινητά, χαρτιά, κλήσεις και spreadsheets.",
      trades: [
        "Ηλεκτρολογικοί εργολάβοι",
        "HVAC contractors",
        "Εγκαταστάτες φωτοβολταϊκών",
        "Υδραυλικές ομάδες",
        "Συστήματα πυρασφάλειας και security",
        "Fit-out contractors",
        "Εταιρείες facility maintenance",
        "Μικροί εξειδικευμένοι εργολάβοι",
      ],
      localLabel: "Τοπικό πλεονέκτημα",
      localTitle:
        "Το founder-led onboarding έχει σημασία όταν το workflow πρέπει να δουλέψει σε πραγματικό εργοτάξιο.",
      localCopy:
        "Ο Daniil βρίσκεται στη Λάρνακα και μπορεί να επισκεφθεί προσωπικά γραφεία ή εργοτάξια σε όλη την Κύπρο. Το pilot καθοδηγείται τοπικά αντί να καταλήγει σε μια απομακρυσμένη ουρά υποστήριξης.",
      localBadges: ["Λάρνακα", "Λευκωσία", "Λεμεσός", "Επίσκεψη σε γραφείο ή εργοτάξιο"],
    },
    workflow: {
      kicker: "02 · Πώς δουλεύει η ροή",
      title: "Μια καθαρή αλυσίδα αναφορών από το εργοτάξιο προς το γραφείο.",
      copy:
        "Η ροή είναι σκόπιμα στενή: ορίζεις το έργο, καταγράφεις τη μέρα, γίνεται έλεγχος στο πεδίο και μετά η εγκεκριμένη πληροφορία περνά σε project control και προετοιμασία μισθοδοσίας.",
      steps: [
        {
          step: "01",
          label: "Ρύθμιση έργου",
          title: "Ορίστε το live project, τα πακέτα εργασίας και τους υπεύθυνους.",
          copy:
            "Το pilot ξεκινά με ένα πραγματικό έργο, σαφή work packages και τη δομή αναφορών που η ομάδα σας θα χρησιμοποιήσει στην πράξη.",
          screen: "project-detail",
          alt:
            "BauPilot project detail view showing progress, work packages and recent reports.",
        },
        {
          step: "02",
          label: "Καταχώριση πεδίου",
          title:
            "Οι εργαζόμενοι υποβάλλουν ολοκληρωμένη εργασία και ώρες στο σωστό package.",
          copy:
            "Η ροή του εργαζομένου κρατά την ενημέρωση του εργοταξίου σύντομη: ημερομηνία, πακέτο εργασίας, χρόνος, ποσότητα και χρήσιμη περιγραφή εργασίας.",
          screen: "worker-report",
          alt: "BauPilot worker report form on mobile for daily report entry.",
        },
        {
          step: "03",
          label: "Έλεγχος εργοδηγού",
          title: "Ο εργοδηγός ελέγχει την αναφορά πριν τη δει η διοίκηση.",
          copy:
            "Οι εγκρίσεις και οι διορθώσεις γίνονται όσο η μέρα είναι ακόμη φρέσκια, ώστε το γραφείο να λαμβάνει κάτι χρήσιμο αντί για νέο κύκλο διευκρινίσεων.",
          screen: "report-review",
          alt:
            "BauPilot report review screen with approval actions and comment history.",
        },
        {
          step: "04",
          label: "Έλεγχος γραφείου",
          title:
            "Η διοίκηση αποκτά καθαρότερη εικόνα λειτουργίας και καλύτερη βάση για τη μισθοδοσία.",
          copy:
            "Οι εγκεκριμένες αναφορές περνούν σε ορατότητα έργου, εκκρεμότητες και προετοιμασία μισθοδοσίας χωρίς να ξαναχτίζεται η ιστορία της μέρας.",
          screen: "payroll",
          alt: "BauPilot payroll overview screen with approved hours by employee.",
        },
      ],
    },
    proof: {
      kicker: "03 · Οθόνες προϊόντος",
      title: "Πραγματικές οθόνες BauPilot σε όλη τη live ροή.",
      copy:
        "Τα screenshots δείχνουν το πραγματικό προϊόν σε field input, project control, approvals και admin views. Το BauPilot υποστηρίζει αγγλικά και ελληνικά για μικτές ομάδες.",
      cards: [
        {
          label: "Cockpit",
          title: "Ορατότητα διοίκησης σε όλη την ενεργή εργασία",
          copy:
            "Δείτε τι περιμένει έλεγχο εργοδηγού, τι είναι έτοιμο για διοικητική έγκριση και ποια έργα κινούνται.",
          screen: "admin-dashboard",
          alt: "BauPilot admin dashboard with analytics and project progress.",
          points: [
            "Οι εκκρεμείς εγκρίσεις φαίνονται άμεσα",
            "Η πρόοδος έργου και οι ώρες βρίσκονται σε ένα σημείο",
            "Χρήσιμο για owners και operations leads, όχι μόνο για office admins",
          ],
        },
        {
          label: "Project control",
          title: "Παρακολουθήστε τα work packages σε σχέση με τις προγραμματισμένες ποσότητες",
          copy:
            "Η προβολή του έργου συνδέει ομάδες, πρόοδο, ώρες και πρόσφατες αναφορές με ένα πραγματικό live project αντί για ένα γενικό activity feed.",
          screen: "project-detail",
          alt: "BauPilot project detail page with work packages and progress.",
          points: [
            "Το planned versus completed work μένει σαφές",
            "Η ευθύνη κάθε work package είναι καθαρή",
            "Οι πρόσφατες αναφορές μένουν συνδεδεμένες με το project record",
          ],
        },
        {
          label: "Approvals",
          title: "Κρατήστε ρητή τη διαδρομή έγκρισης εργοδηγού και γραφείου",
          copy:
            "Η οθόνη review δείχνει status, χρόνο εργασίας, ποσότητες, σχόλια και επόμενες ενέργειες σε ένα σημείο.",
          screen: "report-review",
          alt: "BauPilot report approval interface with status and comments.",
          points: [
            "Η αναφορά εργοταξίου γίνεται ελέγξιμο record",
            "Οι διορθώσεις καταγράφονται αντί να χάνονται στο chat",
            "Η διοίκηση βλέπει τι έχει ήδη ελεγχθεί",
          ],
        },
        {
          label: "Payroll prep",
          title: "Περάστε καθαρότερες εγκεκριμένες ώρες για προετοιμασία μισθοδοσίας",
          copy:
            "Το BauPilot δεν αντικαθιστά τη λογιστική. Δίνει στη μισθοδοσία καλύτερο εγκεκριμένο input από τη ροή εργοταξίου και εργοδηγού.",
          screen: "payroll",
          alt: "BauPilot payroll preparation screen with approved hours and totals.",
          points: [
            "Οι εγκεκριμένες ώρες φαίνονται ανά εργαζόμενο",
            "Τα pending και rejected items παραμένουν ορατά",
            "Παραμένουν δυνατά exports για μελλοντικές finance workflows",
          ],
        },
      ],
    },
    pilot: {
      kicker: "04 · Δωρεάν pilot",
      title: "Δοκιμάστε το BauPilot σε ένα πραγματικό έργο για 14 ημέρες, δωρεάν.",
      copy:
        "Δεν πρόκειται για ανώνυμη trial πρόσβαση. Το pilot είναι μια καθοδηγούμενη υλοποίηση σε ένα live project ώστε να δείτε αν η ροή εργοταξίου προς γραφείο δουλεύει πραγματικά με την ομάδα σας.",
      primaryCta: "Κάνε αίτηση για το pilot",
      secondaryCta: "Κλείσε το review",
      includesLabel: "Περιλαμβάνονται στο guided pilot",
      fitLabel: "Καλή εφαρμογή αν",
      includes: [
      "Δωρεάν 30λεπτο workflow review πριν ξεκινήσει το pilot",
        "Setup του BauPilot σε ένα live project",
        "Παραμετροποίηση work packages και reporting workflow",
        "Onboarding για τον υπεύθυνο εργοδηγό και την ομάδα πεδίου",
        "Υποστήριξη κατά τη διάρκεια του guided pilot των 14 ημερών",
        "Τελικό pilot review με σύσταση για συνέχεια ή διακοπή",
      ],
      fit: [
        "Έχετε 5 έως 40 εργαζόμενους στο πεδίο",
        "Τρέχετε δύο ή περισσότερα ενεργά έργα ή έχετε πολυπλοκότητα αναφορών ανάμεσα σε ομάδες",
        "Ο owner, director ή operations lead είναι ακόμη κοντά στην καθημερινή λειτουργία",
        "Στο εργοτάξιο εμπλέκεται εργοδηγός, project manager ή team leader",
        "Θέλετε να δοκιμάσετε καλύτερο reporting workflow πριν δεσμευτείτε μακροπρόθεσμα",
      ],
    },
    pricing: {
      kicker: "05 · Μετά το pilot",
      title:
        "Απλή συνδρομή πρώτα. Custom δουλειά μόνο όταν τη χρειάζεστε πραγματικά.",
      copy:
        "Μετά το pilot, η εμπορική διαδρομή μένει απλή. Η τυπική χρήση του BauPilot καλύπτεται από συνδρομή. Μεγαλύτερα custom workflows, reports και integrations παραμένουν ξεχωριστό scoped work.",
      comparisonLabel: "Γιατί αυτή η εμπορική διαδρομή είναι πιο καθαρή",
      comparison: [
        {
          label: "WhatsApp + Excel",
          title: "Γρήγορο για να ξεκινήσεις, δύσκολο για να το ελέγξεις",
          copy:
            "Χρήσιμο για βασική επικοινωνία, αλλά επώδυνο όταν ώρες, ποσότητες, εγκρίσεις και πολλά sites χρειάζονται δομή.",
        },
        {
          label: "Broad enterprise platform",
          title: "Περισσότερο σύστημα απ’ όσο χρειάζονται πολλές μικρές ομάδες",
          copy:
            "Ισχυρό σε μεγάλη κλίμακα, αλλά συχνά πιο βαρύ απ’ όσο χρειάζεται ένας εργολάβος στην Κύπρο όταν το βασικό ζήτημα είναι η πειθαρχία στη ροή εργοτάξιο προς γραφείο.",
        },
        {
          label: "Custom software project",
          title: "Καλό αργότερα, αργό ως πρώτο τεστ",
          copy:
            "Το custom development έχει αξία, αλλά μόνο αφού αποδειχθεί το πραγματικό workflow και ξεκαθαρίσει το σωστό scope.",
        },
      ],
      subscriptionLabel: "Ιδρυτική συνδρομή συνεργάτη",
      subscriptionPrice: "EUR 199",
      subscriptionCopy: "τον μήνα μετά το pilot",
      subscriptionBadges: [
        "Χωρίς μακροχρόνια δέσμευση",
        "Ροές σε αγγλικά και ελληνικά",
      ],
      subscriptionItems: [
        {
          title: "Έργα και work packages",
          copy: "Ορίστε live έργα, πακέτα εργασίας και υπευθυνότητες σε μία λειτουργική ροή.",
        },
        {
          title: "Ημερήσια reporting από το πεδίο",
          copy: "Καταγράψτε ώρες, ποσότητες και σημειώσεις εργασίας απευθείας από την ομάδα εργοταξίου.",
        },
        {
          title: "Εγκρίσεις εργοδηγού και διοίκησης",
          copy: "Περάστε τις αναφορές από καθαρή διαδρομή review πριν τη χρήση από το γραφείο και τη μισθοδοσία.",
        },
        {
          title: "Exports για μισθοδοσία",
          copy: "Δώστε καθαρότερες εγκεκριμένες ώρες και export δεδομένων για back-office επεξεργασία.",
        },
        {
          title: "Τυπική υποστήριξη και updates",
          copy: "Κρατήστε τη βασική ροή σταθερή με συνεχή product support από την Kairos.",
        },
      ],
      customLabel: "Ορίζονται ξεχωριστά από την Kairos",
      customItems: [
        "Custom workflows",
        "Custom reports",
        "Accounting ή payroll integrations",
        "Άλλα business-specific modules ή automations",
      ],
      customCopy:
        "Η συνδρομή δεν σημαίνει απεριόριστο custom development. Αν μια εταιρεία χρειάζεται custom workflows, reports ή integrations, αυτά ορίζονται αφού πρώτα αποδειχθεί η λειτουργική βάση.",
      pathLabel: "Εμπορική διαδρομή",
      pathSteps: [
        {
          title: "Ξεκινήστε πρώτα με το guided pilot",
          copy:
            "Χρησιμοποιήστε ένα live project για να αποδείξετε τη ροή reporting πριν πάρετε μηνιαία απόφαση.",
        },
        {
          title: "Συνεχίστε με τη βασική συνδρομή EUR 199",
          copy:
            "Κρατήστε την τυπική χρήση του BauPilot απλή μόλις η ροή εργοτάξιο προς γραφείο δουλεύει στην πράξη.",
        },
        {
          title: "Ορίστε custom δουλειά μόνο όταν υπάρχει σαφής ανάγκη",
          copy:
            "Προσθέστε reports, integrations ή extra modules μόνο όταν το business case είναι συγκεκριμένο και αποδεδειγμένο.",
        },
      ],
    },
    founder: {
      kicker: "06 · Founder-led onboarding",
      title: "Το local rollout είναι μέρος της πρότασης, όχι υποσημείωση.",
      copy:
        "Το workflow review, το pilot setup, το team onboarding και η καθοδήγηση rollout γίνονται απευθείας από τον Daniil και όχι από μια γενική implementation queue.",
      contextLabel: "Πλαίσιο παράδοσης στην Κύπρο",
      contextCopy:
        "Για πολλούς μικρούς εργολάβους, η εμπιστοσύνη έρχεται όταν βλέπουν ότι το προϊόν μπορεί να παραμετροποιηθεί σε ένα live project και να εξηγηθεί πρακτικά. Γι’ αυτό το πρώτο βήμα είναι ένα αληθινό 30λεπτο workflow review, όχι ένα generic self-serve sign-up.",
      stepLabel: "Founder-led βήμα",
      steps: [
        "Αρχικό workflow review με τη διοίκηση",
        "Pilot setup σε ένα live project",
        "Onboarding εργοδηγού και ομάδας πεδίου",
        "Επίσκεψη σε γραφείο ή εργοτάξιο στην Κύπρο όταν χρειάζεται",
        "Υποστήριξη κατά τη διάρκεια του rollout",
        "Τελικό review και σύσταση επόμενου βήματος",
      ],
    },
    faq: {
      kicker: "07 · FAQ",
      title: "Οι ερωτήσεις που είναι πιο πιθανό να κάνει πρώτα ένας μικρός εργολάβος.",
      copy:
        "Ο στόχος είναι να ξεκαθαρίζει το fit και να μειώνεται η τριβή στην αγορά, όχι να γίνει oversell.",
      items: [
        {
          question: "Είναι το BauPilot ένα πλήρες construction ERP;",
          answer:
            "Όχι. Το BauPilot τοποθετείται ως στοχευμένη ροή ανάμεσα στο εργοτάξιο και το γραφείο. Η υπόσχεση εδώ είναι καλύτερες αναφορές, εγκρίσεις και input για προετοιμασία μισθοδοσίας, όχι ένα πλήρες σύστημα finance ή procurement.",
        },
        {
          question: "Τι ακριβώς συμβαίνει στο δωρεάν guided pilot των 14 ημερών;",
          answer:
            "Η Kairos στήνει το BauPilot σε ένα live project, κάνει onboarding στην ομάδα, βοηθά να δοκιμαστεί η reporting ροή και εξετάζει το αποτέλεσμα μαζί σας μετά από 14 ημέρες πραγματικής χρήσης.",
        },
        {
          question: "Πότε ξεκινά η περίοδος των 14 ημερών;",
          answer:
            "Το pilot ξεκινά αφού το setup, το onboarding και η πρώτη live ροή είναι έτοιμα. Ο στόχος είναι να δοκιμαστεί η λειτουργική διαδικασία, όχι να χαθούν μέρες σε account setup.",
        },
        {
          question: "Τι γίνεται μετά το pilot;",
          answer:
            "Αν το workflow ταιριάζει, η ιδρυτική συνδρομή είναι EUR 199 τον μήνα. Αν δεν ταιριάζει, δεν υπάρχει setup fee, κάρτα ή μακροχρόνια δέσμευση που σας κρατά μέσα.",
        },
        {
          question:
            "Περιλαμβάνονται custom workflows, reports και integrations στη συνδρομή;",
          answer:
            "Όχι. Η τυπική χρήση του BauPilot καλύπτεται από τη συνδρομή. Μεγαλύτερα custom workflows, reports και integrations ορίζονται ξεχωριστά από την Kairos.",
        },
        {
          question: "Μπορεί ο founder μας, ο Daniil, να μας συναντήσει από κοντά στην Κύπρο;",
          answer:
            "Ναι. Ο founder μας, ο Daniil, βρίσκεται στη Λάρνακα και μπορεί να επισκεφθεί προσωπικά γραφεία ή εργοτάξια σε όλη την Κύπρο κατά το workflow review, το setup και το pilot rollout.",
        },
      ],
    },
    contact: {
      kicker: "08 · Ζήτησε review",
      title: "Κλείσε το workflow review ή κάνε αίτηση για το guided pilot.",
      copy:
        "Το review μπορεί να γίνει στο γραφείο σας, στο εργοτάξιο ή με video call. Χρησιμοποιήστε τη φόρμα αν θέλετε follow-up από τον Daniil ή πηγαίνετε κατευθείαν στο WhatsApp αν είναι πιο γρήγορο.",
      prepItems: [
        "Προτιμώμενη μορφή: επίσκεψη στο γραφείο, στο εργοτάξιο ή video call",
        "Μέγεθος ομάδας, ενεργά έργα και τρέχουσα reporting ροή",
        "Αν θέλετε μόνο review, το pilot ή και τα δύο",
      ],
      bookCta: "Κλείσε το review",
      whatsappCta: "WhatsApp us",
    },
    finalCta: {
      kicker: "09 · Επόμενο βήμα",
      title: "Ξεκινήστε με ένα live project, όχι με μια βαριά software δέσμευση.",
      copy:
        "Αν είστε μικρός εργολάβος στην Κύπρο και η τωρινή reporting ροή είναι ακόμη σκορπισμένη σε WhatsApp, κλήσεις, χαρτί και spreadsheets, το επόμενο βήμα είναι ένα πρακτικό workflow review, όχι ένας μακρύς software procurement κύκλος.",
      primaryCta: "Κλείσε το review",
      secondaryCta: "WhatsApp us",
    },
    footer: {
      copy:
        "BauPilot by Kairos. Δομημένη ροή εργοταξίου προς γραφείο για μικρούς εργολάβους στην Κύπρο.",
      privacy: "Απόρρητο",
      cookies: "Cookies",
    },
    leadForm: {
      fullNameLabel: "Ονοματεπώνυμο",
      companyNameLabel: "Όνομα εταιρείας",
      emailLabel: "Εταιρικό email",
      phoneLabel: "Τηλέφωνο ή WhatsApp",
      roleLabel: "Ρόλος",
      fieldEmployeesLabel: "Εργαζόμενοι πεδίου",
      activeProjectsLabel: "Ενεργά έργα",
      preferredFormatLabel: "Προτιμώμενη μορφή συνάντησης",
      preferredFormatOptions: [
        "Επίσκεψη στο γραφείο",
        "Επίσκεψη στο εργοτάξιο",
        "Video call",
      ],
      mainInterestLabel: "Κύριο ενδιαφέρον",
      interestOptions: [
        "Workflow review",
        "Guided pilot 14 ημερών",
        "Και τα δύο",
      ],
      currentProcessLabel: "Τρέχουσα διαδικασία αναφορών",
      submitIdle: "Ζήτησε workflow review",
      submitPending: "Υποβολή...",
      helper: "Δωρεάν setup · καθαρή αξιολόγηση fit · χωρίς κάρτα",
      successMessage:
        "Το αίτημα καταχωρήθηκε. Ο Daniil μπορεί να κάνει follow-up για το workflow review ή το guided pilot.",
      requestError: "Το αίτημα δεν υποβλήθηκε. Δοκιμάστε ξανά.",
      unknownError: "Προέκυψε απρόσμενο σφάλμα υποβολής.",
    },
  },
};

export function getLandingContent(locale: LandingLocale): LandingContent {
  return landingContentByLocale[locale];
}

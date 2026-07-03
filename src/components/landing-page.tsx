import { LeadForm } from "@/components/lead-form";
import { ProductScreen } from "@/components/product-screens";
import { TrackedLink } from "@/components/tracked-link";
import {
  LandingLocale,
  ProductScreenKey,
  getLandingContent,
} from "@/content/landing";

const bookingHref =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendly.com/daniilbolohan/30min";
const whatsappHref =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/35794476600";

export function LandingPage({ locale }: { locale: LandingLocale }) {
  const content = getLandingContent(locale);
  const repeatedTrustPoints = [...content.trustPoints, ...content.trustPoints];
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-background/92 backdrop-blur-md">
        <div className="border-b border-line/60 bg-foreground text-background">
          <div className="section-shell flex flex-wrap items-center justify-between gap-3 py-3 text-xs sm:text-sm">
            <p className="text-background/78">{content.topBarLead}</p>
            <p className="technical-label text-background/60">
              {content.topBarSupport}
            </p>
          </div>
        </div>

        <div className="section-shell flex items-center justify-between gap-6 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="min-w-0">
              <span className="block font-heading text-base font-semibold text-balance">
                BauPilot by Kairos
              </span>
              <span className="technical-label mt-1 block text-muted">
                {content.brandSubline}
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex"
          >
            <a href="#workflow" className="transition-colors hover:text-foreground">
              {content.nav.workflow}
            </a>
            <a href="#proof" className="transition-colors hover:text-foreground">
              {content.nav.proof}
            </a>
            <a href="#pilot" className="transition-colors hover:text-foreground">
              {content.nav.pilot}
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              {content.nav.pricing}
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              {content.nav.faq}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch currentLocale={locale} />
            <div className="hidden items-center gap-3 md:flex">
              <TrackedLink
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                eventName="whatsapp_click"
                href={whatsappHref}
                metadata={{ locale, placement: "header" }}
              >
                {content.headerSupportCta}
              </TrackedLink>
              <TrackedLink
                className="inline-flex min-w-[13rem] items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                eventName="book_review_click"
                href={bookingHref}
                metadata={{ locale, placement: "header" }}
              >
                {content.headerBookCta}
              </TrackedLink>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-line/70">
          <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
          <div className="section-shell relative grid gap-14 py-14 sm:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,1.08fr)] lg:items-center lg:py-24">
            <div className="relative z-10">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="mt-6 max-w-3xl font-heading text-5xl font-semibold text-balance text-foreground sm:text-6xl xl:text-7xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted text-pretty sm:text-xl">
                {content.hero.copy}
              </p>

              <div className="mt-8 grid max-w-[38rem] gap-4 sm:grid-cols-2">
                <TrackedLink
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-accent px-7 text-center text-base font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                  eventName="book_review_click"
                  href={bookingHref}
                  metadata={{ locale, placement: "hero-primary" }}
                >
                  {content.hero.primaryCta}
                </TrackedLink>
                <TrackedLink
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-line-strong bg-card px-7 text-center text-base font-semibold text-foreground transition-colors hover:bg-surface"
                  eventName="whatsapp_click"
                  href={whatsappHref}
                  metadata={{ locale, placement: "hero-whatsapp" }}
                >
                  {content.hero.secondaryCta}
                </TrackedLink>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted">
                {content.hero.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-line bg-card px-4 py-2">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {content.hero.metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="rounded-[1.8rem] border border-line/90 bg-card/96 p-5 shadow-[0_20px_50px_rgba(17,21,24,0.08)]"
                  >
                    <p className="technical-label text-muted">{metric.label}</p>
                    <p className="mt-3 font-heading text-2xl font-semibold text-balance">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted text-pretty">
                      {metric.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative lg:min-h-[46rem]">
              <div className="relative rounded-[2.2rem] border border-line-strong/80 bg-foreground p-3 shadow-[0_40px_120px_rgba(13,16,18,0.28)]">
                <div className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[#101418]">
                  <div className="technical-frame absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 text-white/68">
                    <span>{content.hero.shotLabels.cockpit}</span>
                    <span>{content.hero.shotLabels.livePilot}</span>
                  </div>
                  <ProductShot
                    alt="BauPilot admin dashboard with analytics and project progress."
                    className="aspect-[16/11] w-full"
                    priority
                    locale={locale}
                    screen="admin-dashboard"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[0.8fr_1.2fr] lg:absolute lg:-bottom-6 lg:-left-10 lg:mt-0 lg:w-[43rem]">
                <div className="rounded-[1.6rem] border border-line-strong/80 bg-card p-2 shadow-[0_24px_70px_rgba(13,16,18,0.16)]">
                  <div className="mb-3 px-3 pt-2">
                    <p className="technical-label text-muted">
                      {content.hero.shotLabels.fieldInput}
                    </p>
                  </div>
                  <ProductShot
                    alt="BauPilot worker report creation screen on mobile."
                    className="aspect-[8/16] w-full rounded-[1.15rem]"
                    locale={locale}
                    screen="worker-report"
                  />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.6rem] border border-line-strong/80 bg-card p-2 shadow-[0_24px_70px_rgba(13,16,18,0.16)]">
                    <div className="mb-3 px-3 pt-2">
                      <p className="technical-label text-muted">
                        {content.hero.shotLabels.projectControl}
                      </p>
                    </div>
                    <ProductShot
                      alt="BauPilot project detail page showing work packages and progress."
                      className="aspect-[16/9] w-full rounded-[1.15rem]"
                      locale={locale}
                      screen="project-detail"
                    />
                  </div>
                  <div className="rounded-[1.6rem] border border-line-strong/80 bg-card p-2 shadow-[0_24px_70px_rgba(13,16,18,0.16)]">
                    <div className="mb-3 px-3 pt-2">
                      <p className="technical-label text-muted">
                        {content.hero.shotLabels.approvalChain}
                      </p>
                    </div>
                    <ProductShot
                      alt="BauPilot report review screen with approval actions."
                      className="aspect-[16/9] w-full rounded-[1.15rem]"
                      locale={locale}
                      screen="report-review"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-b border-line/70 bg-foreground text-background">
          <div className="section-shell py-5">
            <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
              {repeatedTrustPoints.map((item, index) => (
                <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8">
                  <p className="shrink-0 whitespace-nowrap text-sm leading-6 text-background/78">
                    {item}
                  </p>
                  <span className="technical-label shrink-0 text-background/38">•</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell grid gap-14 py-20 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionIntro
              copy={content.pain.copy}
              kicker={content.pain.kicker}
              title={content.pain.title}
            />
            <div className="mt-8 grid gap-4">
              {content.pain.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-line bg-card px-5 py-4 shadow-sm"
                >
                  <p className="text-base leading-7 text-foreground text-pretty">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-line-strong bg-foreground p-6 text-background shadow-[0_32px_90px_rgba(13,16,18,0.18)]">
              <p className="technical-label text-background/58">
                {content.pain.audienceLabel}
              </p>
              <h3 className="mt-4 font-heading text-3xl font-semibold text-balance">
                {content.pain.audienceTitle}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-background/74 text-pretty">
                {content.pain.audienceCopy}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.pain.trades.map((trade) => (
                  <span
                    key={trade}
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-background/82"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-line bg-surface p-6">
              <p className="technical-label text-muted">{content.pain.localLabel}</p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-balance">
                {content.pain.localTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted text-pretty">
                {content.pain.localCopy}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-foreground">
                {content.pain.localBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-line bg-card px-4 py-2">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="border-y border-line/70 bg-background-strong text-background"
        >
          <div className="section-shell py-20">
            <SectionIntro
              className="max-w-3xl"
              copy={content.workflow.copy}
              copyClassName="text-background/72"
              kicker={content.workflow.kicker}
              kickerClassName="text-background/55"
              title={content.workflow.title}
              titleClassName="text-background"
            />

            <div className="mt-12 grid gap-8">
              {content.workflow.steps.map((step, index) => (
                <article
                  key={step.step}
                  className="workflow-card grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6 lg:min-h-[22rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.88fr)] lg:items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="flex items-center gap-3">
                      <span className="technical-badge">{step.step}</span>
                      <span className="technical-label text-background/58">{step.label}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-3xl font-semibold text-balance">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-background/74 text-pretty">
                      {step.copy}
                    </p>
                  </div>
                  <div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""} flex h-full items-center`.trim()}
                  >
                    <div className="w-full rounded-[1.7rem] border border-white/10 bg-black/18 p-3 sm:p-4">
                      <ProductShot
                        alt={step.alt}
                        className="aspect-[16/9.35] w-full rounded-[1.4rem]"
                        locale={locale}
                        screen={step.screen}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="section-shell py-20">
          <SectionIntro
            className="max-w-3xl"
            copy={content.proof.copy}
            kicker={content.proof.kicker}
            title={content.proof.title}
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {content.proof.cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[2rem] border border-line bg-card p-4 shadow-[0_24px_70px_rgba(17,21,24,0.08)] sm:p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="technical-label text-muted">{card.label}</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-balance">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="rounded-[1.7rem] border border-line bg-background/70 p-3 sm:p-4">
                  <ProductShot
                    alt={card.alt}
                    className="aspect-[16/9.35] w-full rounded-[1.35rem]"
                    locale={locale}
                    screen={card.screen}
                  />
                </div>
                <p className="mt-5 text-sm leading-7 text-muted text-pretty">{card.copy}</p>
                <div className="mt-5 grid gap-3">
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.2rem] border border-line bg-background px-4 py-3 text-sm leading-6 text-foreground"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pilot" className="border-y border-line/70 bg-surface">
          <div className="section-shell py-20">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <SectionIntro
                  copy={content.pilot.copy}
                  kicker={content.pilot.kicker}
                  title={content.pilot.title}
                />
                <div className="mt-8 grid max-w-[38rem] gap-4 sm:grid-cols-2">
                  <TrackedLink
                    className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-accent px-7 text-center text-base font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                    eventName="pilot_apply_click"
                    href="#contact"
                    metadata={{ locale, placement: "pilot-section" }}
                  >
                    {content.pilot.primaryCta}
                  </TrackedLink>
                  <TrackedLink
                    className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-line-strong bg-card px-7 text-center text-base font-semibold text-foreground transition-colors hover:bg-background"
                    eventName="book_review_click"
                    href={bookingHref}
                    metadata={{ locale, placement: "pilot-booking" }}
                  >
                    {content.pilot.secondaryCta}
                  </TrackedLink>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-2 xl:items-stretch">
                <div className="rounded-[2rem] border border-line bg-background p-6 shadow-sm">
                  <p className="technical-label text-muted">{content.pilot.includesLabel}</p>
                  <div className="mt-5 grid gap-3">
                    {content.pilot.includes.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-line bg-card px-4 py-3 text-sm leading-6 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-line bg-card p-6">
                  <p className="technical-label text-muted">{content.pilot.fitLabel}</p>
                  <div className="mt-5 grid gap-3">
                    {content.pilot.fit.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-line bg-background px-4 py-3 text-sm leading-6 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-shell py-20">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-8">
              <SectionIntro
                copy={content.pricing.copy}
                kicker={content.pricing.kicker}
                title={content.pricing.title}
              />
              <div className="rounded-[2rem] border border-line bg-card p-6 shadow-sm">
                <p className="technical-label text-muted">
                  {content.pricing.comparisonLabel}
                </p>
                <div className="mt-5 grid gap-4">
                  {content.pricing.comparison.map((card, index) => (
                    <article
                      key={card.label}
                      className="rounded-[1.4rem] border border-line bg-background px-4 py-4"
                    >
                      <div className="flex items-start gap-4">
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong/30 bg-card text-xs font-semibold text-foreground">
                          {index + 1}
                        </span>
                        <div>
                          <p className="technical-label text-muted">{card.label}</p>
                          <h3 className="mt-2 font-heading text-xl font-semibold text-balance">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-muted text-pretty">
                            {card.copy}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <article className="rounded-[2.2rem] border border-line-strong bg-foreground p-7 text-background shadow-[0_32px_100px_rgba(13,16,18,0.2)]">
                <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
                  <div>
                    <p className="technical-label text-background/56">
                      {content.pricing.subscriptionLabel}
                    </p>
                    <div className="mt-5">
                      <p className="font-heading text-5xl font-semibold tabular-nums sm:text-6xl">
                        {content.pricing.subscriptionPrice}
                      </p>
                      <p className="mt-2 text-sm text-background/68">
                        {content.pricing.subscriptionCopy}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {content.pricing.subscriptionBadges.map((badge, index) => (
                        <span
                          key={badge}
                          className={
                            index === 0
                              ? "rounded-full border border-accent/40 bg-accent/12 px-3 py-2 text-sm font-semibold text-accent"
                              : "rounded-full border border-white/12 bg-white/6 px-3 py-2 text-sm text-background/76"
                          }
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                      <p className="technical-label text-background/52">
                        {content.pricing.kicker}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-background/74 text-pretty">
                        {content.pricing.copy}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {content.pricing.subscriptionItems.map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 sm:px-5"
                      >
                        <div className="grid gap-3 sm:grid-cols-[1.8rem_minmax(0,1fr)] sm:items-start">
                          <span className="inline-flex size-7 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
                            {index + 1}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-background sm:text-base">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-background/68">
                              {item.copy}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-stretch">
                <article className="rounded-[2rem] border border-line bg-surface p-6">
                  <p className="technical-label text-muted">{content.pricing.customLabel}</p>
                  <div className="mt-5 grid gap-3">
                    {content.pricing.customItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-line bg-card px-4 py-3 text-sm leading-6 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted text-pretty">
                    {content.pricing.customCopy}
                  </p>
                </article>

                <article className="rounded-[2rem] border border-line bg-card p-6 shadow-sm">
                  <p className="technical-label text-muted">{content.pricing.pathLabel}</p>
                  <div className="mt-5 grid gap-4">
                    {content.pricing.pathSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-[1.35rem] border border-line bg-background px-4 py-4"
                      >
                        <div className="flex items-start gap-4">
                          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-heading text-lg font-semibold text-balance text-foreground">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-muted text-pretty">
                              {step.copy}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line/70 bg-foreground text-background">
          <div className="section-shell grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionIntro
                copy={content.founder.copy}
                copyClassName="text-background/72"
                kicker={content.founder.kicker}
                kickerClassName="text-background/55"
                title={content.founder.title}
                titleClassName="text-background"
              />
              <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/6 p-5">
                <p className="technical-label text-background/56">
                  {content.founder.contextLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-background/78 text-pretty">
                  {content.founder.contextCopy}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.founder.steps.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5"
                >
                  <p className="technical-label text-background/56">
                    {content.founder.stepLabel}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-balance">
                    {item}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionIntro
                copy={content.faq.copy}
                kicker={content.faq.kicker}
                title={content.faq.title}
              />
            </div>
            <div className="space-y-4">
              {content.faq.items.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[1.75rem] border border-line bg-card p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-heading text-xl font-semibold text-balance text-foreground">
                    <span>{faq.question}</span>
                    <span className="mt-1 text-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted text-pretty">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-y border-line/70 bg-background-strong text-background">
          <div className="section-shell grid gap-12 py-20 lg:grid-cols-[0.74fr_1.26fr]">
            <div>
              <SectionIntro
                className="max-w-xl"
                copy={content.contact.copy}
                copyClassName="text-background/72"
                kicker={content.contact.kicker}
                kickerClassName="text-background/55"
                title={content.contact.title}
                titleClassName="text-background"
              />
              <div className="mt-8 grid gap-4">
                {content.contact.prepItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-background/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid max-w-[38rem] gap-4 sm:grid-cols-2">
                <TrackedLink
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-accent px-7 text-center text-base font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                  eventName="book_review_click"
                  href={bookingHref}
                  metadata={{ locale, placement: "contact-booking" }}
                >
                  {content.contact.bookCta}
                </TrackedLink>
                <TrackedLink
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/12 bg-white/6 px-7 text-center text-base font-semibold text-background transition-colors hover:bg-white/10"
                  eventName="whatsapp_click"
                  href={whatsappHref}
                  metadata={{ locale, placement: "contact-whatsapp" }}
                >
                  {content.contact.whatsappCta}
                </TrackedLink>
              </div>
            </div>

            <LeadForm copy={content.leadForm} locale={locale} />
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="rounded-[2rem] border border-line bg-card p-8 shadow-[0_24px_70px_rgba(17,21,24,0.08)] lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="section-kicker">{content.finalCta.kicker}</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-balance text-foreground sm:text-4xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted text-pretty">
                {content.finalCta.copy}
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:min-w-[31rem]">
              <TrackedLink
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-accent px-7 text-center text-base font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                eventName="book_review_click"
                href={bookingHref}
                metadata={{ locale, placement: "final-cta" }}
              >
                {content.finalCta.primaryCta}
              </TrackedLink>
              <TrackedLink
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-line bg-background px-7 text-center text-base font-semibold text-foreground transition-colors hover:bg-surface"
                eventName="whatsapp_click"
                href={whatsappHref}
                metadata={{ locale, placement: "final-whatsapp" }}
              >
                {content.finalCta.secondaryCta}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 bg-surface">
        <div className="section-shell flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p className="text-pretty">{content.footer.copy}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="transition-colors hover:text-foreground">
              {content.footer.privacy}
            </a>
            <a href="/cookies" className="transition-colors hover:text-foreground">
              {content.footer.cookies}
            </a>
          </div>
        </div>
      </footer>

      <div
        className="sticky bottom-0 z-40 border-t border-line/80 bg-background/96 px-4 py-3 shadow-[0_-12px_40px_rgba(10,12,13,0.08)] backdrop-blur-sm md:hidden"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      >
        <div className="mx-auto flex max-w-7xl gap-3">
          <TrackedLink
            className="inline-flex min-h-13 flex-1 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground"
            eventName="book_review_click"
            href={bookingHref}
            metadata={{ locale, placement: "mobile-sticky" }}
          >
            {content.contact.bookCta}
          </TrackedLink>
          <TrackedLink
            className="inline-flex min-h-13 flex-1 items-center justify-center rounded-full border border-line bg-card px-5 text-sm font-semibold text-foreground"
            eventName="whatsapp_click"
            href={whatsappHref}
            metadata={{ locale, placement: "mobile-whatsapp" }}
          >
            {content.hero.secondaryCta}
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}

function LanguageSwitch({
  currentLocale,
}: {
  currentLocale: LandingLocale;
}) {
  const options: Array<{ href: string; label: string; locale: LandingLocale }> = [
    { href: "/", label: "English", locale: "en" },
    { href: "/gr", label: "Greek", locale: "gr" },
  ];

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-card p-1 shadow-sm">
      {options.map((option) =>
        option.locale === currentLocale ? (
          <span
            key={option.locale}
            aria-current="page"
            className="rounded-full bg-foreground px-3 py-2 text-xs font-semibold text-background"
          >
            {option.label}
          </span>
        ) : (
          <TrackedLink
            key={option.locale}
            className="rounded-full px-3 py-2 text-xs font-semibold text-muted transition-colors hover:bg-background hover:text-foreground"
            eventName="language_switch_click"
            href={option.href}
            metadata={{ from: currentLocale, to: option.locale }}
          >
            {option.label}
          </TrackedLink>
        )
      )}
    </div>
  );
}

function ProductShot({
  alt,
  className,
  locale,
  priority,
  screen,
}: {
  alt: string;
  className?: string;
  locale: LandingLocale;
  priority?: boolean;
  screen: ProductScreenKey;
}) {
  const isMobileScreen = screen === "worker-report";

  return (
    <div
      aria-label={alt}
      className={`relative overflow-hidden border border-black/6 bg-white ${className ?? ""}`.trim()}
    >
      <div
        className={`flex size-full items-center justify-center ${
          isMobileScreen ? "px-4 py-3 sm:px-5 sm:py-4" : ""
        }`.trim()}
      >
        <ProductScreen
          className={isMobileScreen ? "h-full w-full max-w-[21rem]" : "size-full"}
          locale={locale}
          screen={screen}
        />
      </div>
      {priority ? <span className="sr-only">priority</span> : null}
    </div>
  );
}

function SectionIntro({
  className,
  copy,
  copyClassName,
  kicker,
  kickerClassName,
  title,
  titleClassName,
}: {
  className?: string;
  copy: string;
  copyClassName?: string;
  kicker: string;
  kickerClassName?: string;
  title: string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      <p className={`section-kicker ${kickerClassName ?? ""}`.trim()}>{kicker}</p>
      <h2 className={`section-heading ${titleClassName ?? ""}`.trim()}>{title}</h2>
      <p className={`section-copy ${copyClassName ?? ""}`.trim()}>{copy}</p>
    </div>
  );
}

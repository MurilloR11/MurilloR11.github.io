import { Button } from '@components/ui/Button/Button';
import { useTranslation } from '@i18n/translations';

const SCROLL_SMOOTH: ScrollIntoViewOptions = { behavior: 'smooth' };

export function Hero() {
  const t = useTranslation();

  return (
    <div
      id="hero"
      className="relative flex xl:min-h-screen overflow-hidden px-4 sm:px-6 pt-28 pb-16 xl:pb-0 xl:pt-16 xl:items-center"
    >
      {/* Decorative large background letter */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[clamp(8rem,22vw,18rem)] font-bold italic leading-none text-cream/2.5"
      >
        S
      </span>

      {/* Decorative vertical line */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-gold/20 to-transparent hidden lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* Pre-heading */}
        <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.25em] text-muted animate-fade-up delay-200">
          {t.hero.preHeading}
        </p>

        {/* Name — massive italic serif */}
        <h1 className="animate-fade-up delay-300">
          <span className="display-hero-name block text-cream">
            Santiago
            <span className="text-gold" aria-hidden="true">.</span>
          </span>
        </h1>

        {/* Gold rule */}
        <span
          className="gold-rule animate-expand-w delay-400 block w-20"
        />

        {/* Tagline */}
        <p className="mb-10 max-w-md text-[0.82rem] leading-relaxed text-muted animate-fade-up delay-500">
          {t.hero.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 animate-fade-up delay-600">
          <Button
            className="w-full sm:w-auto"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView(SCROLL_SMOOTH)
            }
          >
            {t.hero.ctaProjects}
          </Button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-sm border border-border-dark px-5 py-2.5 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-muted transition-all duration-200 hover:border-gold/40 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            {t.hero.ctaResume}
          </a>
        </div>
      </div>
    </div>
  );
}

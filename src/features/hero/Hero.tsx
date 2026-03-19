import { Button } from '@components/ui/Button/Button';

const SCROLL_SMOOTH: ScrollIntoViewOptions = { behavior: 'smooth' };

export function Hero() {
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

        {/* Availability badge */}
        <span
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/7 px-4 py-2 text-[0.65rem] font-medium uppercase tracking-widest text-gold animate-fade-in delay-100"
          aria-label="Estado: disponible para trabajar"
        >
          <span
            className="relative flex h-1.5 w-1.5 shrink-0"
            aria-hidden="true"
          >
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          Disponible para trabajar
        </span>

        {/* Pre-heading */}
        <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.25em] text-muted animate-fade-up delay-200">
          Hola, soy
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
          Desarrollador frontend junior apasionado por construir
          interfaces rápidas, accesibles y con buen diseño.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-fade-up delay-600">
          <Button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView(SCROLL_SMOOTH)
            }
          >
            Ver proyectos ↗
          </Button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-sm border border-border-dark px-5 py-2.5 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-muted transition-all duration-200 hover:border-gold/40 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            Descargar CV ↓
          </a>
        </div>
      </div>
    </div>
  );
}

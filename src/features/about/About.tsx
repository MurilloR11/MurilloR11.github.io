import { Section } from '@components/layout/Section/Section';
import { useTranslation } from '@i18n/translations';

export function About() {
  const t = useTranslation();

  return (
    <Section id="about" className="border-t border-border-dark">
      <span className="section-label">{t.about.sectionLabel}</span>

      <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-16">

        {/* Left: photo — altura = altura del contenido derecho */}
        <div className="shrink-0 mx-auto max-w-xs w-full md:mx-0 md:w-56 lg:w-64 md:h-auto">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border-dark md:aspect-auto md:h-full">
            <img
              src="/avatar.jpg"
              alt={t.about.photoAlt}
              width={400}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            {/* Subtle gold overlay at bottom */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-gold/10 to-transparent"
            />
          </div>
        </div>

        {/* Right: heading + bio */}
        <div className="flex flex-col justify-start pt-1">
          <h2 id="about-heading" className="display-title mb-2">
            {t.about.heading}
          </h2>
          <span className="gold-rule block mb-7 w-12" />

          <div className="space-y-5 max-w-prose">
            {t.about.bio.map((paragraph) => (
              <p key={paragraph} className="text-[0.82rem] leading-[1.95] text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/MurilloR11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              {t.about.github}
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-murillo-99137a297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              {t.about.linkedin}
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}

import { Section } from '@components/layout/Section/Section';
import { EDUCATION } from './education.data';

export function EducationSection() {
  return (
    <Section id="education" className="border-t border-border-dark">
      <span className="section-label">── 06 / educación</span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
        <h2 id="education-heading" className="display-title">
          Educación
        </h2>
        <p className="text-[0.72rem] text-muted sm:text-right leading-relaxed">
          Formación académica<br />y cursos relevantes.
        </p>
      </div>

      <span className="gold-rule block mb-10 w-12" />

      <div className="flex flex-col">
        {EDUCATION.map(({ id, title, institution, period, description }) => (
          <article
            key={id}
            className="flex flex-col gap-2 border-t border-border-dark py-8 first:border-t-0 first:pt-0 sm:flex-row sm:gap-10"
          >
            <span className="font-mono text-[0.65rem] tabular-nums text-subtle shrink-0 sm:w-28 sm:pt-1">
              {period}
            </span>

            <div className="flex flex-col">
              <h3 className="font-display text-[1.1rem] font-bold italic leading-snug text-cream">
                {title}
              </h3>
              <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-widest text-gold/70">
                {institution}
              </span>
              {description && (
                <p className="mt-3 max-w-xl text-[0.78rem] leading-relaxed text-muted">
                  {description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

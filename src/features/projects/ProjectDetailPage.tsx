import { useParams } from 'react-router-dom';
import { GitHubDark } from '@ridemountainpig/svgl-react';
import { useLanguage } from '@context/LanguageContext';
import { useTranslation } from '@i18n/translations';
import { PROJECTS } from './projects.data';
import { getTechColor } from './techColors';

function StackBadge({ label }: { label: string }) {
  const { bg, text, isFallback } = getTechColor(label);

  return (
    <span
      className={`rounded-full px-3.5 py-1.5 text-[0.72rem] font-bold ${isFallback ? 'border border-border-dark' : ''}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = useTranslation();
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = index === -1 ? undefined : PROJECTS[index];

  if (!project) {
    return (
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <span className="section-label">{t.projectDetail.notFoundLabel}</span>
        <h1 id="project-detail-heading" className="display-title">
          {t.projectDetail.notFoundHeading}
        </h1>
      </div>
    );
  }

  const { title, description, longDescription, tags, stack, notes, githubUrl, liveUrl, thumbnail } = project;
  const num = String(index + 1).padStart(2, '0');
  const stackItems = stack ?? tags;
  const projectNotes = notes?.[language];

  return (
    <article className="mx-auto w-full max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <span className="section-label animate-fade-up">{t.projectDetail.sectionLabelPrefix} {num}</span>

      <div className="animate-fade-up delay-100 mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            id="project-detail-heading"
            className="font-display text-[clamp(2rem,5.5vw,3.6rem)] font-bold italic leading-[1.05] text-cream"
          >
            {title[language]}
            <span className="text-gold" aria-hidden="true">.</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex w-fit items-center gap-2 border-b border-gold/40 pb-1 text-[0.68rem] font-medium uppercase tracking-widest text-gold transition-colors duration-200 hover:border-gold hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          >
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center" aria-hidden="true">
              <GitHubDark width="100%" height="100%" />
            </span>
            {t.projectDetail.viewOnGithub}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover/link:translate-x-1"
            >
              ↗
            </span>
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.63rem] font-medium uppercase tracking-widest text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              {t.projectDetail.demo}
            </a>
          )}
        </div>
      </div>

      <span className="gold-rule animate-expand-w delay-200 block mb-10 w-12" />

      {/* Screenshot */}
      <div className="animate-fade-up delay-200 relative mb-12 aspect-video w-full overflow-hidden rounded-sm border border-border-dark bg-elevated">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`${t.projectDetail.screenshotAlt} ${title[language]}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gold/10 via-elevated to-elevated">
            <span
              aria-hidden="true"
              className="font-display select-none text-[clamp(4rem,10vw,7rem)] font-bold italic leading-none text-cream/6"
            >
              {num}
            </span>
          </div>
        )}
      </div>

      <div className="animate-fade-up delay-300 grid gap-12 lg:grid-cols-[1fr_auto]">
        {/* Case study */}
        <div className="max-w-2xl">
          <h2 className="mb-4 text-[0.62rem] font-medium uppercase tracking-widest text-gold">
            {t.projectDetail.aboutProject}
          </h2>
          <p className="whitespace-pre-line text-[0.85rem] leading-relaxed text-muted">
            {longDescription?.[language] ?? description[language]}
          </p>

          {projectNotes && projectNotes.length > 0 && (
            <ul className="mt-5 flex flex-col gap-3">
              {projectNotes.map((note) => (
                <li key={note} className="flex gap-3 text-[0.8rem] leading-relaxed text-muted">
                  <span className="text-gold" aria-hidden="true">—</span>
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Stack */}
        <div className="lg:w-64 lg:shrink-0">
          <h2 className="mb-4 text-[0.62rem] font-medium uppercase tracking-widest text-gold">
            {t.projectDetail.techStack}
          </h2>
          <div className="flex flex-wrap gap-2">
            {stackItems.map((item) => (
              <StackBadge key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

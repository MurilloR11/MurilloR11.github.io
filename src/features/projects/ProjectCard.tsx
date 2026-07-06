import { Link } from 'react-router-dom';
import { type Project } from './projects.types';

interface ProjectCardProps {
  project: Project;
  number: number;
}

// Subtle gradient per card index so placeholders look distinct
const PLACEHOLDER_GRADIENTS = [
  'from-gold/10 via-elevated to-elevated',
  'from-cream/5 via-elevated to-elevated',
  'from-gold/6 via-surface to-surface',
];

export const ProjectCard = function ProjectCard({ project, number }: ProjectCardProps) {
  const { id, title, description, liveUrl, thumbnail } = project;
  const num = String(number).padStart(2, '0');
  const gradient = PLACEHOLDER_GRADIENTS[(number - 1) % PLACEHOLDER_GRADIENTS.length];

  return (
    <article className="group/card flex flex-col gap-6 border-t border-border-dark py-10 first:border-t-0 first:pt-0 sm:flex-row sm:items-center sm:gap-10">

      {/* Index number */}
      <span className="font-mono text-[0.65rem] tabular-nums text-subtle shrink-0 sm:self-start sm:pt-1">
        {num}
      </span>

      {/* ── Image area ── */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-sm sm:w-2/5 lg:w-[38%]">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`Captura de pantalla del proyecto ${title}`}
            width={600}
            height={338}
            loading="lazy"
            className="h-full w-full object-cover grayscale brightness-50 transition-all duration-500 group-hover/card:brightness-65 group-hover/card:grayscale-0"
          />
        ) : (
          /* Decorative placeholder when no screenshot exists */
          <div className={`absolute inset-0 bg-linear-to-br ${gradient}`}>
            {/* Large background number */}
            <span
              aria-hidden="true"
              className="font-display absolute right-5 bottom-4 select-none font-bold italic leading-none text-cream/6"
              style={{ fontSize: 'clamp(4rem, 10vw, 6rem)' }}
            >
              {num}
            </span>
            {/* Subtle grid pattern */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id={`grid-${num}`} width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" style={{ stroke: 'var(--color-gold)' }} strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${num})`} />
            </svg>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col">

        {/* Title */}
        <h3 className="font-display mb-3 text-[1.4rem] sm:text-[1.7rem] font-bold italic leading-tight text-cream transition-colors duration-200 group-hover/card:text-gold">
          {title}
          <span className="text-gold" aria-hidden="true">.</span>
        </h3>

        {/* Description */}
        <p className="mb-6 max-w-xl text-[0.78rem] leading-relaxed text-muted">
          {description}
        </p>

        {/* CTA — links to the project's own detail page */}
        <div className="flex flex-wrap items-center gap-5">
          <Link
            to={`/proyectos/${id}`}
            className="group/link inline-flex w-fit items-center gap-2 border-b border-gold/40 pb-1 text-[0.68rem] font-medium uppercase tracking-widest text-gold transition-colors duration-200 hover:border-gold hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          >
            Ver proyecto
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover/link:translate-x-1"
            >
              →
            </span>
          </Link>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.63rem] font-medium uppercase tracking-widest text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              Demo ↗
            </a>
          )}
        </div>

      </div>
    </article>
  );
};

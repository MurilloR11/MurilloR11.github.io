import { Badge } from '@components/ui/Badge/Badge';
import { CATEGORY_LABELS, type Project } from './projects.types';

interface ProjectCardProps {
  project: Project;
  number: number;
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link flex items-center gap-1.5 text-[0.63rem] font-medium uppercase tracking-widest text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      >
        ↗
      </span>
      {label}
    </a>
  );
}

// Subtle gradient per card index so placeholders look distinct
const PLACEHOLDER_GRADIENTS = [
  'from-gold/10 via-elevated to-elevated',
  'from-cream/5 via-elevated to-elevated',
  'from-gold/6 via-surface to-surface',
];

export const ProjectCard = function ProjectCard({ project, number }: ProjectCardProps) {
  const { title, description, tags, category, githubUrl, liveUrl, thumbnail } = project;
  const num = String(number).padStart(2, '0');
  const gradient = PLACEHOLDER_GRADIENTS[(number - 1) % PLACEHOLDER_GRADIENTS.length];

  return (
    <article className="card-dark group/card relative flex flex-col overflow-hidden">

      {/* Animated left gold accent */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 z-10 h-full w-0.5 origin-top scale-y-0 bg-gold/50 transition-transform duration-300 ease-out group-hover/card:scale-y-100"
      />

      {/* ── Image area ── always shown, ~50% of card */}
      <div className="relative h-44 sm:h-48 lg:h-52 shrink-0 overflow-hidden">
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
              style={{ fontSize: 'clamp(5rem, 12vw, 7.5rem)' }}
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

        {/* Bottom fade into card surface */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-surface to-transparent"
        />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-6 pt-5">

        {/* Category + number */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[0.58rem] font-medium uppercase tracking-widest text-gold/70">
            {CATEGORY_LABELS[category]}
          </span>
          <span className="font-mono text-[0.6rem] tabular-nums text-subtle">
            {num}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display mb-2.5 text-[1rem] font-bold italic leading-snug text-cream transition-colors duration-200 group-hover/card:text-gold">
          {title}
          <span className="text-gold" aria-hidden="true">.</span>
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-[0.73rem] leading-relaxed text-muted">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 border-t border-border-dark pt-4">
          <ProjectLink href={githubUrl} label="GitHub" />
          {liveUrl && <ProjectLink href={liveUrl} label="Demo" />}
        </div>

      </div>
    </article>
  );
};

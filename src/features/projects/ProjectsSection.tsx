import { Section } from '@components/layout/Section/Section';
import { useTranslation } from '@i18n/translations';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from './projects.data';

export function ProjectsSection() {
  const t = useTranslation();

  return (
    <Section id="projects" className="border-t border-border-dark">
      <span className="section-label">{t.projects.sectionLabel}</span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
        <h2 id="projects-heading" className="display-title">
          {t.projects.heading}
        </h2>
        <p className="text-[0.72rem] text-muted sm:text-right leading-relaxed">
          {t.projects.subtitleLine1}<br />{t.projects.subtitleLine2}
        </p>
      </div>

      <span className="gold-rule block mb-10 w-12" />

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} number={i + 1} />
        ))}
      </div>
    </Section>
  );
}

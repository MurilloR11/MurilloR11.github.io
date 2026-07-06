import { Section } from '@components/layout/Section/Section';
import { useTheme } from '@context/ThemeContext';
import { SKILL_CATEGORIES, type SkillItem } from './skills.data';

// Stagger category blocks in on enter, cascading top to bottom
const CATEGORY_BASE_DELAY_MS = 400;
const CATEGORY_STAGGER_MS = 100;

function SkillBadge({ skill }: { skill: SkillItem }) {
  const { mode } = useTheme();
  const useLight = mode === 'light' && skill.iconLight;
  const IconComponent = useLight ? skill.iconLight! : skill.icon;

  return (
    <li
      className="group inline-flex items-center gap-2.5 rounded-full border border-border-dark bg-surface px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-elevated"
    >
      <span className="flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">
        <IconComponent width="100%" height="100%" />
      </span>
      <span className="text-[0.68rem] font-medium tracking-wide text-cream/85 transition-colors duration-200 group-hover:text-cream">
        {skill.name}
      </span>
    </li>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-border-dark">
      <span className="section-label">── 03 / tecnologías</span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
        <h2 id="skills-heading" className="display-title">
          Skills
        </h2>
        <p className="text-[0.72rem] text-muted sm:text-right leading-relaxed">
          Tecnologías y herramientas<br />con las que trabajo.
        </p>
      </div>

      <span className="gold-rule block mb-12 w-12" />

      <div className="flex flex-col">
        {SKILL_CATEGORIES.map((category, index) => (
          <div
            key={category.label}
            className="animate-fade-up border-t border-border-dark py-7 first:border-t-0 first:pt-0"
            style={{ animationDelay: `${CATEGORY_BASE_DELAY_MS + index * CATEGORY_STAGGER_MS}ms` }}
          >
            <h3 className="mb-5 text-[0.62rem] font-medium uppercase tracking-widest text-gold">
              {category.label}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section } from '@components/layout/Section/Section';
import { SKILLS, type Skill } from './skills.data';

// Wait for the section enter animation before starting bar fills
const SKILL_ANIMATION_BASE_DELAY_MS = 400;
// Stagger between each bar so they cascade rather than all firing at once
const SKILL_ANIMATION_STAGGER_MS = 80;

// Attach a globalIndex before splitting into groups so SkillRow never needs
// to know about sibling arrays — eliminates the fragile (stack.length + i) offset
const INDEXED_SKILLS = SKILLS.map((skill, globalIndex) => ({ ...skill, globalIndex }));

function SkillRow({ skill, index }: { skill: Skill & { globalIndex: number }; index: number }) {
  const delayMs = SKILL_ANIMATION_BASE_DELAY_MS + index * SKILL_ANIMATION_STAGGER_MS;

  return (
    <li className="group">
      <div className="flex items-baseline justify-between mb-2">
        <span
          className="font-display italic text-[0.88rem] font-medium text-cream/80 transition-colors duration-200 group-hover:text-cream"
        >
          {skill.name}
        </span>
        <span className="text-[0.6rem] tabular-nums tracking-widest text-subtle">
          {skill.level}
        </span>
      </div>

      {/* Track */}
      <div className="relative h-px w-full bg-border-dark overflow-hidden">
        <span
          className="skill-bar absolute left-0 top-0 h-full bg-linear-to-r from-gold/80 to-gold/30"
          style={
            { '--skill-w': `${skill.level}%`, animationDelay: `${delayMs}ms` } as React.CSSProperties
          }
        />
      </div>

      <p className="mt-1.5 text-[0.62rem] tracking-wide text-subtle/70 transition-colors duration-200 group-hover:text-subtle">
        {skill.desc}
      </p>
    </li>
  );
}

export function SkillsSection() {
  const stack = INDEXED_SKILLS.filter((s) => s.group === 'stack');
  const tools = INDEXED_SKILLS.filter((s) => s.group === 'tools');

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

      <div className="grid gap-14 sm:grid-cols-2">

        {/* Stack principal */}
        <div>
          <h3 className="mb-7 text-[0.62rem] font-medium uppercase tracking-widest text-gold">
            Stack principal
          </h3>
          <ul className="space-y-7">
            {stack.map((skill) => (
              <SkillRow key={skill.name} skill={skill} index={skill.globalIndex} />
            ))}
          </ul>
        </div>

        {/* Flujo de trabajo */}
        <div>
          <h3 className="mb-7 text-[0.62rem] font-medium uppercase tracking-widest text-gold">
            Flujo de trabajo
          </h3>
          <ul className="space-y-7">
            {tools.map((skill) => (
              <SkillRow key={skill.name} skill={skill} index={skill.globalIndex} />
            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
}

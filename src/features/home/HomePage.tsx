import { lazy, Suspense } from 'react';
import { useTranslation } from '@i18n/translations';
import { Hero } from '@features/hero/Hero';
import { ErrorBoundary } from '@components/ErrorBoundary';

// Lazy loading per SKILL: React.lazy + Suspense for route-level code splitting
// Hero loads eagerly (above the fold); rest are split into separate chunks
const About = lazy(() => import('@features/about/About').then((m) => ({ default: m.About })));
const SkillsSection = lazy(() =>
  import('@features/skills/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const ProjectsSection = lazy(() =>
  import('@features/projects/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const EducationSection = lazy(() =>
  import('@features/education/EducationSection').then((m) => ({ default: m.EducationSection }))
);
const ContactSection = lazy(() =>
  import('@features/contact/ContactSection').then((m) => ({ default: m.ContactSection }))
);

function SectionFallback() {
  return <div className="mx-auto min-h-[32rem] max-w-5xl animate-pulse rounded-sm bg-surface px-6" aria-hidden="true" />;
}

export function HomePage() {
  const t = useTranslation();
  const errorFallback = (
    <div className="mx-auto max-w-5xl px-6 py-20 text-[0.75rem] text-muted">
      {t.errorBoundary.sectionLoadError}
    </div>
  );

  return (
    <>
      <Hero />

      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@context/ThemeContext';
import { Navbar } from '@components/layout/Navbar/Navbar';
import { Footer } from '@components/layout/Footer/Footer';
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
const ContactSection = lazy(() =>
  import('@features/contact/ContactSection').then((m) => ({ default: m.ContactSection }))
);

function SectionFallback() {
  return <div className="mx-auto min-h-[32rem] max-w-5xl animate-pulse rounded-sm bg-surface px-6" aria-hidden="true" />;
}

// Named export per SKILL (main.tsx also updated to match)
export function App() {
  return (
    <ThemeProvider>
      {/* Semantic HTML per SKILL: <header> inside Navbar, <main> wraps page content */}
      <Navbar />

      <main id="main-content">
        <Hero />

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </ThemeProvider>
  );
}

import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import { LanguageProvider } from '@context/LanguageContext';
import { useTranslation } from '@i18n/translations';
import { Navbar } from '@components/layout/Navbar/Navbar';
import { Footer } from '@components/layout/Footer/Footer';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ScrollManager } from '@components/ScrollManager';
import { HomePage } from '@features/home/HomePage';

// Route-level code splitting per SKILL — the project detail page is only
// fetched when a visitor actually navigates to /proyectos/:id
const ProjectDetailPage = lazy(() =>
  import('@features/projects/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage }))
);

function PageFallback() {
  return <div className="mx-auto min-h-[60vh] max-w-5xl animate-pulse rounded-sm bg-surface px-6" aria-hidden="true" />;
}

function ErrorFallback() {
  const t = useTranslation();
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 text-[0.75rem] text-muted">
      {t.errorBoundary.sectionLoadError}
    </div>
  );
}

function AppShell() {
  const t = useTranslation();

  // index.html ships a static <title> for first paint; keep it in sync with
  // the active language once React has mounted.
  useEffect(() => {
    document.title = t.meta.title;
  }, [t]);

  return (
    <>
      <ScrollManager />

      {/* Semantic HTML per SKILL: <header> inside Navbar, <main> wraps page content */}
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/proyectos/:id"
            element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <Suspense fallback={<PageFallback />}>
                  <ProjectDetailPage />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// Named export per SKILL (main.tsx also updated to match)
export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}

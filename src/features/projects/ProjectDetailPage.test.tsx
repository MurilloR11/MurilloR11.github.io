import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import { LanguageProvider } from '@context/LanguageContext';
import { ProjectDetailPage } from './ProjectDetailPage';
import { PROJECTS } from './projects.data';

// ProjectDetailPage reads both ThemeContext (GitHub icon variant) and
// LanguageContext (translated copy). Default language without localStorage
// is 'es', so assertions below read the `.es` variant of each field.
function renderAt(path: string) {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            <Route path="/proyectos/:id" element={<ProjectDetailPage />} />
          </Routes>
        </MemoryRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

describe('ProjectDetailPage', () => {
  const project = PROJECTS[0];

  it('renders the project title', () => {
    renderAt(`/proyectos/${project.id}`);
    expect(screen.getByRole('heading', { name: new RegExp(project.title.es) })).toBeInTheDocument();
  });

  it('renders the long description when available', () => {
    renderAt(`/proyectos/${project.id}`);
    expect(project.longDescription).toBeDefined();
    expect(screen.getByText(new RegExp(project.longDescription!.es.slice(0, 30)))).toBeInTheDocument();
  });

  it('falls back to the short description when no long description exists', () => {
    const fallbackProject = PROJECTS.find((p) => !p.longDescription);
    expect(fallbackProject).toBeDefined();
    renderAt(`/proyectos/${fallbackProject!.id}`);
    expect(screen.getByText(fallbackProject!.description.es)).toBeInTheDocument();
  });

  it('renders the detailed stack when available, falling back to tags otherwise', () => {
    renderAt(`/proyectos/${project.id}`);
    const stackItems = project.stack ?? project.tags;
    for (const item of stackItems) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders a link to the GitHub repo', () => {
    renderAt(`/proyectos/${project.id}`);
    const githubLink = screen.getByRole('link', { name: /ver en github/i });
    expect(githubLink).toHaveAttribute('href', project.githubUrl);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows a not-found message for an unknown project id', () => {
    renderAt('/proyectos/does-not-exist');
    expect(screen.getByText(/proyecto no encontrado/i)).toBeInTheDocument();
  });
});

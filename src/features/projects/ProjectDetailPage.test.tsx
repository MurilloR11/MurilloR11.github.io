import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ProjectDetailPage } from './ProjectDetailPage';
import { PROJECTS } from './projects.data';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/proyectos/:id" element={<ProjectDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('ProjectDetailPage', () => {
  const project = PROJECTS[0];

  it('renders the project title', () => {
    renderAt(`/proyectos/${project.id}`);
    expect(screen.getByRole('heading', { name: new RegExp(project.title) })).toBeInTheDocument();
  });

  it('renders the long description when available', () => {
    renderAt(`/proyectos/${project.id}`);
    expect(project.longDescription).toBeDefined();
    expect(screen.getByText(new RegExp(project.longDescription!.slice(0, 30)))).toBeInTheDocument();
  });

  it('falls back to the short description when no long description exists', () => {
    const fallbackProject = PROJECTS.find((p) => !p.longDescription);
    expect(fallbackProject).toBeDefined();
    renderAt(`/proyectos/${fallbackProject!.id}`);
    expect(screen.getByText(fallbackProject!.description)).toBeInTheDocument();
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

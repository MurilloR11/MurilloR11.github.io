import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@context/LanguageContext';
import { ProjectCard } from './ProjectCard';
import { type Project } from './projects.types';

const baseProject: Project = {
  id: 'test-project',
  title: { es: 'Mi Proyecto Test', en: 'My Test Project' },
  description: { es: 'Descripción del proyecto de prueba.', en: 'Test project description.' },
  tags: ['React', 'TypeScript'],
  category: 'frontend',
  githubUrl: 'https://github.com/user/repo',
};

// ProjectCard renders a react-router <Link> and reads translations, so every
// render needs both a Router and a LanguageProvider ancestor.
function renderCard(project: Project, number: number) {
  return render(
    <LanguageProvider>
      <MemoryRouter>
        <ProjectCard project={project} number={number} />
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe('ProjectCard', () => {
  it('renders the project title', () => {
    renderCard(baseProject, 1);
    expect(screen.getByText('Mi Proyecto Test')).toBeInTheDocument();
  });

  it('renders the project description', () => {
    renderCard(baseProject, 1);
    expect(screen.getByText('Descripción del proyecto de prueba.')).toBeInTheDocument();
  });

  it('renders the "Ver proyecto" link pointing to the project detail page', () => {
    renderCard(baseProject, 1);
    const projectLink = screen.getByRole('link', { name: /ver proyecto/i });
    expect(projectLink).toHaveAttribute('href', '/proyectos/test-project');
  });

  it('does not render Demo link when liveUrl is not provided', () => {
    renderCard(baseProject, 1);
    expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument();
  });

  it('renders the Demo link when liveUrl is provided', () => {
    const project: Project = { ...baseProject, liveUrl: 'https://myproject.vercel.app' };
    renderCard(project, 1);
    const demoLink = screen.getByRole('link', { name: /demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://myproject.vercel.app');
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(demoLink).toHaveAttribute('target', '_blank');
  });

  it('renders as an article element', () => {
    const { container } = renderCard(baseProject, 1);
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('renders an img when thumbnail is provided', () => {
    const project: Project = { ...baseProject, thumbnail: '/screenshot.png' };
    renderCard(project, 1);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/screenshot.png');
    expect(img).toHaveAttribute('alt', 'Captura de pantalla del proyecto Mi Proyecto Test');
  });

  it('does not render an img when thumbnail is not provided', () => {
    renderCard(baseProject, 1);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('displays the padded project number', () => {
    renderCard(baseProject, 3);
    // '03' appears twice: once as a decorative aria-hidden background element,
    // and once in the visible content area
    expect(screen.getAllByText('03').length).toBeGreaterThanOrEqual(1);
  });
});

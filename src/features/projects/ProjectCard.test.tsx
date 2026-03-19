import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import { type Project } from './projects.types';

const baseProject: Project = {
  id: 'test-project',
  title: 'Mi Proyecto Test',
  description: 'Descripción del proyecto de prueba.',
  tags: ['React', 'TypeScript'],
  category: 'frontend',
  githubUrl: 'https://github.com/user/repo',
};

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={baseProject} number={1} />);
    expect(screen.getByText('Mi Proyecto Test')).toBeInTheDocument();
  });

  it('renders the project description', () => {
    render(<ProjectCard project={baseProject} number={1} />);
    expect(screen.getByText('Descripción del proyecto de prueba.')).toBeInTheDocument();
  });

  it('renders all tags as badges', () => {
    render(<ProjectCard project={baseProject} number={1} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders the GitHub link', () => {
    render(<ProjectCard project={baseProject} number={1} />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/user/repo');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('does not render Demo link when liveUrl is not provided', () => {
    render(<ProjectCard project={baseProject} number={1} />);
    expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument();
  });

  it('renders the Demo link when liveUrl is provided', () => {
    const project: Project = { ...baseProject, liveUrl: 'https://myproject.vercel.app' };
    render(<ProjectCard project={project} number={1} />);
    const demoLink = screen.getByRole('link', { name: /demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://myproject.vercel.app');
  });

  it('renders as an article element', () => {
    const { container } = render(<ProjectCard project={baseProject} number={1} />);
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('renders an img when thumbnail is provided', () => {
    const project: Project = { ...baseProject, thumbnail: '/screenshot.png' };
    render(<ProjectCard project={project} number={1} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/screenshot.png');
    expect(img).toHaveAttribute('alt', 'Captura de pantalla del proyecto Mi Proyecto Test');
  });

  it('does not render an img when thumbnail is not provided', () => {
    render(<ProjectCard project={baseProject} number={1} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('displays the padded project number', () => {
    render(<ProjectCard project={baseProject} number={3} />);
    // '03' appears twice: once as a decorative aria-hidden background element,
    // and once in the visible content area
    expect(screen.getAllByText('03').length).toBeGreaterThanOrEqual(1);
  });
});

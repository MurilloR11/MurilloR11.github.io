import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders the label text', () => {
    render(<Badge label="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Badge label="TypeScript" />);
    expect(screen.getByText('TypeScript').tagName).toBe('SPAN');
  });

  it('renders different labels correctly', () => {
    const { rerender } = render(<Badge label="Tailwind" />);
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
    rerender(<Badge label="Node.js" />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});

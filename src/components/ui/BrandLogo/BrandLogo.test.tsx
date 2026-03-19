import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrandLogo } from './BrandLogo';

describe('BrandLogo', () => {
  it('renders the name "Santiago"', () => {
    render(<BrandLogo />);
    expect(screen.getByText('Santiago')).toBeInTheDocument();
  });

  it('renders the decorative dot as aria-hidden', () => {
    render(<BrandLogo />);
    const dot = screen.getByText('·');
    expect(dot).toHaveAttribute('aria-hidden', 'true');
  });
});

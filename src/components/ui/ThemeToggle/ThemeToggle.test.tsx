import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@context/ThemeContext';
import { LanguageProvider } from '@context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';

function renderWithTheme(initialTheme: 'dark' | 'light' = 'dark') {
  localStorage.setItem('theme', initialTheme);
  return render(
    <LanguageProvider>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  vi.restoreAllMocks();
});

describe('ThemeToggle', () => {
  it('renders a button element', () => {
    renderWithTheme('dark');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has aria-label "Activar modo claro" when in dark mode', () => {
    renderWithTheme('dark');
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Activar modo claro');
  });

  it('has aria-label "Activar modo oscuro" when in light mode', () => {
    renderWithTheme('light');
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Activar modo oscuro');
  });

  it('toggles theme when clicked', async () => {
    renderWithTheme('dark');
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-label', 'Activar modo claro');
    await userEvent.click(btn);
    expect(btn).toHaveAttribute('aria-label', 'Activar modo oscuro');
  });
});

import { useState, useEffect } from 'react';
import { type NavLink } from '@app-types/global.types';
import { useScrollSpy } from '@hooks/useScrollSpy';
import { ThemeToggle } from '@components/ui/ThemeToggle/ThemeToggle';
import { BrandLogo } from '@components/ui/BrandLogo/BrandLogo';

const NAV_LINKS: NavLink[] = [
  { label: 'Sobre mí',  href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto',  href: '#contact' },
];

// Defined outside component so the array reference is stable across renders
// (prevents useEffect in useScrollSpy from re-running on every render)
const SECTION_IDS = ['about', 'skills', 'projects', 'contact'];

export function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when the active section changes (user scrolled or tapped a link)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeId]);

  const hasBackground = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBackground ? 'bg-base/90 backdrop-blur-md border-b border-border-dark' : 'bg-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-base focus:font-medium"
      >
        Saltar al contenido
      </a>

      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4"
      >
        <a
          href="#hero"
          className="group flex items-center gap-1.5 focus-visible:outline-none"
          aria-label="Santiago, inicio"
        >
          <BrandLogo />
        </a>

        <div className="flex items-center gap-3 sm:gap-5">

          {/* Desktop nav links — hidden on mobile */}
          <ul className="hidden sm:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeId === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`text-[0.65rem] font-medium tracking-[0.18em] uppercase transition-colors focus-visible:rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                      isActive ? 'text-gold' : 'text-muted hover:text-gold'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          {/* Hamburger button — mobile only */}
          <button
            className="sm:hidden flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-px w-5 bg-cream transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-cream transition-opacity duration-150 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-cream transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>

        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="border-t border-border-dark px-4 py-3 flex flex-col">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeId === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block py-3 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                    isActive ? 'text-gold' : 'text-muted hover:text-gold'
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

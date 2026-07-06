import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type NavLink } from '@app-types/global.types';
import { useScrollSpy } from '@hooks/useScrollSpy';
import { useTranslation } from '@i18n/translations';
import { LanguageToggle } from '@components/ui/LanguageToggle/LanguageToggle';
import { BrandLogo } from '@components/ui/BrandLogo/BrandLogo';

// Defined outside component so the array reference is stable across renders
// (prevents useEffect in useScrollSpy from re-running on every render)
const SECTION_IDS = ['about', 'projects', 'skills', 'education', 'contact'];

export function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const t = useTranslation();

  const navLinks: NavLink[] = [
    { label: t.nav.about,     href: '#about' },
    { label: t.nav.projects,  href: '#projects' },
    { label: t.nav.skills,    href: '#skills' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.contact,   href: '#contact' },
  ];

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
        {t.nav.skipToContent}
      </a>

      <nav
        aria-label={t.nav.mainNav}
        className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4"
      >
        <Link
          to="/"
          className="group flex items-center gap-1.5 focus-visible:outline-none"
          aria-label={t.nav.home}
        >
          <BrandLogo />
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">

          {/* Desktop nav links — hidden on mobile */}
          <ul className="hidden sm:flex items-center gap-7">
            {navLinks.map(({ label, href }) => {
              const isActive = activeId === href.slice(1);
              return (
                <li key={href}>
                  <Link
                    to={`/${href}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`text-[0.65rem] font-medium tracking-[0.18em] uppercase transition-colors focus-visible:rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                      isActive ? 'text-gold' : 'text-muted hover:text-gold'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <LanguageToggle />

          {/* Hamburger button — mobile only */}
          <button
            className="sm:hidden flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="border-t border-border-dark px-4 py-3 flex flex-col">
          {navLinks.map(({ label, href }) => {
            const isActive = activeId === href.slice(1);
            return (
              <li key={href}>
                <Link
                  to={`/${href}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block py-3 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                    isActive ? 'text-gold' : 'text-muted hover:text-gold'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-border-dark px-4 py-3">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

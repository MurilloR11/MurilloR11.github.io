import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Home sections are lazy-loaded, so the hash target may not exist in the DOM
// yet on the same frame the route changes — poll a few frames before giving up.
const MAX_SCROLL_ATTEMPTS = 60;

// Client-side navigation doesn't scroll like a full page load — jump to the
// hash target's section on the home page, or the top of the page otherwise.
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    let rafId: number;
    let attempts = 0;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      attempts += 1;
      if (attempts < MAX_SCROLL_ATTEMPTS) rafId = requestAnimationFrame(tryScroll);
    };

    tryScroll();
    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);

  return null;
}

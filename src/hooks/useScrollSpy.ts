import { useEffect, useState } from 'react';

// Custom hook shared by Navbar (active link) — lives in /hooks per SKILL
// (used by 2+ components: Navbar + potentially a progress indicator)
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  // useEffect with cleanup per SKILL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Shrink intersection root to a horizontal band in the middle of the viewport:
      // -40% top = section must scroll past top 40% to become active
      // -55% bottom = section must stay in the top 45% to remain active (40+55=95 total trim)
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // cleanup per SKILL
  }, [sectionIds]); // complete dependency array per SKILL

  return activeId;
}

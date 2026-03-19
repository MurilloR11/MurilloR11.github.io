import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Custom hook — extract reusable logic into use* per SKILL
// Used by 2+ feature sections (hero, projects, skills, contact) → lives in /hooks
export function useIntersectionObserver({
  threshold = 0.1, // trigger when 10% of the element is visible — handles elements taller than the viewport
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // useEffect with cleanup per SKILL
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect(); // cleanup per SKILL
  }, [threshold, rootMargin, triggerOnce]); // complete dependency array per SKILL

  return { ref, isIntersecting };
}

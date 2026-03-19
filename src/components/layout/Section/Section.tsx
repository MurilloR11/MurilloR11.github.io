import { type PropsWithChildren } from 'react';
import { cn } from '@utils/cn';

// PropsWithChildren per SKILL: "use when component accepts children but has no other custom props"
interface SectionProps {
  id: string;
  className?: string;
}

// Named export + function declaration (not React.FC) per SKILL
// PropsWithChildren<T> for components wrapping children
export function Section({ children, id, className }: PropsWithChildren<SectionProps>) {
  return (
    // Semantic HTML per SKILL: <section> with aria-labelledby linking to the h2 inside
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('py-14 px-4 sm:py-16 sm:px-6 md:py-20 max-w-5xl mx-auto w-full', className)}
    >
      {children}
    </section>
  );
}

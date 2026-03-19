import { BrandLogo } from '@components/ui/BrandLogo/BrandLogo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dark py-10 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="group flex items-center gap-1.5">
          <BrandLogo />
        </span>
        <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-subtle">
          © {year} · Santiago Murillo
        </p>
      </div>
    </footer>
  );
}

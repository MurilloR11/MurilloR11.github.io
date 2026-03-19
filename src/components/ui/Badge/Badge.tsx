interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded-sm border border-border-dark px-2.5 py-1 text-[0.62rem] font-medium tracking-widest uppercase text-muted">
      {label}
    </span>
  );
}

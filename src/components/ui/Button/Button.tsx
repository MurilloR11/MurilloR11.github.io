import { cn } from '@utils/cn';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-gold text-base hover:bg-[#D4B55A] border border-gold',
  outline: 'border border-gold text-gold hover:bg-gold-dim',
  ghost:   'text-gold hover:bg-gold-dim border border-transparent',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-[0.7rem]',
  md: 'px-5 py-2.5 text-[0.75rem]',
  lg: 'px-7 py-3 text-[0.8rem]',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center font-medium tracking-[0.12em] uppercase',
        'transition-all duration-200 rounded-sm',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60',
        'disabled:pointer-events-none disabled:opacity-40',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
}

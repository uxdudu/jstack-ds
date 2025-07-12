import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive' | 'icon';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    focus-visible:ring-2 focus-visible:ring-[rgb(var(--button-primary-bg))]
    shadow-sm
  `,
  secondary: `
    focus-visible:ring-2 focus-visible:ring-[rgb(var(--button-secondary-bg))]
    shadow-sm
  `,
  outline: `
    focus-visible:ring-2 focus-visible:ring-[rgb(var(--button-outline-border))]
    shadow-sm
  `,
  ghost: `
    focus-visible:ring-2 focus-visible:ring-[rgb(var(--button-ghost-hover-bg))]
  `,
  link: `
    focus-visible:ring-2 focus-visible:ring-[rgb(var(--button-link-fg))]
  `,
  destructive: `
    focus-visible:ring-2 focus-visible:ring-[var(--button-destructive-bg)]
    shadow-sm
  `,
  icon: `
    focus-visible:ring-2 focus-visible:ring-[rgb(var(--button-secondary-bg))]
    p-0 flex items-center justify-center
  `,
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'h-[var(--button-lg-h)] px-[var(--button-lg-px)] gap-[var(--button-lg-gap)] text-base',
  md: 'h-[var(--button-md-h)] px-[var(--button-md-px)] gap-[var(--button-md-gap)] text-base',
  sm: 'h-[var(--button-sm-h)] px-[var(--button-sm-px)] gap-[var(--button-sm-gap)] text-sm',
  xs: 'h-[var(--button-xs-h)] px-[var(--button-xs-px)] gap-[var(--button-xs-gap)] text-xs',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      loading = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        className={clsx(
          'inline-flex items-center justify-center font-semibold select-none transition-colors outline-none',
          // Container externo: foco, sombra, etc
          'focus-visible:outline-none',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        <span
          className={clsx(
            'flex flex-row items-center justify-center w-full h-full',
            'rounded-full', // Border-radius do Figma
            'px-4 py-2 gap-2', // Padding e gap do Figma
            "font-['Instrument_Sans',sans-serif] font-medium text-[18px] leading-[28px]",
            // Aplicar bg, text, border, etc, conforme a variante
            variant === 'primary' && 'bg-[rgb(var(--button-primary-bg))] text-[rgb(var(--button-primary-fg))]',
            variant === 'secondary' && 'bg-[rgb(var(--button-secondary-bg))] text-[rgb(var(--button-secondary-fg))] border border-[rgb(var(--button-secondary-border))]',
            variant === 'outline' && 'bg-transparent text-[rgb(var(--button-outline-fg))] border border-[rgb(var(--button-outline-border))]',
            variant === 'ghost' && 'bg-transparent text-[rgb(var(--button-ghost-fg))]',
            variant === 'link' && 'bg-transparent text-[rgb(var(--button-link-fg))] underline underline-offset-2',
            variant === 'destructive' && 'bg-[var(--button-destructive-bg)] text-[rgb(var(--button-destructive-fg))]',
            variant === 'icon' && 'bg-[rgb(var(--button-secondary-bg))] text-[rgb(var(--button-secondary-fg))] border border-[rgb(var(--button-secondary-border))] p-0',
          )}
        >
          {leftIcon && <span className="flex items-center w-6 h-6">{leftIcon}</span>}
          {children && <span className="text-center whitespace-nowrap">{children}</span>}
          {rightIcon && <span className="flex items-center w-6 h-6">{rightIcon}</span>}
          {loading && (
            <span className="animate-spin ml-2 w-4 h-4 border-2 border-t-transparent border-current rounded-full" />
          )}
        </span>
      </button>
    );
  }
);
Button.displayName = 'Button'; 
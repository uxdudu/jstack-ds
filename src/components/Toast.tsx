import React from 'react';

type ToastType = 'default' | 'destructive' | 'success';

interface ToastProps {
  title?: string;
  description?: string;
  type?: ToastType;
  onClose?: () => void;
}

const typeStyles: Record<ToastType, { bg: string; text: string; desc: string; border?: string }> = {
  default: {
    bg: 'bg-[var(--card)]',
    text: 'text-[var(--card-foreground)]',
    desc: 'text-[var(--muted-foreground)]',
    border: 'border border-[var(--border)]',
  },
  destructive: {
    bg: 'bg-[var(--destructive)]',
    text: 'text-[var(--destructive-foreground)]',
    desc: 'text-[var(--destructive-foreground)] opacity-70',
    border: '',
  },
  success: {
    bg: 'bg-[var(--success)]',
    text: 'text-[var(--success-foreground)]',
    desc: 'text-[var(--success-foreground)] opacity-70',
    border: '',
  },
};

export function Toast({
  title = 'Title',
  description = 'Description',
  type = 'default',
  onClose,
}: ToastProps) {
  const styles = typeStyles[type];

  return (
    <div
      className={
        `relative rounded-xl p-5 flex flex-row items-center gap-7 min-w-[320px] max-w-[400px] ` +
        `${styles.bg} ${styles.border}`
      }
    >
      <div className="flex-1 flex flex-col gap-1">
        {title && (
          <div className="font-['Instrument_Sans',sans-serif] font-semibold text-[14px] leading-[20px] w-full">
            <p>{title}</p>
          </div>
        )}
        {description && (
          <div className={`font-['Instrument_Sans',sans-serif] font-normal text-[14px] leading-[20px] tracking-tight w-full ${styles.desc}`}>
            <p>{description}</p>
          </div>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-2 top-2 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
          aria-label="Fechar"
          type="button"
        >
          <svg width={16} height={16} viewBox="0 0 9 9" fill="none">
            <path
              d="M0.15 0.15C0.34 -0.05 0.66 -0.05 0.85 0.15L4.5 3.79L8.15 0.15C8.34 -0.05 8.66 -0.05 8.85 0.15C9.05 0.34 9.05 0.66 8.85 0.85L5.21 4.5L8.85 8.15C9.05 8.34 9.05 8.66 8.85 8.85C8.66 9.05 8.34 9.05 8.15 8.85L4.5 5.21L0.85 8.85C0.66 9.05 0.34 9.05 0.15 8.85C-0.05 8.66 -0.05 8.34 0.15 8.15L3.79 4.5L0.15 0.85C-0.05 0.66 -0.05 0.34 0.15 0.15Z"
              fill="var(--card-foreground)"
            />
          </svg>
        </button>
      )}
    </div>
  );
} 
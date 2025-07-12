import React from 'react';

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  position?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Sheet({ open, onClose, title, description, position = 'vertical', children, footer }: SheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={[
          'bg-[var(--background)] rounded-lg shadow-xl relative flex flex-col',
          position === 'horizontal' ? 'flex-row w-[700px] max-w-full' : 'w-[348px] max-w-full',
        ].join(' ')}
        role="dialog"
        aria-modal="true"
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-[var(--muted)] transition"
          aria-label="Fechar"
          type="button"
        >
          <svg width={16} height={16} viewBox="0 0 9 9" fill="none">
            <path
              d="M0.15 0.15C0.34 -0.05 0.66 -0.05 0.85 0.15L4.5 3.79L8.15 0.15C8.34 -0.05 8.66 -0.05 8.85 0.15C9.05 0.34 9.05 0.66 8.85 0.85L5.21 4.5L8.85 8.15C9.05 8.34 9.05 8.66 8.85 8.85C8.66 9.05 8.34 9.05 8.15 8.85L4.5 5.21L0.85 8.85C0.66 9.05 0.34 9.05 0.15 8.85C-0.05 8.66 -0.05 8.34 0.15 8.15L3.79 4.5L0.15 0.85C-0.05 0.66 -0.05 0.34 0.15 0.15Z"
              fill="var(--foreground)"
            />
          </svg>
        </button>
        {/* Header */}
        <div className="p-6 pb-0">
          {title && (
            <h2 className="font-['Vinila Variable',sans-serif] text-2xl font-semibold leading-8 tracking-tighter text-[var(--foreground)]">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-['Instrument_Sans',sans-serif] text-sm leading-5 text-[var(--muted-foreground)] mt-1">
              {description}
            </p>
          )}
        </div>
        {/* Content */}
        <div className="flex-1 px-6 pt-4 pb-6 flex flex-col gap-6">
          {children}
        </div>
        {/* Footer */}
        {footer && (
          <div className="px-6 pb-6 flex flex-row items-center justify-end gap-2 border-t border-[var(--border-muted)]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
} 
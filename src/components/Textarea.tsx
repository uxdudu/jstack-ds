import React, { TextareaHTMLAttributes } from 'react';

export type TextareaState = 'default' | 'focused' | 'completed' | 'disabled';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  state?: TextareaState;
}

export function Textarea({
  label,
  helperText,
  state = 'default',
  placeholder = 'Placeholder',
  disabled,
  ...props
}: TextareaProps) {
  const isDisabled = state === 'disabled' || disabled;
  const isFocused = state === 'focused';
  const isCompleted = state === 'completed';

  return (
    <div className="flex flex-col gap-6 items-start w-full">
      {label && (
        <label className="font-['Instrument_Sans',sans-serif] text-[14px] text-[var(--foreground)] mb-1">
          {label}
        </label>
      )}
      <div className="w-full flex flex-col gap-1.5">
        <div className="relative w-full">
          <textarea
            className={
              [
                'bg-[var(--input-background)] min-h-20 w-full rounded-[10px] resize-none font-[\'Instrument_Sans,sans-serif] text-[14px] leading-[20px] p-[14px] border border-[var(--input)] outline-none transition-all',
                isDisabled && 'text-[var(--muted-foreground)] opacity-50 cursor-not-allowed',
                isCompleted && 'text-[var(--foreground)]',
                isFocused && 'border-[var(--ring)] shadow-[0_0_0_2px_var(--ring)] z-10',
              ]
                .filter(Boolean)
                .join(' ')
            }
            placeholder={placeholder}
            disabled={isDisabled}
            {...props}
          />
        </div>
        {helperText && (
          <span className="font-['Instrument_Sans',sans-serif] text-[14px] leading-[20px] text-[var(--muted-foreground)] mt-1">
            {helperText}
          </span>
        )}
      </div>
    </div>
  );
} 
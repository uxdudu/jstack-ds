import React, { useState, useRef, useEffect } from 'react';

interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function Select({
  label,
  helperText,
  placeholder = 'Selecione',
  options,
  value,
  onChange,
  disabled,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [open]);

  const selected = options.find(opt => opt.value === value);

  return (
    <div className="flex flex-col gap-1.5 items-start w-full" ref={ref}>
      {label && (
        <label className="font-['Instrument_Sans',sans-serif] text-[14px] font-medium text-[var(--foreground)] w-full">
          {label}
        </label>
      )}
      <button
        type="button"
        className={[
          'bg-[var(--input-background)] relative rounded-[10px] w-full flex flex-row items-center px-3 py-2.5 border border-[var(--input)] transition-all',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          open ? 'border-[var(--ring)] shadow-[0_0_0_2px_var(--ring)] z-10' : '',
        ].join(' ')}
        onClick={() => !disabled && setOpen(v => !v)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex-1 text-left font-['Instrument_Sans',sans-serif] text-[14px] text-[var(--foreground)] leading-[20px] tracking-tight">
          {selected ? selected.label : <span className="text-[var(--muted-foreground)]">{placeholder}</span>}
        </span>
        <span className="ml-2 flex items-center">
          <svg width={16} height={16} viewBox="0 0 11 6" fill="none">
            <path d="M0.146447 0.146447C0.323958 -0.0310644 0.601733 -0.0472018 0.797474 0.0980345L0.853553 0.146447L5.16667 4.45933L9.47978 0.146447C9.65729 -0.0310644 9.93507 -0.0472018 10.1308 0.0980345L10.1869 0.146447C10.3644 0.323958 10.3805 0.601733 10.2353 0.797474L10.1869 0.853553L5.52022 5.52022C5.34271 5.69773 5.06493 5.71387 4.86919 5.56863L4.81311 5.52022L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" fill="var(--foreground)" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="absolute mt-2 w-full bg-[var(--input-background)] rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(7,9,10,0.1),0px_1px_3px_0px_rgba(7,9,10,0.1)] border border-[var(--border)] z-50">
          <ul className="max-h-60 overflow-auto py-1" tabIndex={-1} role="listbox">
            {options.map(opt => (
              <li
                key={opt.value}
                className={[
                  'flex flex-row items-center gap-1.5 px-3 py-2 rounded-[10px] font-[' +
                    "Instrument_Sans,sans-serif] text-[14px] text-[var(--foreground)] leading-[20px] cursor-pointer transition-colors",
                  value === opt.value ? 'bg-[var(--accent)] text-[var(--accent-foreground)]' : 'hover:bg-[var(--muted)]',
                ].join(' ')}
                role="option"
                aria-selected={value === opt.value}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
              >
                {opt.icon && <span className="w-4 h-4 mr-2 flex items-center justify-center">{opt.icon}</span>}
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      {helperText && (
        <span className="font-['Instrument_Sans',sans-serif] text-[14px] leading-[20px] text-[var(--muted-foreground)] mt-1">
          {helperText}
        </span>
      )}
    </div>
  );
} 
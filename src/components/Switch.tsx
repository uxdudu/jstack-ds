import React from 'react';

export type SwitchSize = 'md' | 'sm';

interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize;
  disabled?: boolean;
}

export function Switch({ label, checked = false, onChange, size = 'md', disabled }: SwitchProps) {
  const isMd = size === 'md';
  return (
    <button
      type="button"
      disabled={disabled}
      aria-checked={checked}
      role="switch"
      tabIndex={0}
      onClick={() => !disabled && onChange?.(!checked)}
      className={[
        'flex flex-row gap-2 items-center justify-start p-0 relative',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ].join(' ')}
    >
      <div
        className={[
          'flex flex-row items-center overflow-clip relative rounded-full shrink-0',
          isMd
            ? checked
              ? 'bg-[var(--primary)] pl-[22px] pr-0.5 py-0.5 w-[48px] h-5'
              : 'bg-[var(--muted)] pl-0.5 pr-[22px] py-0.5 w-[48px] h-5'
            : checked
              ? 'bg-[var(--primary)] pl-3 pr-px py-px w-[36px] h-[14px]'
              : 'bg-[var(--muted)] pl-px pr-3 py-px w-[36px] h-[14px]'
        ].join(' ')}
      >
        <div
          className={[
            'rounded-full transition-all duration-200 shrink-0',
            isMd
              ? checked
                ? 'bg-[var(--always-white)] shadow-[-2px_0px_3.2px_0px_rgba(0,0,0,0.1)] w-5 h-5'
                : 'bg-[var(--muted-foreground)] shadow-[0px_1px_2px_0px_rgba(7,9,10,0.1)] w-5 h-5'
              : checked
                ? 'bg-[var(--always-white)] shadow-[-2px_0px_3.2px_0px_rgba(0,0,0,0.1)] w-[14px] h-[14px]'
                : 'bg-[var(--muted-foreground)] shadow-[0px_1px_2px_0px_rgba(7,9,10,0.1)] w-[14px] h-[14px]'
          ].join(' ')}
        />
        <div className={isMd ? 'absolute inset-0 pointer-events-none shadow-[0px_1.1px_2px_0px_inset_rgba(0,0,0,0.25)]' : 'absolute inset-0 pointer-events-none shadow-[0px_2px_4px_0px_inset_rgba(7,9,10,0.05)]'} />
      </div>
      {label && (
        <span
          className={[
            'font-["Instrument_Sans",sans-serif] not-italic relative shrink-0 text-left text-nowrap',
            isMd
              ? 'text-[var(--foreground)] text-[14px] leading-[20px] opacity-70'
              : 'text-[var(--foreground)] text-[12px] leading-[16px] opacity-70'
          ].join(' ')}
        >
          {label}
        </span>
      )}
    </button>
  );
} 
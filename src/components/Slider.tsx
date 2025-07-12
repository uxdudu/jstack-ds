import React from 'react';

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

export function Slider({ value, min = 0, max = 100, step = 1, onChange, disabled }: SliderProps) {
  // Calcula a porcentagem preenchida
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative w-full flex items-center h-8 select-none">
      {/* Trilha de fundo */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-[var(--muted)] rounded-full w-full overflow-hidden">
        {/* Trilha preenchida */}
        <div
          className="absolute left-0 top-0 h-0.5 rounded-full bg-[var(--primary)] shadow-[0px_0px_3px_2px_rgba(64,203,246,0.11),1px_0px_16px_-1px_rgba(64,203,246,0.2)]"
          style={{ width: `${percent}%` }}
        />
      </div>
      {/* Thumb */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: `calc(${percent}% - 16px)` }}
      >
        <button
          type="button"
          className="size-8 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] bg-transparent"
          style={{ cursor: disabled ? 'not-allowed' : 'grab' }}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-orientation="horizontal"
          role="slider"
          onMouseDown={e => {
            if (disabled) return;
            const slider = e.currentTarget.parentElement?.parentElement;
            if (!slider) return;
            const onMove = (moveEvent: MouseEvent) => {
              const rect = slider.getBoundingClientRect();
              let newPercent = (moveEvent.clientX - rect.left) / rect.width;
              newPercent = Math.max(0, Math.min(1, newPercent));
              const newValue = Math.round((min + newPercent * (max - min)) / step) * step;
              onChange?.(newValue);
            };
            const onUp = () => {
              window.removeEventListener('mousemove', onMove);
              window.removeEventListener('mouseup', onUp);
            };
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', onUp);
          }}
        >
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="10" fill="var(--background)" />
            <circle cx="16" cy="16" r="11" stroke="var(--primary)" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
} 
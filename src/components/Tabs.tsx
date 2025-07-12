import React from 'react';

export type TabsDirection = 'horizontal' | 'vertical';

export interface TabItem {
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  active: number;
  onChange?: (index: number) => void;
  direction?: TabsDirection;
}

export function Tabs({ items, active, onChange, direction = 'horizontal' }: TabsProps) {
  const isHorizontal = direction === 'horizontal';

  return (
    <div className={isHorizontal ? 'relative' : 'relative flex flex-col'}>
      {/* Linha de fundo */}
      <div
        className={
          isHorizontal
            ? 'absolute border-b border-[var(--border)] left-0 right-0 bottom-[-1px] pointer-events-none'
            : 'absolute border-l border-[var(--border)] top-0 bottom-0 left-[-0.5px] pointer-events-none'
        }
      />
      <div
        className={
          isHorizontal
            ? 'flex flex-row items-center justify-center gap-2 p-1'
            : 'flex flex-col gap-5 items-start justify-center p-1'
        }
      >
        {items.map((item, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={item.label + idx}
              type="button"
              className={
                [
                  'flex flex-row items-center gap-2 px-3 py-1.5 rounded-md relative transition-colors',
                  isHorizontal ? '' : 'pl-3 pr-0',
                  isActive
                    ? 'bg-transparent'
                    : 'bg-transparent',
                ].join(' ')
              }
              onClick={() => onChange?.(idx)}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
            >
              {item.icon && (
                <span className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
              <span
                className={
                  [
                    "font-['Instrument_Sans',sans-serif] text-[14px] leading-[20px] font-medium whitespace-pre",
                    isActive
                      ? 'text-[var(--primary)]'
                      : 'text-[var(--muted-foreground)]'
                  ].join(' ')
                }
              >
                {item.label}
              </span>
              {/* Barra de destaque */}
              {isActive && (
                isHorizontal ? (
                  <span className="absolute left-0 right-0 -bottom-[5px] h-0">
                    <svg className="w-full h-1" fill="none" viewBox="0 0 93 1">
                      <line x2="93" y1="0.5" y2="0.5" stroke="var(--primary)" />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute left-[-4px] top-1/2 -translate-y-1/2 h-5 w-0">
                    <svg className="h-full w-2" fill="none" viewBox="0 0 2 20">
                      <path d="M1 20L1 0" stroke="var(--primary)" />
                    </svg>
                  </span>
                )
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
} 
import React from 'react';

export type TooltipOrientation = 'down' | 'up' | 'right' | 'left';

interface TooltipProps {
  label: string;
  orientation?: TooltipOrientation;
}

const tipRotation: Record<TooltipOrientation, string> = {
  down: '',
  up: 'scale-y-[-100%]',
  right: 'rotate-90 scale-y-[-100%]',
  left: 'rotate-[270deg] scale-y-[-100%]',
};

export function Tooltip({ label, orientation = 'down' }: TooltipProps) {
  const tip = (
    <div className="h-2 w-4 relative flex items-center justify-center">
      <div className={`absolute bottom-[10.355%] left-0 right-0 top-0 ${tipRotation[orientation]}`}>
        <svg className="block w-full h-full" fill="none" viewBox="0 0 16 8">
          <path
            d="M6.58579 6.58579L0 0H16L9.41421 6.58579C8.63317 7.36684 7.36684 7.36684 6.58579 6.58579Z"
            fill="var(--popover)"
          />
        </svg>
      </div>
    </div>
  );

  const content = (
    <div className="bg-[var(--popover)] text-[var(--popover-foreground)] font-['Instrument_Sans',sans-serif] text-[14px] leading-[20px] rounded-lg shadow-[0px_1px_2px_0px_rgba(7,9,10,0.1)] px-3 py-1.5 flex items-center justify-center">
      <span className="whitespace-pre">{label}</span>
    </div>
  );

  if (orientation === 'up') {
    return (
      <div className="flex flex-col items-center">
        {tip}
        {content}
      </div>
    );
  }
  if (orientation === 'right') {
    return (
      <div className="flex flex-row items-center">
        {content}
        <div className="flex h-4 w-2 items-center justify-center">{tip}</div>
      </div>
    );
  }
  if (orientation === 'left') {
    return (
      <div className="flex flex-row items-center">
        <div className="flex h-4 w-2 items-center justify-center">{tip}</div>
        {content}
      </div>
    );
  }
  // down (default)
  return (
    <div className="flex flex-col items-center">
      {content}
      {tip}
    </div>
  );
} 
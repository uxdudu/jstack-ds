import React from 'react';

export type SpinnerStep = 1 | 2 | 3 | 4;

interface SpinnerProps {
  step?: SpinnerStep;
}

const rotations = [0, 90, 180, 270];

export function Spinner({ step = 1 }: SpinnerProps) {
  const rotation = rotations[(step - 1) % 4];
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <span
        className={`block w-5 h-5`}
        style={{ transform: `rotate(${rotation}deg) scaleY(-1)` }}
      >
        <svg width={20} height={20} viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1" height="1" fill="#EEE" />
        </svg>
      </span>
    </div>
  );
} 
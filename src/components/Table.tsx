import React from 'react';

export interface TableColumn {
  label: string;
  align?: 'left' | 'right';
  maxWidth?: string;
}

export interface TableRow {
  [key: string]: React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
  footer?: React.ReactNode;
  description?: string;
}

export function Table({ columns, data, footer, description }: TableProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <div className="relative rounded-lg w-full">
        <div className="flex flex-col overflow-clip w-full bg-[#131517] rounded-lg">
          {/* Header */}
          <div className="flex flex-row items-center px-4 py-3.5 text-[#718089] text-[14px] font-['Instrument_Sans',sans-serif] leading-[20px]">
            {columns.map((col, idx) => (
              <div
                key={col.label + idx}
                className={
                  [
                    'flex flex-col justify-center',
                    col.align === 'right' ? 'text-right' : 'text-left',
                    col.maxWidth ? `max-w-[${col.maxWidth}]` : '',
                    'grow shrink-0 min-w-px min-h-px',
                  ].join(' ')
                }
              >
                <p className="block leading-[20px]">{col.label}</p>
              </div>
            ))}
          </div>
          {/* Rows */}
          {data.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-row items-center px-4 py-4 text-[#ebeeef] text-[14px] font-['Instrument_Sans',sans-serif] leading-[20px] border-t border-[#131517]"
            >
              {columns.map((col, colIdx) => (
                <div
                  key={col.label + colIdx}
                  className={
                    [
                      'flex flex-col justify-center',
                      col.align === 'right' ? 'text-right' : 'text-left',
                      col.maxWidth ? `max-w-[${col.maxWidth}]` : '',
                      'grow shrink-0 min-w-px min-h-px',
                    ].join(' ')
                  }
                >
                  <p className="block leading-[20px]">{row[col.label]}</p>
                </div>
              ))}
            </div>
          ))}
          {/* Footer */}
          {footer && (
            <div className="flex flex-row items-center px-4 py-3.5 text-[#ebeeef] text-[14px] font-['Instrument_Sans',sans-serif] leading-[20px] border-t border-[#131517]">
              {footer}
            </div>
          )}
        </div>
        <div className="absolute border border-[#131517] inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>
      {description && (
        <div className="font-['Instrument_Sans',sans-serif] h-5 text-[#718089] text-[14px] text-left tracking-tight w-full mt-2">
          <p className="leading-[20px]">{description}</p>
        </div>
      )}
    </div>
  );
} 
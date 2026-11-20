import React from "react";

interface DottedSectionDividerProps {
  className?: string;
  dotSize?: number;
  spacing?: number;
}

export function DottedSectionDivider({
  className = "",
  dotSize = 4,
  spacing = 14,
}: DottedSectionDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center py-4 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-3 text-zinc-800 dark:text-zinc-200 opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="dotted-line-pattern"
            width={spacing}
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy="6"
              r={dotSize / 2}
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-line-pattern)" />
      </svg>
    </div>
  );
}

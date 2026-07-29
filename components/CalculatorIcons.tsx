"use client";

// Inline SVG icons for the Calculator. Using currentColor so the
// parent text-* class controls the stroke / fill color. All icons
// share a 24x24 viewBox and 1.75 stroke-width for visual consistency.

interface IconProps {
  className?: string;
  size?: number;
}

const baseProps = (size: number) => ({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function WaterIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M12 3 c -3 5 -6 8 -6 12 a 6 6 0 0 0 12 0 c 0 -4 -3 -7 -6 -12 z" />
      <path d="M9 14 a 3 3 0 0 0 3 3" />
    </svg>
  );
}

export function SaltIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M9 4 h6 v2 h-6 z" />
      <rect x="7" y="6" width="10" height="14" rx="1.5" />
      <circle cx="10.5" cy="11" r="0.7" fill="currentColor" />
      <circle cx="13.5" cy="11" r="0.7" fill="currentColor" />
      <circle cx="12" cy="14" r="0.7" fill="currentColor" />
      <circle cx="10.5" cy="16" r="0.7" fill="currentColor" />
      <circle cx="13.5" cy="16" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function FlourIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M12 22 V 8" />
      <path d="M12 8 c 0 -3 -3 -5 -3 -5 c 0 0 3 -1 3 2" />
      <path d="M12 8 c 0 -3 3 -5 3 -5 c 0 0 -3 -1 -3 2" />
      <path d="M12 14 c 0 -2 -2 -3.5 -2 -3.5 c 0 0 2 -0.8 2 1.5" />
      <path d="M12 14 c 0 -2 2 -3.5 2 -3.5 c 0 0 -2 -0.8 -2 1.5" />
      <path d="M12 20 c 0 -1.5 -1.5 -2.5 -1.5 -2.5" />
      <path d="M12 20 c 0 -1.5 1.5 -2.5 1.5 -2.5" />
    </svg>
  );
}

export function JarIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M9 3 h6 v2 h-6 z" />
      <path d="M8 5 h8 v1 h-8 z" />
      <path d="M7 6 h10 v13 a 1 1 0 0 1 -1 1 h -8 a 1 1 0 0 1 -1 -1 z" />
      <line x1="7" y1="11" x2="17" y2="11" />
      <path d="M9 14 c 0 0 1 0.7 3 0.7 s 3 -0.7 3 -0.7" />
    </svg>
  );
}

export function BreadIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M5 17 c 0 -4 3 -8 7 -8 c 1 0 2 0 3 0.5 c 1 -0.5 2 -0.5 3 -0.5 c 4 0 7 4 7 8 v3 H 5 z" />
      <line x1="9" y1="11" x2="9" y2="14" />
      <line x1="13" y1="11" x2="13" y2="14" />
      <line x1="11" y1="10" x2="11" y2="15" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}

export function GlassIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M5 3 h14 l -1.5 18 H 6.5 z" />
      <line x1="4.5" y1="8" x2="19.5" y2="8" />
      <path d="M7 12 c 0 0 1.5 1 5 1 s 5 -1 5 -1" />
      <path d="M7 16 c 0 0 1.5 0.8 5 0.8 s 5 -0.8 5 -0.8" />
    </svg>
  );
}

export function ScaleIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <rect x="4" y="6" width="16" height="13" rx="1" />
      <line x1="2" y1="22" x2="22" y2="22" />
      <line x1="9" y1="6" x2="9" y2="2" />
      <line x1="15" y1="6" x2="15" y2="2" />
      <line x1="9" y1="2" x2="15" y2="2" />
      <path d="M12 11 l -3 3 h 6 z" fill="currentColor" />
      <line x1="12" y1="14" x2="12" y2="17" />
    </svg>
  );
}

export function PrinterIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <rect x="6" y="3" width="12" height="5" />
      <path d="M6 11 H 4 a 2 2 0 0 0 -2 2 v 4 h 6" />
      <path d="M18 11 h 2 a 2 2 0 0 1 2 2 v 4 h -6" />
      <rect x="6" y="14" width="12" height="7" />
      <circle cx="15" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function CopyIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <rect x="9" y="9" width="11" height="11" rx="1.5" />
      <path d="M5 15 H 4 a 1 1 0 0 1 -1 -1 V 5 a 1 1 0 0 1 1 -1 h 9 a 1 1 0 0 1 1 1 v 1" />
    </svg>
  );
}

export function OliveOilIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <ellipse cx="11.5" cy="13" rx="3.2" ry="4.5" transform="rotate(-20 11.5 13)" />
      <line x1="11" y1="9" x2="11" y2="6" />
      <path d="M9 6 L 11 6 L 10 4" />
      <path d="M9 13 L 14 13" />
    </svg>
  );
}

export function SugarIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <rect x="6" y="10" width="12" height="9" rx="0.5" />
      <path d="M6 10 L 4 7 L 8 6 L 10 9" />
      <path d="M18 10 L 20 7 L 16 6 L 14 9" />
      <line x1="9" y1="14" x2="9" y2="16" />
      <line x1="12" y1="14" x2="12" y2="16" />
      <line x1="15" y1="14" x2="15" y2="16" />
    </svg>
  );
}

export function CheckIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className}>
      <path d="M5 12 l 5 5 L 20 7" strokeWidth="2.5" />
    </svg>
  );
}


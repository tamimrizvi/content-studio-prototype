import { cx } from "@/lib/cx";

const sizes = { sm: "size-4", md: "size-5", lg: "size-7" } as const;
const tones = {
  brand: "text-content-brand",
  neutral: "text-content-secondary",
  current: "text-current",
} as const;

export interface SpinnerProps {
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  label?: string;
  className?: string;
}

export function Spinner({ size = "md", tone = "brand", label = "Loading", className }: SpinnerProps) {
  return (
    <svg role="status" aria-label={label} viewBox="0 0 24 24" fill="none" className={cx("animate-spin", sizes[size], tones[tone], className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.2" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

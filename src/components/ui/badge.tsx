import { cx, type IconComponent, type Tone } from "@/lib/cx";

export type BadgeVariant = "soft" | "solid" | "outline";

export interface BadgeProps {
  tone?: Tone;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  icon?: IconComponent;
  /** Leading status dot in the tone colour. */
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}

const soft: Record<Tone, string> = {
  neutral: "bg-fill-secondary text-content-secondary",
  brand: "bg-surface-brand text-content-brand",
  success: "bg-surface-success text-content-success",
  warning: "bg-surface-warning text-content-warning",
  critical: "bg-surface-critical text-content-critical",
};

const solid: Record<Tone, string> = {
  neutral: "bg-fill-inverse text-content-inverse",
  brand: "bg-fill-brand text-content-fixed-light",
  success: "bg-fill-success text-content-fixed-light",
  warning: "bg-fill-warning text-content-fixed-light",
  critical: "bg-fill-critical text-content-fixed-light",
};

const outline: Record<Tone, string> = {
  neutral: "border-border-primary bg-surface-background text-content-secondary",
  brand: "border-border-brand bg-surface-brand text-content-brand",
  success: "border-border-success bg-surface-success text-content-success",
  warning: "border-border-warning bg-surface-warning text-content-warning",
  critical: "border-border-critical bg-surface-critical text-content-critical",
};

export function Badge({ tone = "neutral", variant = "soft", size = "md", icon: Icon, dot, className, children }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full border border-transparent font-medium whitespace-nowrap",
        size === "sm" ? "h-5 px-1.5 type-label-xs" : "h-6 px-2 type-label-sm",
        variant === "soft" && soft[tone],
        variant === "solid" && solid[tone],
        variant === "outline" && outline[tone],
        className,
      )}
    >
      {dot ? <span className="size-1.5 rounded-full bg-current" /> : null}
      {Icon ? <Icon className="size-3.5 shrink-0" /> : null}
      {children}
    </span>
  );
}

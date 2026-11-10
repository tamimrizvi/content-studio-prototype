/* eslint-disable @next/next/no-img-element */
import { cx } from "@/lib/cx";

const sizes = {
  xs: "size-6 type-label-xs",
  sm: "size-8 type-label-sm",
  md: "size-10 type-label-md",
  lg: "size-12 type-label-lg",
  xl: "size-16 type-label-xl",
} as const;

const statusTones = {
  online: "bg-fill-success",
  busy: "bg-fill-critical",
  away: "bg-fill-warning",
  offline: "bg-fill-tertiary",
} as const;

export interface AvatarProps {
  name: string;
  src?: string;
  size?: keyof typeof sizes;
  shape?: "circle" | "square";
  status?: keyof typeof statusTones;
  className?: string;
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export function Avatar({ name, src, size = "md", shape = "circle", status, className }: AvatarProps) {
  const radius = shape === "circle" ? "rounded-full" : "rounded-4";
  return (
    <span className={cx("relative inline-flex shrink-0", sizes[size], className)}>
      {src ? (
        <img src={src} alt={name} className={cx("size-full object-cover", radius)} />
      ) : (
        <span
          role="img"
          aria-label={name}
          className={cx("grid size-full place-items-center bg-fill-brand-secondary font-semibold text-content-brand", radius)}
        >
          {initials(name)}
        </span>
      )}
      {status ? (
        <span
          aria-label={status}
          className={cx("absolute right-0 bottom-0 size-1/4 min-h-2 min-w-2 rounded-full ring-2 ring-surface-background", statusTones[status])}
        />
      ) : null}
    </span>
  );
}

export function AvatarGroup({ children, max, className }: { children: React.ReactNode[]; max?: number; className?: string }) {
  const shown = max ? children.slice(0, max) : children;
  const extra = children.length - shown.length;
  return (
    <div className={cx("flex items-center -space-x-2", className)}>
      {shown.map((child, i) => (
        <span key={i} className="rounded-full ring-2 ring-surface-background">
          {child}
        </span>
      ))}
      {extra > 0 ? (
        <span className="grid size-10 place-items-center rounded-full bg-fill-secondary type-label-sm font-semibold text-content-secondary ring-2 ring-surface-background">
          +{extra}
        </span>
      ) : null}
    </div>
  );
}

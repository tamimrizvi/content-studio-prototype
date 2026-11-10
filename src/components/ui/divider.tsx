import { cx } from "@/lib/cx";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  label?: React.ReactNode;
  className?: string;
}

export function Divider({ orientation = "horizontal", label, className }: DividerProps) {
  if (orientation === "vertical") {
    return <span role="separator" aria-orientation="vertical" className={cx("w-px self-stretch bg-border-primary", className)} />;
  }
  if (!label) return <hr className={cx("h-px w-full border-0 bg-border-primary", className)} />;
  return (
    <div role="separator" className={cx("flex w-full items-center gap-3", className)}>
      <span className="h-px flex-1 bg-border-primary" />
      <span className="type-label-sm font-medium text-content-tertiary">{label}</span>
      <span className="h-px flex-1 bg-border-primary" />
    </div>
  );
}

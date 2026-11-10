import { cx } from "@/lib/cx";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden className={cx("animate-pulse rounded-3 bg-fill-secondary", className)} {...props} />;
}

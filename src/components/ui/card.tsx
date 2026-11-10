import { cx } from "@/lib/cx";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: DivProps) {
  return <div className={cx("flex flex-col rounded-6 border border-border-primary bg-surface-background", className)} {...props} />;
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div className={cx("flex items-start justify-between gap-4 px-5 pt-5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cx("type-label-lg font-semibold text-content-primary", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx("mt-0.5 type-body-sm text-content-secondary", className)} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={cx("p-5", className)} {...props} />;
}

export function CardFooter({ className, ...props }: DivProps) {
  return <div className={cx("flex items-center justify-end gap-2 border-t border-border-primary px-5 py-3", className)} {...props} />;
}

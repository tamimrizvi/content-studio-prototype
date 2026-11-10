"use client";

import { Label, ProgressBar, type ProgressBarProps } from "react-aria-components";
import { cx, type Tone } from "@/lib/cx";

export interface ProgressProps extends Omit<ProgressBarProps, "children" | "className"> {
  label?: React.ReactNode;
  showValue?: boolean;
  tone?: Exclude<Tone, "neutral">;
  size?: "sm" | "md";
  className?: string;
}

const tones = {
  brand: "bg-fill-brand",
  success: "bg-fill-success",
  warning: "bg-fill-warning",
  critical: "bg-fill-critical",
};

export function Progress({ label, showValue = true, tone = "brand", size = "md", className, ...props }: ProgressProps) {
  return (
    <ProgressBar {...props} className={cx("flex w-full flex-col gap-1.5", className)}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          {label || showValue ? (
            <div className="flex items-center justify-between gap-3">
              {label ? <Label className="type-label-md font-medium text-content-primary">{label}</Label> : <span />}
              {showValue && !isIndeterminate ? <span className="type-label-sm text-content-secondary">{valueText}</span> : null}
            </div>
          ) : null}
          <div className={cx("w-full overflow-hidden rounded-full bg-fill-secondary", size === "sm" ? "h-1" : "h-2")}>
            <div
              className={cx("h-full rounded-full transition-[width] duration-300", tones[tone], isIndeterminate && "w-2/5 animate-indeterminate")}
              style={isIndeterminate ? undefined : { width: `${percentage}%` }}
            />
          </div>
        </>
      )}
    </ProgressBar>
  );
}

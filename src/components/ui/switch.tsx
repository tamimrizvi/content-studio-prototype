"use client";

import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from "react-aria-components";
import { cx } from "@/lib/cx";

export interface SwitchProps extends Omit<AriaSwitchProps, "children" | "className"> {
  children?: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}

export function Switch({ children, size = "md", className, ...props }: SwitchProps) {
  const sm = size === "sm";
  return (
    <AriaSwitch {...props} className={cx("group inline-flex cursor-pointer items-center gap-2.5 data-disabled:cursor-not-allowed", className)}>
      {({ isSelected }) => (
        <>
          <span
            className={cx(
              "flex shrink-0 items-center rounded-full p-0.5 transition-colors duration-150",
              "group-data-focus-visible:outline-2 group-data-focus-visible:outline-offset-2 group-data-focus-visible:outline-content-brand",
              sm ? "h-4 w-7" : "h-5 w-9",
              isSelected
                ? "bg-fill-brand group-data-hovered:bg-fill-brand-hover group-data-disabled:bg-fill-brand-disabled"
                : "bg-fill-tertiary group-data-hovered:bg-fill-tertiary-hover group-data-disabled:bg-fill-tertiary-disabled",
            )}
          >
            <span
              className={cx(
                "rounded-full bg-content-fixed-light shadow-sm transition-transform duration-150",
                sm ? "size-3" : "size-4",
                isSelected && (sm ? "translate-x-3" : "translate-x-4"),
              )}
            />
          </span>
          {children ? (
            <span className="type-label-md font-medium text-content-primary group-data-disabled:text-content-primary-disabled">{children}</span>
          ) : null}
        </>
      )}
    </AriaSwitch>
  );
}

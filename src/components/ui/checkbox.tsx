"use client";

import { RiCheckLine, RiSubtractLine } from "@remixicon/react";
import { Checkbox as AriaCheckbox, type CheckboxProps as AriaCheckboxProps } from "react-aria-components";
import { cx } from "@/lib/cx";

export interface CheckboxProps extends Omit<AriaCheckboxProps, "children" | "className"> {
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function Checkbox({ children, description, className, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={cx("group flex cursor-pointer items-start gap-2.5 data-disabled:cursor-not-allowed", className)}
    >
      {({ isSelected, isIndeterminate }) => (
        <>
          <span
            className={cx(
              "mt-px grid size-4.5 shrink-0 place-items-center rounded-2 border border-border-tertiary bg-surface-background text-content-fixed-light transition-colors duration-150",
              "group-data-hovered:border-content-brand group-data-invalid:border-border-critical",
              "group-data-focus-visible:outline-2 group-data-focus-visible:outline-offset-2 group-data-focus-visible:outline-content-brand",
              "group-data-disabled:border-border-primary group-data-disabled:bg-fill-primary-disabled",
              (isSelected || isIndeterminate) &&
                "border-transparent bg-fill-brand group-data-hovered:border-transparent group-data-hovered:bg-fill-brand-hover group-data-disabled:border-transparent group-data-disabled:bg-fill-brand-disabled",
            )}
          >
            {isIndeterminate ? <RiSubtractLine className="size-3.5" /> : isSelected ? <RiCheckLine className="size-3.5" /> : null}
          </span>
          {children || description ? (
            <span className="flex flex-col">
              <span className="type-label-md font-medium text-content-primary group-data-disabled:text-content-primary-disabled">{children}</span>
              {description ? <span className="type-body-xs text-content-secondary group-data-disabled:text-content-secondary-disabled">{description}</span> : null}
            </span>
          ) : null}
        </>
      )}
    </AriaCheckbox>
  );
}

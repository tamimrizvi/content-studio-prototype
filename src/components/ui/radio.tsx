"use client";

import {
  Label,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps,
} from "react-aria-components";
import { cx } from "@/lib/cx";
import { fieldLabel, FieldMessage, type FieldProps } from "./field";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children" | "className">, FieldProps {
  children: React.ReactNode;
  className?: string;
}

export function RadioGroup({ label, hint, errorMessage, children, className, ...props }: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} className={cx("group flex flex-col gap-2", className)}>
      {label ? <Label className={fieldLabel}>{label}</Label> : null}
      <div className="flex gap-3 group-data-[orientation=horizontal]:flex-row group-data-[orientation=horizontal]:gap-5 group-data-[orientation=vertical]:flex-col">
        {children}
      </div>
      <FieldMessage hint={hint} errorMessage={errorMessage} />
    </AriaRadioGroup>
  );
}

export interface RadioProps extends Omit<AriaRadioProps, "children" | "className"> {
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function Radio({ children, description, className, ...props }: RadioProps) {
  return (
    <AriaRadio {...props} className={cx("group/radio flex cursor-pointer items-start gap-2.5 data-disabled:cursor-not-allowed", className)}>
      {({ isSelected }) => (
        <>
          <span
            className={cx(
              "mt-px grid size-4.5 shrink-0 place-items-center rounded-full border border-border-tertiary bg-surface-background transition-colors duration-150",
              "group-data-hovered/radio:border-content-brand",
              "group-data-focus-visible/radio:outline-2 group-data-focus-visible/radio:outline-offset-2 group-data-focus-visible/radio:outline-content-brand",
              "group-data-disabled/radio:border-border-primary group-data-disabled/radio:bg-fill-primary-disabled",
              isSelected &&
                "border-transparent bg-fill-brand group-data-hovered/radio:border-transparent group-data-hovered/radio:bg-fill-brand-hover group-data-disabled/radio:border-transparent group-data-disabled/radio:bg-fill-brand-disabled",
            )}
          >
            {isSelected ? <span className="size-1.5 rounded-full bg-content-fixed-light" /> : null}
          </span>
          <span className="flex flex-col">
            <span className="type-label-md font-medium text-content-primary group-data-disabled/radio:text-content-primary-disabled">{children}</span>
            {description ? <span className="type-body-xs text-content-secondary">{description}</span> : null}
          </span>
        </>
      )}
    </AriaRadio>
  );
}

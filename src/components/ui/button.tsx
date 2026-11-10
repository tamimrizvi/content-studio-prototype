"use client";

import type { ReactNode } from "react";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import { cx, focusRing, type IconComponent } from "@/lib/cx";
import { Spinner } from "./spinner";

export type ButtonVariant = "primary" | "secondary" | "neutral" | "outline" | "ghost" | "inverse" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<AriaButtonProps, "children" | "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: IconComponent;
  trailingIcon?: IconComponent;
  /** Square button showing only `leadingIcon`. Requires `aria-label`. */
  iconOnly?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

const base =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 font-medium whitespace-nowrap select-none transition-colors duration-150 data-disabled:cursor-not-allowed data-pending:cursor-progress";

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 rounded-3 px-3 type-label-md",
  md: "h-9 rounded-4 px-3.5 type-label-md",
  lg: "h-11 rounded-4 px-5 type-label-lg",
};

const iconOnlySizes: Record<ButtonSize, string> = {
  sm: "w-8 px-0",
  md: "w-9 px-0",
  lg: "w-11 px-0",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "size-4",
  md: "size-4.5",
  lg: "size-5",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-fill-brand text-content-fixed-light data-hovered:bg-fill-brand-hover data-pressed:bg-fill-brand-active data-disabled:bg-fill-brand-disabled data-disabled:text-content-fixed-light-disabled",
  secondary:
    "bg-fill-brand-secondary text-content-brand data-hovered:bg-fill-brand-secondary-hover data-pressed:bg-fill-brand-secondary-active data-disabled:bg-fill-brand-secondary-disabled data-disabled:text-content-brand-disabled",
  neutral:
    "bg-fill-secondary text-content-primary data-hovered:bg-fill-secondary-hover data-pressed:bg-fill-secondary-active data-disabled:bg-fill-secondary-disabled data-disabled:text-content-primary-disabled",
  outline:
    "border border-border-primary bg-surface-background text-content-primary data-hovered:border-border-secondary data-hovered:bg-fill-primary data-pressed:bg-fill-primary-hover data-disabled:text-content-primary-disabled",
  ghost:
    "bg-transparent text-content-primary data-hovered:bg-fill-primary-hover data-pressed:bg-fill-primary-active data-disabled:text-content-primary-disabled",
  inverse:
    "bg-fill-inverse text-content-inverse data-hovered:bg-fill-inverse-hover data-pressed:bg-fill-inverse-active data-disabled:bg-fill-inverse-disabled data-disabled:text-content-inverse-disabled",
  danger:
    "bg-fill-critical text-content-fixed-light data-hovered:bg-fill-critical-hover data-pressed:bg-fill-critical-active data-disabled:bg-fill-critical-disabled data-disabled:text-content-fixed-light-disabled",
};

export function Button({
  variant = "primary",
  size = "md",
  leadingIcon: Leading,
  trailingIcon: Trailing,
  iconOnly = false,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={cx(base, focusRing, sizes[size], variants[variant], iconOnly && iconOnlySizes[size], fullWidth && "w-full", className)}
    >
      {({ isPending }) => (
        <>
          {isPending ? <Spinner size="sm" tone="current" /> : Leading ? <Leading className={cx("shrink-0", iconSizes[size])} /> : null}
          {!iconOnly && children}
          {!iconOnly && Trailing ? <Trailing className={cx("shrink-0", iconSizes[size])} /> : null}
        </>
      )}
    </AriaButton>
  );
}

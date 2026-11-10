"use client";

import { ToggleButton, ToggleButtonGroup, type Key } from "react-aria-components";
import { cx, focusRing, type IconComponent } from "@/lib/cx";

export interface SegmentedControlProps {
  options: { id: string; label: React.ReactNode; icon?: IconComponent; isDisabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  "aria-label": string;
  size?: "sm" | "md";
  className?: string;
}

export function SegmentedControl({ options, value, defaultValue, onChange, size = "md", className, ...props }: SegmentedControlProps) {
  return (
    <ToggleButtonGroup
      {...props}
      selectionMode="single"
      disallowEmptySelection
      selectedKeys={value !== undefined ? [value] : undefined}
      defaultSelectedKeys={defaultValue !== undefined ? [defaultValue] : undefined}
      onSelectionChange={(keys: Set<Key>) => {
        const [next] = keys;
        if (next !== undefined) onChange?.(String(next));
      }}
      className={cx("inline-flex gap-1 rounded-4 bg-fill-secondary p-1", className)}
    >
      {options.map(({ id, label, icon: Icon, isDisabled }) => (
        <ToggleButton
          key={id}
          id={id}
          isDisabled={isDisabled}
          className={cx(
            "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-3 px-3 type-label-md font-medium text-content-secondary transition-colors duration-150",
            "data-disabled:cursor-not-allowed data-disabled:text-content-secondary-disabled data-hovered:text-content-primary data-selected:bg-surface-background data-selected:text-content-primary data-selected:shadow-xs",
            size === "sm" ? "h-6" : "h-7",
            focusRing,
          )}
        >
          {Icon ? <Icon className="size-4 shrink-0" /> : null}
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

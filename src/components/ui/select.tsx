"use client";

import { RiArrowDownSLine, RiCheckLine } from "@remixicon/react";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
  type ListBoxItemProps,
  type SelectProps as AriaSelectProps,
} from "react-aria-components";
import { cx, listRow, popoverSurface } from "@/lib/cx";
import { fieldBox, FieldLabel, FieldMessage, type FieldProps } from "./field";

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children" | "className">, FieldProps {
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: "sm" | "md";
  className?: string;
}

export function Select<T extends object>({ label, hint, errorMessage, items, children, size = "md", className, ...props }: SelectProps<T>) {
  return (
    <AriaSelect {...props} className={cx("group flex flex-col gap-1.5", className)}>
      {label ? <FieldLabel>{label}</FieldLabel> : null}
      <Button
        className={cx(
          "flex w-full cursor-pointer items-center justify-between gap-2 px-3 type-body-sm outline-content-brand data-focus-visible:outline-2 data-focus-visible:-outline-offset-1 group-data-invalid:border-border-critical group-data-open:outline-2 group-data-open:-outline-offset-1",
          size === "sm" ? "h-8" : "h-9",
          fieldBox,
        )}
      >
        <SelectValue className="truncate data-placeholder:text-content-tertiary" />
        <RiArrowDownSLine className="size-4.5 shrink-0 text-content-tertiary transition-transform duration-150 group-data-open:rotate-180" />
      </Button>
      <FieldMessage hint={hint} errorMessage={errorMessage} />
      <Popover offset={6} className={cx("min-w-(--trigger-width)", popoverSurface)}>
        <ListBox items={items} className="max-h-72 overflow-auto p-1 outline-none">
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem({ className, children, ...props }: Omit<ListBoxItemProps, "children" | "className"> & { children: React.ReactNode; className?: string }) {
  return (
    <ListBoxItem
      {...props}
      textValue={props.textValue ?? (typeof children === "string" ? children : undefined)}
      className={cx("group/item justify-between", listRow, className)}
    >
      <span className="truncate group-data-selected/item:font-medium">{children}</span>
      <RiCheckLine className="invisible size-4 shrink-0 text-content-brand group-data-selected/item:visible" />
    </ListBoxItem>
  );
}

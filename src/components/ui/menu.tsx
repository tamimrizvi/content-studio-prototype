"use client";

import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  Popover,
  Separator,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  type PopoverProps,
} from "react-aria-components";
import { cx, listRow, popoverSurface, type IconComponent } from "@/lib/cx";

export { MenuTrigger } from "react-aria-components";

export interface MenuProps<T extends object> extends Omit<AriaMenuProps<T>, "className"> {
  placement?: PopoverProps["placement"];
  className?: string;
}

export function Menu<T extends object>({ placement = "bottom start", className, ...props }: MenuProps<T>) {
  return (
    <Popover offset={6} placement={placement} className={cx("min-w-48", popoverSurface)}>
      <AriaMenu {...props} className={cx("max-h-80 overflow-auto p-1 outline-none", className)} />
    </Popover>
  );
}

export interface MenuItemProps extends Omit<AriaMenuItemProps, "children" | "className"> {
  icon?: IconComponent;
  shortcut?: string;
  tone?: "default" | "critical";
  children: React.ReactNode;
  className?: string;
}

export function MenuItem({ icon: Icon, shortcut, tone = "default", children, className, ...props }: MenuItemProps) {
  return (
    <AriaMenuItem
      {...props}
      textValue={props.textValue ?? (typeof children === "string" ? children : undefined)}
      className={cx(listRow, tone === "critical" && "text-content-critical", className)}
    >
      {Icon ? <Icon className={cx("size-4.5 shrink-0", tone === "critical" ? "text-content-critical" : "text-content-secondary")} /> : null}
      <span className="flex-1 truncate">{children}</span>
      {shortcut ? <kbd className="font-sans type-label-sm text-content-tertiary">{shortcut}</kbd> : null}
    </AriaMenuItem>
  );
}

export function MenuSeparator() {
  return <Separator className="mx-1 my-1 h-px bg-border-primary" />;
}

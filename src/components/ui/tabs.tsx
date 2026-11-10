"use client";

import { createContext, use } from "react";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps as AriaTabsProps,
} from "react-aria-components";
import { cx, focusRing } from "@/lib/cx";

type TabsVariant = "underline" | "pill";
const VariantContext = createContext<TabsVariant>("underline");

export interface TabsProps extends Omit<AriaTabsProps, "className"> {
  variant?: TabsVariant;
  className?: string;
}

export function Tabs({ variant = "underline", className, ...props }: TabsProps) {
  return (
    <VariantContext value={variant}>
      <AriaTabs {...props} className={cx("flex flex-col gap-4", className)} />
    </VariantContext>
  );
}

export function TabList<T extends object>({ className, ...props }: Omit<TabListProps<T>, "className"> & { className?: string }) {
  const variant = use(VariantContext);
  return (
    <AriaTabList
      {...props}
      className={cx(
        "flex",
        variant === "underline" ? "gap-5 border-b border-border-primary" : "gap-1 self-start rounded-4 bg-fill-secondary p-1",
        className,
      )}
    />
  );
}

export function Tab({ className, ...props }: Omit<TabProps, "className"> & { className?: string }) {
  const variant = use(VariantContext);
  return (
    <AriaTab
      {...props}
      className={cx(
        "inline-flex cursor-pointer items-center gap-1.5 type-label-md font-medium text-content-secondary transition-colors duration-150 data-disabled:cursor-not-allowed data-disabled:text-content-secondary-disabled data-hovered:text-content-primary",
        focusRing,
        variant === "underline"
          ? "-mb-px h-9 border-b-2 border-transparent data-selected:border-content-brand data-selected:text-content-brand"
          : "h-7 rounded-3 px-3 data-selected:bg-surface-background data-selected:text-content-primary data-selected:shadow-xs",
        className,
      )}
    />
  );
}

export function TabPanel({ className, ...props }: Omit<TabPanelProps, "className"> & { className?: string }) {
  return <AriaTabPanel {...props} className={cx("type-body-sm text-content-secondary outline-none", className)} />;
}

import { extendTailwindMerge } from "tailwind-merge";

const radius = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const twMerge = extendTailwindMerge({
  extend: {
    theme: { radius },
  },
});

type ClassValue = string | false | null | undefined;

/** Joins class names and resolves Tailwind conflicts (last one wins). */
export function cx(...classes: ClassValue[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}

/** Focus ring shared by every interactive control. */
export const focusRing =
  "outline-none data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-content-brand";

export type Tone = "neutral" | "brand" | "success" | "warning" | "critical";

export type IconComponent = React.ComponentType<{ className?: string }>;

/** Floating surface shared by select lists and menus. */
export const popoverSurface =
  "rounded-5 border border-border-primary bg-surface-background shadow-lg outline-none data-entering:animate-pop-in";

/** Row inside a floating list (select option, menu item). */
export const listRow =
  "flex h-8 cursor-pointer items-center gap-2 rounded-3 px-2.5 type-body-sm text-content-primary outline-none select-none data-focused:bg-fill-primary-hover data-pressed:bg-fill-primary-active data-disabled:cursor-not-allowed data-disabled:text-content-primary-disabled";

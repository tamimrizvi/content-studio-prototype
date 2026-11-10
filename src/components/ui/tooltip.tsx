"use client";

import { Tooltip as AriaTooltip, TooltipTrigger, type TooltipProps as AriaTooltipProps } from "react-aria-components";
import { cx } from "@/lib/cx";

export interface TooltipProps {
  content: React.ReactNode;
  /** A focusable control, e.g. <Button>. */
  children: React.ReactNode;
  placement?: AriaTooltipProps["placement"];
  delay?: number;
  className?: string;
}

export function Tooltip({ content, children, placement = "top", delay = 300, className }: TooltipProps) {
  return (
    <TooltipTrigger delay={delay} closeDelay={0}>
      {children}
      <AriaTooltip
        offset={6}
        placement={placement}
        className={cx(
          "max-w-64 rounded-3 bg-fill-inverse px-2 py-1 type-label-sm font-medium text-content-inverse data-entering:animate-fade-in",
          className,
        )}
      >
        {content}
      </AriaTooltip>
    </TooltipTrigger>
  );
}

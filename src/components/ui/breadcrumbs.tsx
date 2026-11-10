"use client";

import { RiArrowRightSLine } from "@remixicon/react";
import { Breadcrumb, Breadcrumbs as AriaBreadcrumbs, Link } from "react-aria-components";
import { cx, focusRing } from "@/lib/cx";

export interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

/** The last item is the current page. */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <AriaBreadcrumbs className={cx("flex flex-wrap items-center gap-1", className)}>
      {items.map((item, i) => (
        <Breadcrumb key={`${item.label}-${i}`} className="flex items-center gap-1">
          <Link
            href={item.href}
            className={cx(
              "rounded-2 type-label-md font-medium text-content-secondary transition-colors duration-150 data-current:text-content-primary data-hovered:text-content-brand",
              item.href && "cursor-pointer",
              focusRing,
            )}
          >
            {item.label}
          </Link>
          {i < items.length - 1 ? <RiArrowRightSLine className="size-4 text-content-tertiary" /> : null}
        </Breadcrumb>
      ))}
    </AriaBreadcrumbs>
  );
}

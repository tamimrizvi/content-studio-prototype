"use client";

import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Button as AriaButton } from "react-aria-components";
import { cx, focusRing } from "@/lib/cx";
import { Button } from "./button";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  /** Pages shown either side of the current one. */
  siblings?: number;
  className?: string;
}

function pageList(page: number, total: number, siblings: number): (number | "gap")[] {
  const pages = new Set<number>([1, total]);
  for (let p = page - siblings; p <= page + siblings; p++) if (p >= 1 && p <= total) pages.add(p);
  const sorted = [...pages].sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] === 2) out.push(p - 1);
    else if (i > 0 && p - sorted[i - 1] > 2) out.push("gap");
    out.push(p);
  });
  return out;
}

export function Pagination({ page, totalPages, onChange, siblings = 1, className }: PaginationProps) {
  return (
    <nav aria-label="Pagination" className={cx("flex items-center gap-1", className)}>
      <Button variant="ghost" size="sm" iconOnly leadingIcon={RiArrowLeftSLine} aria-label="Previous page" isDisabled={page <= 1} onPress={() => onChange(page - 1)} />
      {pageList(page, totalPages, siblings).map((p, i) =>
        p === "gap" ? (
          <span key={`gap-${i}`} className="grid size-8 place-items-center type-label-md text-content-tertiary">
            …
          </span>
        ) : (
          <AriaButton
            key={p}
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
            onPress={() => onChange(p)}
            className={cx(
              "grid h-8 min-w-8 cursor-pointer place-items-center rounded-3 px-2 type-label-md font-medium transition-colors duration-150",
              p === page
                ? "bg-fill-brand-secondary text-content-brand"
                : "text-content-secondary data-hovered:bg-fill-primary-hover data-hovered:text-content-primary data-pressed:bg-fill-primary-active",
              focusRing,
            )}
          >
            {p}
          </AriaButton>
        ),
      )}
      <Button variant="ghost" size="sm" iconOnly leadingIcon={RiArrowRightSLine} aria-label="Next page" isDisabled={page >= totalPages} onPress={() => onChange(page + 1)} />
    </nav>
  );
}

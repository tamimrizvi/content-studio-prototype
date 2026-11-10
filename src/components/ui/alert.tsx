"use client";

import { RiAlertLine, RiCheckboxCircleLine, RiCloseLine, RiErrorWarningLine, RiInformationLine } from "@remixicon/react";
import { Button } from "react-aria-components";
import { cx, focusRing, type Tone } from "@/lib/cx";

export interface AlertProps {
  tone?: Tone;
  title: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const tones: Record<Tone, { box: string; icon: string; Icon: typeof RiAlertLine }> = {
  neutral: { box: "border-border-primary bg-surface-primary", icon: "text-content-secondary", Icon: RiInformationLine },
  brand: { box: "border-border-brand bg-surface-brand", icon: "text-content-brand", Icon: RiInformationLine },
  success: { box: "border-border-success bg-surface-success", icon: "text-content-success", Icon: RiCheckboxCircleLine },
  warning: { box: "border-border-warning bg-surface-warning", icon: "text-content-warning", Icon: RiAlertLine },
  critical: { box: "border-border-critical bg-surface-critical", icon: "text-content-critical", Icon: RiErrorWarningLine },
};

export function Alert({ tone = "brand", title, children, action, onDismiss, className }: AlertProps) {
  const { box, icon, Icon } = tones[tone];
  return (
    <div role={tone === "critical" ? "alert" : "status"} className={cx("flex items-start gap-3 rounded-5 border p-4", box, className)}>
      <Icon className={cx("mt-px size-5 shrink-0", icon)} />
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="type-label-md font-semibold text-content-primary">{title}</p>
        {children ? <div className="type-body-sm text-content-secondary">{children}</div> : null}
        {action ? <div className="mt-2 flex gap-2">{action}</div> : null}
      </div>
      {onDismiss ? (
        <Button
          aria-label="Dismiss"
          onPress={onDismiss}
          className={cx("-m-1 grid size-7 shrink-0 cursor-pointer place-items-center rounded-3 text-content-secondary data-hovered:text-content-primary", focusRing)}
        >
          <RiCloseLine className="size-4.5" />
        </Button>
      ) : null}
    </div>
  );
}

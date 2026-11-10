"use client";

import { RiCloseLine } from "@remixicon/react";
import { Dialog, Heading, Modal as AriaModal, ModalOverlay, type ModalOverlayProps } from "react-aria-components";
import { cx } from "@/lib/cx";
import { Button } from "./button";

export { DialogTrigger as ModalTrigger } from "react-aria-components";

const widths = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-2xl" } as const;

export interface ModalProps extends Omit<ModalOverlayProps, "children" | "className"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer actions. Receives `close` to dismiss the dialog. */
  footer?: (close: () => void) => React.ReactNode;
  size?: keyof typeof widths;
  role?: "dialog" | "alertdialog";
}

export function Modal({ title, description, children, footer, size = "md", role = "dialog", isDismissable = true, ...props }: ModalProps) {
  return (
    <ModalOverlay
      {...props}
      isDismissable={isDismissable}
      className="fixed inset-0 z-50 flex items-center justify-center bg-content-fixed-dark/60 p-4 data-entering:animate-fade-in"
    >
      <AriaModal
        className={cx("w-full rounded-6 border border-border-primary bg-surface-background shadow-xl data-entering:animate-pop-in", widths[size])}
      >
        <Dialog role={role} className="flex max-h-[85vh] flex-col outline-none">
          {({ close }) => (
            <>
              <header className="flex items-start justify-between gap-4 px-5 pt-5">
                <div className="flex flex-col gap-1">
                  <Heading slot="title" className="type-heading-xs font-semibold text-content-primary">
                    {title}
                  </Heading>
                  {description ? <p className="type-body-sm text-content-secondary">{description}</p> : null}
                </div>
                {isDismissable ? (
                  <Button variant="ghost" size="sm" iconOnly leadingIcon={RiCloseLine} aria-label="Close" onPress={close} className="-mt-1 -mr-1" />
                ) : null}
              </header>
              {children ? <div className="overflow-auto px-5 py-4 type-body-sm text-content-secondary">{children}</div> : <div className="h-4" />}
              {footer ? <footer className="flex justify-end gap-2 border-t border-border-primary px-5 py-3">{footer(close)}</footer> : null}
            </>
          )}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}

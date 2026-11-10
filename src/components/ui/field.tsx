"use client";

import type { ReactNode } from "react";
import { FieldError, Label, Text } from "react-aria-components";

export const fieldLabel = "type-label-md font-medium text-content-primary";

/** Bordered box around an input, textarea or select trigger. */
export const fieldBox =
  "rounded-4 border border-border-primary bg-surface-background text-content-primary transition-colors duration-150 data-hovered:border-border-secondary data-invalid:border-border-critical data-disabled:cursor-not-allowed data-disabled:bg-fill-primary-disabled data-disabled:text-content-primary-disabled";

export const fieldFocus = "outline-content-brand data-focus-within:outline-2 data-focus-within:-outline-offset-1";

export interface FieldProps {
  label?: ReactNode;
  hint?: ReactNode;
  errorMessage?: ReactNode;
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <Label className={fieldLabel}>{children}</Label>;
}

/** Hint below a field; replaced by the error message while invalid. */
export function FieldMessage({ hint, errorMessage }: Pick<FieldProps, "hint" | "errorMessage">) {
  return (
    <>
      {hint ? (
        <Text slot="description" className="type-body-xs text-content-secondary group-data-invalid:hidden">
          {hint}
        </Text>
      ) : null}
      <FieldError className="type-body-xs text-content-critical">{errorMessage}</FieldError>
    </>
  );
}

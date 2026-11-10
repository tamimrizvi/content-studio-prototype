"use client";

import { TextArea, TextField, type TextFieldProps } from "react-aria-components";
import { cx } from "@/lib/cx";
import { fieldBox, FieldLabel, FieldMessage, type FieldProps } from "./field";

export interface TextareaProps extends Omit<TextFieldProps, "children" | "className">, FieldProps {
  placeholder?: string;
  rows?: number;
  className?: string;
}

export function Textarea({ label, hint, errorMessage, placeholder, rows = 4, className, ...props }: TextareaProps) {
  return (
    <TextField {...props} className={cx("group flex flex-col gap-1.5", className)}>
      {label ? <FieldLabel>{label}</FieldLabel> : null}
      <TextArea
        rows={rows}
        placeholder={placeholder}
        className={cx(
          "w-full resize-y px-3 py-2 type-body-sm outline-content-brand placeholder:text-content-tertiary data-focused:outline-2 data-focused:-outline-offset-1",
          fieldBox,
        )}
      />
      <FieldMessage hint={hint} errorMessage={errorMessage} />
    </TextField>
  );
}

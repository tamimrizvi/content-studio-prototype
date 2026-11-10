"use client";

import { Group, Input as AriaInput, TextField, type TextFieldProps } from "react-aria-components";
import { cx, type IconComponent } from "@/lib/cx";
import { fieldBox, fieldFocus, FieldLabel, FieldMessage, type FieldProps } from "./field";

export interface InputProps extends Omit<TextFieldProps, "children" | "className">, FieldProps {
  placeholder?: string;
  leadingIcon?: IconComponent;
  size?: "sm" | "md";
  className?: string;
}

export function Input({ label, hint, errorMessage, placeholder, leadingIcon: Leading, size = "md", className, ...props }: InputProps) {
  return (
    <TextField {...props} className={cx("group flex flex-col gap-1.5", className)}>
      {label ? <FieldLabel>{label}</FieldLabel> : null}
      <Group className={cx("flex items-center gap-2 px-3", size === "sm" ? "h-8" : "h-9", fieldBox, fieldFocus)}>
        {Leading ? <Leading className="size-4.5 shrink-0 text-content-tertiary" /> : null}
        <AriaInput
          placeholder={placeholder}
          className="h-full min-w-0 flex-1 bg-transparent type-body-sm outline-none placeholder:text-content-tertiary data-disabled:cursor-not-allowed"
        />
      </Group>
      <FieldMessage hint={hint} errorMessage={errorMessage} />
    </TextField>
  );
}

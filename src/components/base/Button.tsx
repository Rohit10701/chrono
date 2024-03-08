"use client";
import { cn } from "@/libs/utils";
import buttonVariant from "@/variants/base/Button";
import { VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size">,
    VariantProps<typeof buttonVariant> {
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  children = "Click",
  variant,
  size,
  className,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(buttonVariant({ variant, size }), className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

import { cn } from "@/libs/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
const pillVariant = cva(
  "h-10 px-3 py-3 m-1 inline-flex items-center justify-center rounded-full text-sm font-medium ",
  {
    variants: {
      variant: {
        dark: "bg-black text-white ",
        white: "bg-white text-black",
      },
      size: {
        sm: "h-5 min-w-6",
        lg: "h-5 min-w-8",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "lg",
    },
  }
);
interface PillProps extends VariantProps<typeof pillVariant> {
  children?: React.ReactNode;
  className?: string;
}
const Pill = ({ children, className, variant, size }: PillProps) => {
  return (
    <div className={cn(pillVariant({ variant, size }), className)}>
      {children}
    </div>
  );
};

export default Pill;

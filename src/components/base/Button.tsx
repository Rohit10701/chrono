import { cn } from "@/libs/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariant = cva(
  "h-[40px] pl-3 inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none ",
  {
    variants: {
      variant: {
        dark: "bg-black text-white border-2 border-white border-input hover:bg-accent hover:text-accent-foreground",
        white:
          "bg-white text-black  border-2 border-black bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        sm: "h-11 px-4 rounded-md w-56",
        lg: "h-11 px-4 rounded-md w-72",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "sm",
    },
  }
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size">,
    VariantProps<typeof buttonVariant> {
  children?: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = "Click", variant, size, className, ...buttonProps }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariant({ variant, size }), className)}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;

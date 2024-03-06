import { cva } from "class-variance-authority";

export const inputBoxVariant = cva(
  "h-[40px] rounded-sm pl-3 inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none ",
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
      size: "lg",
    },
  }
);

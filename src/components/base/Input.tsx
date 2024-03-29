"use client";
import React, {
  ChangeEvent,
  HTMLProps,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { useDebounce } from "@/hooks/use-debounce";
import KeyboardKey from "../wrappers/KeyboardKey";

const inputBoxVariant = cva(
  "h-[40px] pl-3 min-w-24 inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none ",
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
interface InputProps<T>
  extends Omit<HTMLProps<HTMLInputElement>, "size">,
    VariantProps<typeof inputBoxVariant> {
  inputText: T;
  setInputText: (value: T) => void;
  delay?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps<string>>(
  (
    {
      inputText,
      setInputText,
      className,
      variant,
      size,
      delay = 300,
      ...inputProps
    },
    ref
  ) => {
    const [debouncedInput, setDebouncedInput] = useState("");

    const debouncedText = useDebounce<string>({
      value: debouncedInput,
      delay: delay,
    });
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      const currentText = e.target.value;
      setDebouncedInput(currentText);
    };
    useEffect(() => {
      setInputText(debouncedText);
    }, [setInputText, debouncedText]);

    const handleReset = () => {
      setDebouncedInput("");
    };
    return (
      <>
        <KeyboardKey onClick={handleReset} keyboardButton="Enter">
          <input
            ref={ref}
            onChange={handleTextChange}
            className={cn(inputBoxVariant({ variant, size }), className)}
            value={debouncedInput}
            {...inputProps}
          />
        </KeyboardKey>
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;

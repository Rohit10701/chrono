"use client";
import React, { ChangeEvent, HTMLProps, forwardRef, useEffect, useState } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { useDebounce } from "@/hooks/use-debounce";
import { inputBoxVariant } from "@/variants/base/Input";


interface Props<T>
  extends Omit<HTMLProps<HTMLInputElement>, "size">,
    VariantProps<typeof inputBoxVariant> {
  inputText: T;
  setInputText: (value: T) => void;
  
}

const Input = ({ inputText, setInputText, className, variant, size, ...inputProps }: Props<string>) => {
  const [debouncedInput, setDebouncedInput] = useState("");

  const debouncedText = useDebounce<string>({ value: debouncedInput });
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setDebouncedInput(currentText);
  };
  useEffect(() => {
    setInputText(debouncedText);
  }, [setInputText, debouncedText]);
  return (
    <>
      <input
        onChange={handleTextChange}
        className={cn(inputBoxVariant({ variant, size }), className)}
        {...inputProps}
      />
    </>
  );
};

export default Input;

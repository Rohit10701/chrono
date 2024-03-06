"use client";
import Input from "@/components/base/Input";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [inputText, setInputText] = useState<string>("");
  const setterInputText = (value: string) => {
    setInputText(value);
  };
  return (
    <div>
      <Input
        inputText={inputText}
        setInputText={setterInputText}
        placeholder="placeholder..."
      />
    </div>
  );
};

export default Page;

"use client";
import React, { useEffect, useState } from "react";
import Input from "../base/Input";
import Pill from "../base/Pill";
import KeyboardKey from "../wrappers/KeyboardKey";

type Props = {};

const PillInput = (props: Props) => {
  const [inputText, setInputText] = useState<string>("");
  const [texts, setTexts] = useState<string[]>([]);

  const setterInputText = (value: string) => {
    setInputText(value);
  };

  const handleSubmit = () => {
    if (inputText !== "") {
      setTexts((prevTexts) => [...prevTexts, inputText]);
      setInputText("");
    }
  };

  const onBackSpace = () => {
    if (texts.length > 0 && inputText == "" ) {
      texts.pop();
      setTexts(texts);
  }
  };
  return (
    <div className="border-2 border-black bg-black flex w-96 rounded-md flex-wrap">
      <div className="bg-black flex w-auto flex-wrap">
        {texts.map((text, index) => (
          <Pill className="bg-zinc-800" key={index}>
            {text}
          </Pill>
        ))}
        <div className="min-w-24 w-auto">
          <KeyboardKey keyboardButton="Backspcae" onClick={onBackSpace}>
            <KeyboardKey keyboardButton="Enter" onClick={handleSubmit}>
              <Input
                inputText={inputText}
                setInputText={setterInputText}
                placeholder="placeholder..."
                className="border-none rounded-none w-full"
                delay={10}
              />
            </KeyboardKey>
          </KeyboardKey>
        </div>
      </div>
    </div>
  );
};

export default PillInput;

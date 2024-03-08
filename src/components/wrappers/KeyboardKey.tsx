"use client";
import React, { useEffect } from "react";

type Props = {
  onClick: () => void;
  keyboardButton: string;
  children?: React.ReactNode;
};

const KeyboardKey: React.FC<Props> = ({
  onClick,
  keyboardButton,
  children = "Click",
}) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === keyboardButton) {
        onClick();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClick, keyboardButton]);

  return <div>{children}</div>;
};

export default KeyboardKey;

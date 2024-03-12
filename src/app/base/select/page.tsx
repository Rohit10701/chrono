"use client";
import React, { useState } from "react";
import {
  SelectValue,
  SelectTrigger,
  Select,
} from "@/components/base/Select";

export default function Page() {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleFruitSelect = (value: string) => {
    console.log(value)
    setSelectedFruit(value);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Select
        options={["apple", "banana", "blueberry", "grapes", "pineapple"]}
        onSelect={handleFruitSelect}
        selectedValue={selectedFruit}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </Select>
    </div>
  );
}

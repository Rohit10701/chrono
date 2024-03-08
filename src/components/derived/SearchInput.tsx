"use client"
import React, { useEffect, useState } from "react";
import Input from "../base/Input";

interface SearchInputProps {
  searchFunction: (searchTerm: string) => Promise<any>;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchFunction }) => {
  const [inputText, setInputText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const setterInputText = (value: string) => {
    setInputText(value);
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await searchFunction(inputText);
        console.log(response?.newContainer);
        setSearchResults(response?.newContainer || []);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };

    if (inputText !== "") {
      fetchSearchData();
    }
  }, [searchFunction, inputText]);

  return (
    <div className="relative">
      <Input
        inputText={inputText}
        setInputText={setterInputText}
        placeholder="placeholder..."
        className="w-64"
      />
      {inputText != "" && searchResults.length > 0 && (
        <div className="absolute top-full p-2 rounded shadow-md w-64 h-[200px]  text-white bg-black overflow-y-auto">
          {searchResults.map((result, index) => (
            <div key={index}>{result.text}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

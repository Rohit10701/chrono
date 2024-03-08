import React, { useState } from 'react'
import Input from '../base/Input'

interface SearchInputProps {
    searchFunction : (searchTerm : string) => any[]
}

const SearchInput = ({searchFunction}: SearchInputProps) => {
    const [inputText, setInputText] = useState<string>("");

    const setterInputText = (value: string) => {
      setInputText(value);
    };

    
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Input
          inputText={inputText}
          setInputText={setterInputText}
          placeholder="placeholder..."
        />
      </div>
    );
}

export default SearchInput
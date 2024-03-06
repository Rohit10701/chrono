import { useEffect, useState } from "react";

interface debounceProps<T> {
  value : T,
  delay? : number,
}

export function useDebounce<T>({value, delay = 300} : debounceProps<T>): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }
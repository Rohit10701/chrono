import { useRef } from "react";

const useThrottle = () => {
  const throttleSeed = useRef<number | null>(null);

  const throttleFunction = useRef<(func: () => void, delay?: number) => void>((func, delay = 200) => {
    if (!throttleSeed.current) {
      func();
      throttleSeed.current = window.setTimeout(() => {
        throttleSeed.current = null;
      }, delay);
    }
  });

  return throttleFunction.current;
};

export default useThrottle;

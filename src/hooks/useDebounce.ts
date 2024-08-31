import { useRef, useCallback } from 'react';

type Callback<T extends unknown[]> = (...args: T) => void;

const useDebounce = <T extends unknown[]>(callback: Callback<T>, delay: number): Callback<T> => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounceCallback = useCallback(
    (...args: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debounceCallback;
};

export default useDebounce;

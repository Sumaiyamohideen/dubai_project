/* src/hooks/useToggle.js */
import { useState, useCallback } from 'react';

/**
 * Custom hook to toggle binary state (e.g. modal open/close, hamburger menu)
 * @param {boolean} initialValue - Initial state
 * @returns {[boolean, () => void, (val: boolean) => void]} - State, toggle function, setter function
 */
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setVal = useCallback((val) => {
    setValue(val);
  }, []);

  return [value, toggle, setVal];
}

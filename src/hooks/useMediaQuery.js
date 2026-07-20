/* src/hooks/useMediaQuery.js */
import { useState, useEffect } from 'react';

/**
 * Custom hook to detect viewport match of a media query string.
 * Initialises from window.matchMedia on mount to avoid a flash of wrong state.
 *
 * @param {string} query - Media query like '(max-width: 1023px)'
 * @returns {boolean} True if the query currently matches, false otherwise.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

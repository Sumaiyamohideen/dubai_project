/* src/components/common/ScrollToTop/ScrollToTop.jsx */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable ScrollToTop component for React Router.
 * Automatically scrolls window to (0, 0) whenever the route pathname changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

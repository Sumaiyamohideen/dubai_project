/* src/components/layout/MainLayout/MainLayout.jsx
 * Page-level layout orchestrator.
 * Composes: Navbar → <main> → Footer (Footer pending implementation).
 */
import { Outlet } from 'react-router-dom';
import Navbar      from '../Navbar';

import styles from './MainLayout.module.css';

export default function MainLayout() {
  return (
    <div className={styles.layout} data-testid="main-layout">
      <Navbar />

      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Footer — pending implementation */}
      <footer className={styles.footerPlaceholder} aria-label="Site footer">
        {/* Footer component will replace this element */}
      </footer>
    </div>
  );
}

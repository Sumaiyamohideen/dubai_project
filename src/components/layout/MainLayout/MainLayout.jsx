/* src/components/layout/MainLayout/MainLayout.jsx
 * Page-level layout orchestrator.
 * Composes: Navbar → <main> → Footer.
 */
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FloatingContact from '../FloatingContact';

import styles from './MainLayout.module.css';

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.layout} data-testid="main-layout">
      <Navbar />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
      {isHomePage && <FloatingContact />}
    </div>
  );
}


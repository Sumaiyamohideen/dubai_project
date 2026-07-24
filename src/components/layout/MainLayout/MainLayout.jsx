/* src/components/layout/MainLayout/MainLayout.jsx
 * Page-level layout orchestrator.
 * Composes: Navbar → <main> → Footer + QuoteModal.
 */
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FloatingContact from '../FloatingContact';
import QuoteModal from '../../modals/QuoteModal';
import { QuoteModalProvider } from '../../../context/QuoteModalContext';

import styles from './MainLayout.module.css';

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <QuoteModalProvider>
      <div className={styles.layout} data-testid="main-layout">
        <Navbar />

        <main className={styles.main}>
          <Outlet />
        </main>

        <Footer />
        {isHomePage && <FloatingContact />}
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}


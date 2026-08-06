/* src/components/layout/MainLayout/MainLayout.jsx
 * Page-level layout orchestrator.
 * Composes: Navbar → <main> → Footer + QuoteModal + FloatingContact.
 */
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FloatingContact from '../FloatingContact';
import QuoteModal from '../../modals/QuoteModal';
import { QuoteModalProvider } from '../../../context/QuoteModalContext';

import styles from './MainLayout.module.css';

export default function MainLayout() {
  return (
    <QuoteModalProvider>
      <div className={styles.layout} data-testid="main-layout">
        <Navbar />

        <main className={styles.main}>
          <Outlet />
        </main>

        <Footer />
        <FloatingContact />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}



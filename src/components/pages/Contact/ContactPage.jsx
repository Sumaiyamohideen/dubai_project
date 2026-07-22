/* src/components/pages/Contact/ContactPage.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import CTA from '@/components/pages/Home/CTA';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfoCards from './ContactInfoCards';
import ContactMap from './ContactMap';
import styles from './ContactPage.module.css';

/**
 * ContactPage Orchestrator Component.
 * Composes all Contact page sections in Figma Node 731:5039 order:
 *   1. ContactHero
 *   2. Two-column section (ContactForm left + ContactInfoCards right)
 *   3. ContactMap
 *   4. CTA (shared, variant="about")
 *
 * @component ContactPage
 */
const ContactPage = memo(() => {
  return (
    <div data-testid="contact-page">
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Two-column: Form (left) + Info Cards (right) */}
      <section className={styles.twoColSection} aria-label="Contact form and information">
        <Container>
          <div className={styles.twoColGrid}>
            <div className={styles.formCol}>
              <ContactForm />
            </div>
            <div className={styles.infoCol}>
              <ContactInfoCards />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Map */}
      <ContactMap />

      {/* 4. CTA — same shared component as About and Services */}
      <CTA variant="about" />
    </div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;

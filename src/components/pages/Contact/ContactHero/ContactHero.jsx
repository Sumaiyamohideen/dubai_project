/* src/components/pages/Contact/ContactHero/ContactHero.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import { CONTACT_HERO_DATA } from '../constants';
import styles from './ContactHero.module.css';

/**
 * ContactHero — hero section for the Contact page.
 * Matches Figma Node 731:5040 (description) and 731:5041 (heading).
 *
 * @component ContactHero
 */
const ContactHero = memo(() => {
  return (
    <section className={styles.heroSection} aria-labelledby="contact-hero-title">
      <Container>
        <div className={styles.inner}>
          <Typography
            variant="h1"
            as="h1"
            id="contact-hero-title"
            className={styles.title}
          >
            {CONTACT_HERO_DATA.title}
          </Typography>
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.description}
          >
            {CONTACT_HERO_DATA.description}
          </Typography>
        </div>
      </Container>
    </section>
  );
});

ContactHero.displayName = 'ContactHero';

export default ContactHero;

/* src/components/pages/About/AboutHero/AboutHero.jsx */

import { memo } from 'react';
import Container from '../../../ui/Container';
import Typography from '../../../ui/Typography';
import { ABOUT_HERO_DATA } from '../constants';
import styles from './AboutHero.module.css';

/**
 * AboutHero component rendering the primary headline and introductory description on the About page.
 *
 * @component AboutHero
 */
const AboutHero = memo(() => {
  return (
    <section className={styles.heroSection} aria-labelledby="about-hero-title">
      <Container>
        <div className={styles.inner}>
          <Typography
            variant="h1"
            as="h1"
            id="about-hero-title"
            className={styles.title}
          >
            {ABOUT_HERO_DATA.title}
          </Typography>
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.description}
          >
            {ABOUT_HERO_DATA.description}
          </Typography>
        </div>
      </Container>
    </section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero;

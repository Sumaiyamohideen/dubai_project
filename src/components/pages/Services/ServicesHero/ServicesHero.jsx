/* src/components/pages/Services/ServicesHero/ServicesHero.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import { SERVICES_HERO_DATA } from '../constants';
import styles from './ServicesHero.module.css';

/**
 * ServicesHero component rendering header title and description for the Services page.
 *
 * @component ServicesHero
 */
const ServicesHero = memo(() => {
  return (
    <section className={styles.heroSection} aria-labelledby="services-hero-title">
      <Container>
        <div className={styles.inner}>
          <Typography
            variant="h1"
            as="h1"
            id="services-hero-title"
            className={styles.title}
          >
            {SERVICES_HERO_DATA.title}
          </Typography>
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.description}
          >
            {SERVICES_HERO_DATA.description}
          </Typography>
        </div>
      </Container>
    </section>
  );
});

ServicesHero.displayName = 'ServicesHero';

export default ServicesHero;

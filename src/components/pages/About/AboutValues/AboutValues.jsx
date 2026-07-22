/* src/components/pages/About/AboutValues/AboutValues.jsx */

import { memo } from 'react';
import Container from '../../../ui/Container';
import Typography from '../../../ui/Typography';
import ValueCard from './ValueCard';
import { ABOUT_VALUES_DATA } from '../constants';
import styles from './AboutValues.module.css';

/**
 * AboutValues component rendering 6-item core values grid.
 *
 * @component AboutValues
 */
const AboutValues = memo(() => {
  const { title, subtitle, items } = ABOUT_VALUES_DATA;

  return (
    <section className={styles.valuesSection} aria-labelledby="about-values-title">
      <Container>
        <div className={styles.headerArea}>
          <Typography
            variant="h2"
            as="h2"
            id="about-values-title"
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.subtitle}
          >
            {subtitle}
          </Typography>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <ValueCard
              key={item.id}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
});

AboutValues.displayName = 'AboutValues';

export default AboutValues;

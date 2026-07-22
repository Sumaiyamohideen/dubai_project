/* src/components/sections/WhyChoose/WhyChoose.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import WhyChooseCard from './WhyChooseCard';
import { WHY_CHOOSE_HEADER, WHY_CHOOSE_FEATURES } from './constants';
import styles from './WhyChoose.module.css';

/**
 * WhyChoose section component rendering "Why Choose Chalachal" section.
 * Features a 3-column desktop / 2-column tablet / 1-column mobile CSS Grid of WhyChooseCards.
 *
 * @component WhyChoose
 */
const WhyChoose = memo(() => {
  return (
    <section className={styles.whyChooseSection} id="why-choose" aria-label="Why Choose Chalachal">
      <Container>
        {/* Section Header */}
        <div className={styles.headerArea}>
          <Typography variant="h2" className={styles.title}>
            {WHY_CHOOSE_HEADER.title}
          </Typography>
          <Typography variant="bodyLarge" className={styles.description}>
            {WHY_CHOOSE_HEADER.description}
          </Typography>
        </div>

        {/* 3-Column / Responsive Grid of Feature Cards */}
        <div className={styles.gridContainer}>
          {WHY_CHOOSE_FEATURES.map((feature) => (
            <WhyChooseCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              iconName={feature.iconName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
});

WhyChoose.displayName = 'WhyChoose';

export default WhyChoose;

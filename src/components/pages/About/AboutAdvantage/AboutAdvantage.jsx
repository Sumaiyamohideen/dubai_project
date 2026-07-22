/* src/components/pages/About/AboutAdvantage/AboutAdvantage.jsx */

import { memo } from 'react';
import Container from '../../../ui/Container';
import Typography from '../../../ui/Typography';
import Icon from '../../../ui/Icon';
import { images } from '../../../../assets/images';
import { ABOUT_ADVANTAGE_DATA } from '../constants';
import styles from './AboutAdvantage.module.css';

/**
 * AboutAdvantage component rendering 4-item checklist feature section with framed image card.
 *
 * @component AboutAdvantage
 */
const AboutAdvantage = memo(() => {
  const { title, subtitle, items, imageAlt } = ABOUT_ADVANTAGE_DATA;

  return (
    <section className={styles.section} aria-labelledby="about-advantage-title">
      <Container>
        <div className={styles.grid}>
          {/* Left Content Column */}
          <div className={styles.contentColumn}>
            <Typography
              variant="h2"
              as="h2"
              id="about-advantage-title"
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

            <ul className={styles.checklist}>
              {items.map((item) => (
                <li key={item.id} className={styles.checkItem}>
                  <div className={styles.checkBadge}>
                    <Icon name={item.iconName} size={16} color="#ffffff" aria-hidden="true" />
                  </div>
                  <span className={styles.itemText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Card */}
          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img
                src={images.about.advantage}
                alt={imageAlt}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});

AboutAdvantage.displayName = 'AboutAdvantage';

export default AboutAdvantage;

/* src/components/sections/About/About.jsx */

import { memo } from 'react';
import Container from '../../ui/Container';
import Typography from '../../ui/Typography';
import { images } from '../../../assets/images';
import { ABOUT_DATA } from './constants';
import styles from './About.module.css';

/**
 * About section component representing "Our Story" layout matching Figma exact specifications.
 * Rendered using semantic HTML, CSS Modules, Container, and Typography components.
 *
 * @component About
 */
const About = memo(() => {
  return (
    <section className={styles.aboutSection} id="about" aria-label="About Us">
      <Container>
        <div className={styles.gridContainer}>
          {/* Left Column: Image Card */}
          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img
                src={images.about.story}
                alt={ABOUT_DATA.imageAlt}
                className={styles.image}
                loading="lazy"
                width={703}
                height={718}
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className={styles.contentColumn}>
            <span className={styles.badge}>{ABOUT_DATA.badge}</span>
            <Typography variant="h2" className={styles.title}>
              {ABOUT_DATA.title}
            </Typography>
            <Typography variant="bodyLarge" className={styles.description}>
              {ABOUT_DATA.description}
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
});

About.displayName = 'About';

export default About;

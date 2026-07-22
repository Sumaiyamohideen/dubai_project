/* src/components/pages/About/AboutStory/AboutStory.jsx */

import { memo } from 'react';
import Container from '../../../ui/Container';
import Typography from '../../../ui/Typography';
import { images } from '../../../../assets/images';
import { ABOUT_STORY_DATA } from '../constants';
import styles from './AboutStory.module.css';

/**
 * AboutStory section rendering the brand narrative with framed story image.
 *
 * @component AboutStory
 */
const AboutStory = memo(() => {
  return (
    <section className={styles.storySection} aria-labelledby="about-story-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img
                src={images.about.story}
                alt={ABOUT_STORY_DATA.imageAlt}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={styles.contentColumn}>
            <Typography
              variant="h2"
              as="h2"
              id="about-story-title"
              className={styles.title}
            >
              {ABOUT_STORY_DATA.title}
            </Typography>
            <Typography
              variant="bodyLarge"
              as="p"
              className={styles.description}
            >
              {ABOUT_STORY_DATA.description}
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
});

AboutStory.displayName = 'AboutStory';

export default AboutStory;

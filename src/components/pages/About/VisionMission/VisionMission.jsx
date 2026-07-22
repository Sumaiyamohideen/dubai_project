/* src/components/pages/About/VisionMission/VisionMission.jsx */

import { memo } from 'react';
import Container from '../../../ui/Container';
import Typography from '../../../ui/Typography';
import { VISION_MISSION_DATA } from '../constants';
import styles from './VisionMission.module.css';

/**
 * VisionMission component rendering side-by-side Vision and Mission cards.
 *
 * @component VisionMission
 */
const VisionMission = memo(() => {
  const { vision, mission } = VISION_MISSION_DATA;

  return (
    <section className={styles.section} aria-label="Our Vision and Mission">
      <Container>
        <div className={styles.grid}>
          {/* Vision Card */}
          <article className={styles.visionCard}>
            <Typography variant="h3" as="h2" className={styles.title}>
              {vision.title}
            </Typography>
            <Typography variant="bodyLarge" as="p" className={styles.description}>
              {vision.description}
            </Typography>
          </article>

          {/* Mission Card */}
          <article className={styles.missionCard}>
            <Typography variant="h3" as="h2" className={styles.title}>
              {mission.title}
            </Typography>
            <Typography variant="bodyLarge" as="p" className={styles.description}>
              {mission.description}
            </Typography>
          </article>
        </div>
      </Container>
    </section>
  );
});

VisionMission.displayName = 'VisionMission';

export default VisionMission;

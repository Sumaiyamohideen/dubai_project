/* src/components/pages/Projects/ProjectsHero/ProjectsHero.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import { PROJECTS_HERO_DATA } from '../constants';
import styles from './ProjectsHero.module.css';

/**
 * ProjectsHero component rendering header title and description for the Projects page directly matching Figma.
 *
 * @component ProjectsHero
 */
const ProjectsHero = memo(() => {
  return (
    <section className={styles.heroSection} aria-labelledby="projects-hero-title">
      <Container>
        <div className={styles.inner}>
          <Typography
            variant="h1"
            as="h1"
            id="projects-hero-title"
            className={styles.title}
          >
            {PROJECTS_HERO_DATA.title}
          </Typography>
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.description}
          >
            {PROJECTS_HERO_DATA.description}
          </Typography>
        </div>
      </Container>
    </section>
  );
});

ProjectsHero.displayName = 'ProjectsHero';

export default ProjectsHero;

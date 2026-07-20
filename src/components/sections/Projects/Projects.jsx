/* src/components/sections/Projects/Projects.jsx */

import { memo } from 'react';
import Container from '../../ui/Container';
import Typography from '../../ui/Typography';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import ProjectCard from './ProjectCard';
import { PROJECTS_HEADER, PROJECTS_LIST } from './constants';
import styles from './Projects.module.css';

/**
 * Projects section component rendering "Projects That Speak for Themselves" section.
 * Features a 3-column desktop / 2-column tablet / 1-column mobile CSS Grid of ProjectCards.
 *
 * @component Projects
 */
const Projects = memo(() => {
  return (
    <section className={styles.projectsSection} id="projects" aria-label="Our Projects">
      <Container>
        {/* Section Header */}
        <div className={styles.headerArea}>
          <Typography variant="h2" className={styles.title}>
            {PROJECTS_HEADER.title}
          </Typography>
          <Typography variant="bodyLarge" className={styles.description}>
            {PROJECTS_HEADER.description}
          </Typography>
        </div>

        {/* 3-Column / Responsive Grid of Project Cards */}
        <div className={styles.gridContainer}>
          {PROJECTS_LIST.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              location={project.location}
              description={project.description}
              imageKey={project.imageKey}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaArea}>
          <Button
            variant="primary"
            className={styles.ctaButton}
            icon={
              <span className={styles.iconBadge}>
                <Icon name="arrow-up-right" size={24} className={styles.badgeIcon} />
              </span>
            }
          >
            {PROJECTS_HEADER.ctaButtonText}
          </Button>
        </div>
      </Container>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;

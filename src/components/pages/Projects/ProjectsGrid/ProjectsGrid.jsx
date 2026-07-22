/* src/components/pages/Projects/ProjectsGrid/ProjectsGrid.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import ProjectCard from '../ProjectCard';
import { PROJECTS_GRID_DATA } from '../constants';
import styles from './ProjectsGrid.module.css';

/**
 * ProjectsGrid component rendering a responsive 3-column / 2-column / 1-column grid of ProjectCards.
 *
 * @component ProjectsGrid
 * @param {Object} props
 * @param {Array<Object>} [props.projects=PROJECTS_GRID_DATA] - Filtered list of project objects to display
 */
const ProjectsGrid = memo(({ projects = PROJECTS_GRID_DATA }) => {
  return (
    <section className={styles.gridSection} aria-label="Completed Projects Gallery">
      <Container>
        {projects.length > 0 ? (
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                categoryLabel={project.categoryLabel}
                location={project.location}
                description={project.description}
                imageKey={project.imageKey}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Typography variant="bodyLarge" as="p">
              No projects found matching the selected category.
            </Typography>
          </div>
        )}
      </Container>
    </section>
  );
});

ProjectsGrid.displayName = 'ProjectsGrid';

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      categoryLabel: PropTypes.string.isRequired,
      location: PropTypes.string,
      description: PropTypes.string.isRequired,
      imageKey: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectsGrid;

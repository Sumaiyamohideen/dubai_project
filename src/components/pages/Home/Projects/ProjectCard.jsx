/* src/components/sections/Projects/ProjectCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@/components/ui/Typography';
import { images } from '@/assets/images';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard component for rendering individual project items within the Projects grid.
 *
 * @component ProjectCard
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.category - Category badge label
 * @param {string} props.location - Project location (e.g. Dubai, Sharjah)
 * @param {string} props.description - Brief project summary
 * @param {string} props.imageKey - Key mapping to images.projects asset
 */
const ProjectCard = memo(({ title, category, location, description, imageKey }) => {
  const imageSrc = images.projects?.[imageKey];

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.metaRow}>
          <span className={styles.badge}>{category}</span>
          <span className={styles.location}>{location}</span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`${title} - ${category}`}
            className={styles.image}
            loading="lazy"
            width={462}
            height={308}
          />
        )}
      </div>

      <Typography variant="body" className={styles.description}>
        {description}
      </Typography>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageKey: PropTypes.string.isRequired,
};

export default ProjectCard;

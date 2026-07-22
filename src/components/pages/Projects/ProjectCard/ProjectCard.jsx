/* src/components/pages/Projects/ProjectCard/ProjectCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@/components/ui/Typography';
import Icon from '@/components/ui/Icon';
import { images } from '@/assets/images';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard component rendering an individual project item card matching Figma specs.
 *
 * @component ProjectCard
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.categoryLabel - Category badge label
 * @param {string} props.location - Project location
 * @param {string} props.description - Project scope description
 * @param {string} [props.imageKey] - Key matching image asset in images.projects
 * @param {string} [props.image] - Direct image URL/import source
 */
const ProjectCard = memo(({
  title,
  categoryLabel,
  location,
  description,
  imageKey,
  image,
}) => {
  // Resolve image source cleanly from explicit image prop or imageKey in global manifest
  const imageSrc = image || (imageKey ? images.projects?.[imageKey] : undefined) || images.projects?.project01Card;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <Typography variant="h3" as="h3" className={styles.title}>
          {title}
        </Typography>

        <div className={styles.metaRow}>
          <div className={styles.badge}>
            <span>{categoryLabel}</span>
          </div>

          {location && (
            <div className={styles.locationRow}>
              <Icon name="location-pin" size={14} color="var(--color-primary)" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={`${title} project thumbnail`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <Typography variant="body" as="p" className={styles.description}>
        {description}
      </Typography>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  categoryLabel: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string.isRequired,
  imageKey: PropTypes.string,
  image: PropTypes.string,
};

export default ProjectCard;

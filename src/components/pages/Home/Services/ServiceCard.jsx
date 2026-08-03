/* src/components/sections/Services/ServiceCard.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Typography from '@/components/ui/Typography';
import Icon from '@/components/ui/Icon';

import { images } from '@/assets/images';
import styles from './ServiceCard.module.css';

/**
 * @component ServiceCard
 * @description Renders a single service card with thumbnail image, title, description, and action link.
 */
const ServiceCard = memo(({ title, description, imageKey, href }) => {
  const imageSrc = images.services[imageKey]?.card ?? null;

  return (
    <article className={styles.card}>
      <Link to={href} className={styles.imageWrapper} aria-label={`View details for ${title}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </Link>

      <Typography variant="h3" as="h3" className={styles.title}>
        <Link to={href} style={{ color: 'inherit', textDecoration: 'none' }}>
          {title}
        </Link>
      </Typography>

      <Typography variant="body" as="p" className={styles.description}>
        {description}
      </Typography>

      <Link to={href} className={styles.actionLink}>
        <span>Learn more</span>
        <Icon
          name="arrow-right"
          size="sm"
          className={styles.arrowIcon}
        />
      </Link>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

ServiceCard.propTypes = {
  title:       PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageKey:    PropTypes.string.isRequired,
  href:        PropTypes.string.isRequired,
};

export default ServiceCard;

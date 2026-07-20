/* src/components/sections/Services/ServiceCard.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';

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
      <div className={styles.imageWrapper}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>

      <Typography variant="h3" as="h3" className={styles.title}>
        {title}
      </Typography>

      <Typography variant="body" as="p" className={styles.description}>
        {description}
      </Typography>

      <a href={href} className={styles.actionLink}>
        <span>Learn more</span>
        <Icon
          name="arrow-right"
          size="sm"
          className={styles.arrowIcon}
        />
      </a>
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

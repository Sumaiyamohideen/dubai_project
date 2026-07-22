/* src/components/pages/About/AboutValues/ValueCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../ui/Icon';
import Typography from '../../../ui/Typography';
import styles from './ValueCard.module.css';

/**
 * ValueCard component rendering individual core value item with green icon badge.
 *
 * @component ValueCard
 * @param {Object} props
 * @param {string} props.title - Value title
 * @param {string} props.description - Value description
 * @param {string} props.iconName - Custom icon identifier
 */
const ValueCard = memo(({ title, description, iconName }) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconBadge}>
        <Icon name={iconName} size={28} color="#ffffff" aria-hidden="true" />
      </div>
      <Typography variant="h4" as="h3" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="body" as="p" className={styles.description}>
        {description}
      </Typography>
    </article>
  );
});

ValueCard.displayName = 'ValueCard';

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default ValueCard;

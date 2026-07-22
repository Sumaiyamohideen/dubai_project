/* src/components/sections/WhyChoose/WhyChooseCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@/components/ui/Typography';
import Icon from '@/components/ui/Icon';
import styles from './WhyChooseCard.module.css';

/**
 * WhyChooseCard component for rendering feature highlight cards.
 *
 * @component WhyChooseCard
 * @param {Object} props
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature detailed copy
 * @param {string} props.iconName - Lucide / custom icon identifier
 */
const WhyChooseCard = memo(({ title, description, iconName }) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconBadge}>
        <Icon name={iconName} size={28} className={styles.badgeIcon} />
      </div>

      <Typography variant="h3" className={styles.title}>
        {title}
      </Typography>

      <Typography variant="body" className={styles.description}>
        {description}
      </Typography>
    </article>
  );
});

WhyChooseCard.displayName = 'WhyChooseCard';

WhyChooseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default WhyChooseCard;

/* src/components/sections/Emirates/EmirateCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/ui/Icon';
import Typography from '@/components/ui/Typography';
import styles from './EmirateCard.module.css';

/**
 * Local reusable component rendering an individual Emirate card item.
 *
 * @component EmirateCard
 * @param {Object} props
 * @param {string} props.name - Name of the emirate (e.g. "DUBAI")
 */
const EmirateCard = memo(({ name }) => {
  return (
    <li className={styles.card}>
      <span className={styles.iconWrapper} aria-hidden="true">
        <Icon name="location-pin" size={24} />
      </span>
      <Typography variant="h4" className={styles.name}>
        {name}
      </Typography>
    </li>
  );
});

EmirateCard.displayName = 'EmirateCard';

EmirateCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EmirateCard;

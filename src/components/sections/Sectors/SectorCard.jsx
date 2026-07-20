/* src/components/sections/Sectors/SectorCard.jsx */
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon';
import styles from './SectorCard.module.css';

/**
 * SectorCard Component
 * Local card component rendering individual sector item with icon badge and label.
 */
const SectorCard = ({ label, iconName }) => {
  return (
    <li className={styles.card}>
      <div className={styles.iconBadge}>
        <Icon name={iconName} size={32} />
      </div>
      <span className={styles.label}>{label}</span>
    </li>
  );
};

SectorCard.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SectorCard;

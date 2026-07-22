/* src/components/pages/Projects/ProjectsFilter/FilterButton.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsFilter.module.css';

/**
 * FilterButton component representing an individual category filter button item.
 *
 * @component FilterButton
 * @param {Object} props
 * @param {string} props.label - Category filter label text
 * @param {boolean} props.isActive - Whether this filter option is currently selected
 * @param {Function} props.onClick - Click handler callback when filter option is selected
 */
const FilterButton = memo(({ label, isActive, onClick }) => {
  const buttonClassName = `${styles.filterButton} ${isActive ? styles.active : ''}`.trim();

  return (
    <button
      type="button"
      className={buttonClassName}
      aria-pressed={isActive}
      onClick={onClick}
    >
      {label}
    </button>
  );
});

FilterButton.displayName = 'FilterButton';

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;

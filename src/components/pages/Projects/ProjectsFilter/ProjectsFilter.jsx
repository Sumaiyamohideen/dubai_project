/* src/components/pages/Projects/ProjectsFilter/ProjectsFilter.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import FilterButton from './FilterButton';
import { PROJECT_FILTER_CATEGORIES } from '../constants';
import styles from './ProjectsFilter.module.css';

/**
 * ProjectsFilter component rendering interactive category filter buttons bar.
 *
 * @component ProjectsFilter
 * @param {Object} props
 * @param {Array<{id: string, label: string}>} [props.categories=PROJECT_FILTER_CATEGORIES] - Array of filter category objects
 * @param {string} props.activeFilter - ID of the currently active category filter
 * @param {Function} props.onFilterChange - Callback function triggered when a category is selected
 */
const ProjectsFilter = memo(({
  categories = PROJECT_FILTER_CATEGORIES,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <section className={styles.filterSection} aria-label="Projects Filter Section">
      <Container>
        <nav className={styles.filterNav} aria-label="Projects filter categories">
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              label={category.label}
              isActive={activeFilter === category.id}
              onClick={() => onFilterChange(category.id)}
            />
          ))}
        </nav>
      </Container>
    </section>
  );
});

ProjectsFilter.displayName = 'ProjectsFilter';

ProjectsFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ProjectsFilter;

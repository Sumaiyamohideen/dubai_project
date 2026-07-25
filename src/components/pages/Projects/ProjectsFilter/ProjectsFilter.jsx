/* src/components/pages/Projects/ProjectsFilter/ProjectsFilter.jsx */

import { memo, useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import FilterButton from './FilterButton';
import { PROJECT_FILTER_CATEGORIES } from '../constants';
import styles from './ProjectsFilter.module.css';

/**
 * ProjectsFilter component rendering interactive category filter bar on desktop
 * and category dropdown on mobile viewports.
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeCategoryObj = useMemo(() => {
    return categories.find((cat) => cat.id === activeFilter) || categories[0];
  }, [categories, activeFilter]);

  const availableCategories = useMemo(() => {
    if (activeFilter === 'all') {
      return categories.filter((cat) => cat.id !== 'all');
    }
    const allCategoryObj = categories.find((cat) => cat.id === 'all') || { id: 'all', label: 'ALL' };
    const otherCategories = categories.filter((cat) => cat.id !== 'all');
    return [allCategoryObj, ...otherCategories];
  }, [categories, activeFilter]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.filterSection} aria-label="Projects Filter Section">
      <Container>
        {/* Desktop Filter Navigation Bar */}
        <nav className={styles.desktopFilterNav} aria-label="Projects filter categories">
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              label={category.label}
              isActive={activeFilter === category.id}
              onClick={() => onFilterChange(category.id)}
            />
          ))}
        </nav>

        {/* Mobile Filter Category Dropdown */}
        <div className={styles.mobileDropdownContainer} ref={dropdownRef}>
          <button
            type="button"
            className={styles.dropdownTrigger}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            aria-expanded={isDropdownOpen}
            aria-label="Filter projects by category"
          >
            <span className={styles.dropdownLabel}>{activeCategoryObj ? activeCategoryObj.label : 'ALL'}</span>
            <Icon
              name="chevron-down"
              size={16}
              color="#ffffff"
              className={`${styles.chevronIcon} ${isDropdownOpen ? styles.chevronRotated : ''}`}
              aria-hidden="true"
            />
          </button>

          {isDropdownOpen && (
            <ul className={styles.dropdownMenu} role="menu">
              {availableCategories.map((category) => (
                <li key={category.id} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    className={`${styles.dropdownItem} ${activeFilter === category.id ? styles.selectedItem : ''}`}
                    onClick={() => {
                      onFilterChange(category.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
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

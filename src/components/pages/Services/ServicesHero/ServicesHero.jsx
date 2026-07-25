/* src/components/pages/Services/ServicesHero/ServicesHero.jsx */

import { memo, useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import Icon from '@/components/ui/Icon';
import { SERVICES_HERO_DATA, SERVICE_CATEGORIES } from '../constants';
import styles from './ServicesHero.module.css';

/**
 * ServicesHero component rendering header title, description, and mobile-only search & category filter bar.
 *
 * @component ServicesHero
 */
const ServicesHero = memo(({
  searchQuery = '',
  setSearchQuery = () => {},
  selectedCategory = 'ALL',
  setSelectedCategory = () => {},
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const availableCategories = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return SERVICE_CATEGORIES.filter((cat) => cat !== 'ALL');
    }
    return ['ALL', ...SERVICE_CATEGORIES.filter((cat) => cat !== 'ALL')];
  }, [selectedCategory]);

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
    <section className={styles.heroSection} aria-labelledby="services-hero-title">
      <Container>
        <div className={styles.inner}>
          <Typography
            variant="h1"
            as="h1"
            id="services-hero-title"
            className={styles.title}
          >
            {SERVICES_HERO_DATA.title}
          </Typography>
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.description}
          >
            {SERVICES_HERO_DATA.description}
          </Typography>

          {/* Mobile-Only Search & Filter Bar (Figma nodes 731:6863 - 731:6866) */}
          <div className={styles.mobileFilterBar}>
            {/* Search Input Box */}
            <div className={styles.searchBox}>
              <Icon name="search" size={18} className={styles.searchIcon} aria-hidden="true" />
              <input
                type="text"
                placeholder="Service Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search Service Name"
              />
            </div>

            {/* Category Dropdown */}
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <button
                type="button"
                className={styles.dropdownTrigger}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-expanded={isDropdownOpen}
                aria-label="Filter services by category"
              >
                <span className={styles.dropdownLabel}>{selectedCategory}</span>
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
                  {availableCategories.map((cat) => (
                    <li key={cat} role="none">
                      <button
                        type="button"
                        role="menuitem"
                        className={`${styles.dropdownItem} ${selectedCategory === cat ? styles.selectedItem : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});

ServicesHero.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

ServicesHero.displayName = 'ServicesHero';

export default ServicesHero;

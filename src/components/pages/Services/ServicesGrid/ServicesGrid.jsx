/* src/components/pages/Services/ServicesGrid/ServicesGrid.jsx */

import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/pages/Home/Services/ServiceCard';
import { ALL_SERVICES_LIST, CATEGORY_MAP } from '../constants';
import styles from './ServicesGrid.module.css';

/**
 * ServicesGrid component rendering technical catalog with mobile filtering support.
 *
 * @component ServicesGrid
 */
const ServicesGrid = memo(({ searchQuery = '', selectedCategory = 'ALL' }) => {
  const filteredServices = useMemo(() => {
    return ALL_SERVICES_LIST.filter((service) => {
      // 1. Filter by category
      if (selectedCategory && selectedCategory !== 'ALL') {
        const allowedIds = CATEGORY_MAP[selectedCategory] || [];
        if (!allowedIds.includes(service.id)) {
          return false;
        }
      }

      // 2. Filter by search query
      if (searchQuery && searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = service.title.toLowerCase().includes(query);
        const matchesDesc = service.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className={styles.section} aria-label="Services Catalog">
      <Container>
        {filteredServices.length > 0 ? (
          <div className={styles.grid}>
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageKey={service.imageKey}
                href={service.href}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#666' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: '500' }}>No services found matching your selection.</p>
          </div>
        )}
      </Container>
    </section>
  );
});

ServicesGrid.propTypes = {
  searchQuery: PropTypes.string,
  selectedCategory: PropTypes.string,
};

ServicesGrid.displayName = 'ServicesGrid';

export default ServicesGrid;

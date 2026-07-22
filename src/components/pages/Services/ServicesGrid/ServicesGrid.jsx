/* src/components/pages/Services/ServicesGrid/ServicesGrid.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/pages/Home/Services/ServiceCard';
import { ALL_SERVICES_LIST } from '../constants';
import styles from './ServicesGrid.module.css';

/**
 * ServicesGrid component rendering 21-service technical catalog.
 *
 * @component ServicesGrid
 */
const ServicesGrid = memo(() => {
  return (
    <section className={styles.section} aria-label="Services Catalog">
      <Container>
        <div className={styles.grid}>
          {ALL_SERVICES_LIST.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageKey={service.imageKey}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
});

ServicesGrid.displayName = 'ServicesGrid';

export default ServicesGrid;

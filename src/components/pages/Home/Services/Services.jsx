/* src/components/sections/Services/Services.jsx */
import { memo } from 'react';

import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

import ServiceCard from './ServiceCard';
import { SERVICES_SECTION_HEADER, SERVICES_DATA, SERVICES_CTA } from './constants';
import styles from './Services.module.css';

/**
 * @component Services
 * @description Main Services section rendering 9 technical service cards in a responsive grid.
 */
const Services = memo(() => {
  return (
    <section className={styles.servicesSection} id="services">
      <Container>
        <header className={styles.headerContainer}>
          <Typography variant="h2" as="h2" className={styles.sectionTitle}>
            {SERVICES_SECTION_HEADER.title}
          </Typography>
          <Typography variant="bodyLarge" as="p" className={styles.sectionSubtitle}>
            {SERVICES_SECTION_HEADER.description}
          </Typography>
        </header>

        <div className={styles.grid}>
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageKey={service.imageKey}
              href={service.href}
            />
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Button
            variant="primary"
            size="lg"
            href={SERVICES_CTA.href}
            icon={
              <span className={styles.iconBadge}>
                <Icon name="arrow-up-right" size={20} className={styles.badgeIcon} />
              </span>
            }
            iconPosition="right"
            className={styles.viewAllButton}
          >
            {SERVICES_CTA.label}
          </Button>
        </div>
      </Container>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;

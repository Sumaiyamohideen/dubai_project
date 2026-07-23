/* src/components/pages/ServiceDetails/ServiceDetailsPage.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import CTA from '@/components/pages/Home/CTA';
import { SERVICE_DETAILS_DATA, DEFAULT_SERVICE_SLUG } from './constants';
import styles from './ServiceDetailsPage.module.css';

/**
 * ServiceDetailsPage Component Template.
 * A production-grade, highly reusable template that renders service detail pages
 * based on service data configurations. Sourced 1:1 from Figma Node 731:2636.
 *
 * @component ServiceDetailsPage
 * @param {Object} props
 * @param {string} [props.slug] - Active service slug identifier
 * @param {Object} [props.customData] - Optional direct service data object override
 */
const ServiceDetailsPage = memo(({ slug = DEFAULT_SERVICE_SLUG, customData = null }) => {
  const data = customData || SERVICE_DETAILS_DATA[slug] || SERVICE_DETAILS_DATA[DEFAULT_SERVICE_SLUG];

  if (!data) {
    return null;
  }

  return (
    <div className={styles.page} data-testid="service-details-page">
      {/* 1. Hero Section */}
      <section className={styles.heroSection} aria-label={`${data.title} service page title`}>
        <Container>
          <Typography variant="hero" as="h1" className={styles.heroTitle}>
            {data.title}
          </Typography>

          {/* 2. Framed Image Container */}
          {data.heroImage && (
            <div className={styles.framedImageCard}>
              <img
                src={data.heroImage}
                alt={data.title}
                className={styles.heroImage}
                loading="eager"
              />
            </div>
          )}
        </Container>
      </section>

      {/* 3. Detailed Overview Section */}
      {data.overviewLead && (
        <section className={styles.overviewSection} aria-label="Service lead description">
          <Container>
            <p className={styles.overviewLead}>{data.overviewLead}</p>
          </Container>
        </section>
      )}

      {/* 4. Services Offered Section */}
      {data.servicesOffered && data.servicesOffered.length > 0 && (
        <section className={styles.servicesOfferedSection} aria-label="Services offered list">
          <Container>
            <h2 className={styles.offeredHeading}>{data.servicesOfferedTitle || 'Services Offered:'}</h2>
            <div className={styles.offeredList}>
              {data.servicesOffered.map((item) => (
                <p key={item.id} className={styles.offeredItem}>
                  <span className={styles.offeredLabel}>{item.label} </span>
                  <span className={styles.offeredText}>{item.text}</span>
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. Related Services Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className={styles.relatedSection} aria-label="Related services">
          <Container>
            <h2 className={styles.relatedTitle}>{data.relatedServicesTitle || 'Related Services'}</h2>
            {data.relatedServicesSubtitle && (
              <p className={styles.relatedSubtitle}>{data.relatedServicesSubtitle}</p>
            )}

            <div className={styles.relatedGrid}>
              {data.relatedServices.map((card) => (
                <article key={card.id} className={styles.relatedCard}>
                  <div className={styles.cardImageWrapper}>
                    <img src={card.image} alt={card.title} className={styles.cardImage} loading="lazy" />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <a href={`/services/${card.slug}`} className={styles.cardLink}>
                    <span>Learn more</span>
                    <Icon name="arrow-right" size={18} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            {data.viewAllHref && (
              <div className={styles.viewAllWrapper}>
                <Button
                  variant="primary"
                  size="lg"
                  href={data.viewAllHref}
                  icon={
                    <span className={styles.viewAllIconBadge}>
                      <Icon name="arrow-up-right" size={18} color="#035a2d" />
                    </span>
                  }
                  iconPosition="right"
                  className={styles.viewAllBtn}
                  aria-label="View all services"
                >
                  VIEW ALL
                </Button>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 6. Shared CTA Section (Figma: Ready to get started?) */}
      <CTA
        variant="service"
        heading="Ready to get started?"
        description="Get a free, no-obligation quote in minutes. Tell us what you need — we handle the rest."
        buttonLabel="REQUEST FREE QUOTE"
        href="#contact"
      />
    </div>
  );
});

ServiceDetailsPage.displayName = 'ServiceDetailsPage';

ServiceDetailsPage.propTypes = {
  slug: PropTypes.string,
  customData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    heroImage: PropTypes.string,
    overviewLead: PropTypes.string,
    servicesOfferedTitle: PropTypes.string,
    servicesOffered: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    relatedServicesTitle: PropTypes.string,
    relatedServicesSubtitle: PropTypes.string,
    relatedServices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
    viewAllHref: PropTypes.string,
  }),
};

export default ServiceDetailsPage;

/* src/components/sections/Testimonials/Testimonials.jsx */
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import TestimonialCard from './TestimonialCard';
import { TESTIMONIALS_HEADER, TESTIMONIALS_ITEMS } from './constants';
import styles from './Testimonials.module.css';

/**
 * Testimonials Section Component
 * Renders "Trusted by Homeowners & Businesses Alike" section with a 6-review grid.
 */
const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection} aria-label="Customer Testimonials">
      <Container>
        <div className={styles.headerArea}>
          <Typography variant="h2" className={styles.title}>
            {TESTIMONIALS_HEADER.title}
          </Typography>
          <Typography variant="body" className={styles.description}>
            {TESTIMONIALS_HEADER.description}
          </Typography>
        </div>

        <ul className={styles.gridContainer}>
          {TESTIMONIALS_ITEMS.map((item) => (
            <TestimonialCard
              key={item.id}
              rating={item.rating}
              quote={item.quote}
              name={item.name}
              service={item.service}
              location={item.location}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Testimonials;

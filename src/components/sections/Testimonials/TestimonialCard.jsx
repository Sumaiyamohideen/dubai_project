/* src/components/sections/Testimonials/TestimonialCard.jsx */
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon';
import styles from './TestimonialCard.module.css';

/**
 * TestimonialCard Component
 * Local card component rendering individual testimonial review item.
 */
const TestimonialCard = ({ rating, quote, name, service, location }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.starsRow} aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, index) => (
            <Icon key={index} name="star" size={24} color="rgba(237, 28, 36, 0.86)" />
          ))}
        </div>
        <p className={styles.quoteText}>{quote}</p>
      </div>
      <div className={styles.authorBlock}>
        <span className={styles.authorName}>{name}</span>
        <span className={styles.authorMeta}>
          {service} &bull; {location}
        </span>
      </div>
    </li>
  );
};

TestimonialCard.propTypes = {
  rating: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default TestimonialCard;

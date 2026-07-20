/* src/sections/StatsBar/StatsBar.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';

import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';

import { STATS_DATA } from './constants';
import styles from './StatsBar.module.css';

/**
 * @component StatsBar
 * @description Renders the key performance metrics and statistics section (StatsBar).
 * Displays a responsive grid/flex layout with 4 stat cards:
 * - 10+ Years Experience
 * - 100+ Experience Technicians
 * - 2,000+ Projects Done
 * - 24/7 Technical Support
 *
 * Sourced directly from Figma design node 731:1457.
 * Reuses existing Container and Typography components.
 *
 * @param {Object} props
 * @param {string} [props.className=''] - Optional custom CSS class for layout overrides
 */
const StatsBar = memo(({ className = '' }) => {
  const sectionClassName = `${styles.statsSection} ${className}`.trim();

  return (
    <section
      className={sectionClassName}
      aria-label="Key Statistics"
      id="stats-bar"
    >
      <Container>
        <div className={styles.statsGrid}>
          {STATS_DATA.map(({ id, value, label }) => (
            <div key={id} className={styles.statCard}>
              <Typography
                variant="hero"
                as="span"
                className={styles.statValue}
              >
                {value}
              </Typography>
              <Typography
                variant="bodyLarge"
                as="p"
                className={styles.statLabel}
              >
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
});

StatsBar.displayName = 'StatsBar';

StatsBar.propTypes = {
  /** Optional custom styling classes to apply layout overrides */
  className: PropTypes.string,
};

export default StatsBar;

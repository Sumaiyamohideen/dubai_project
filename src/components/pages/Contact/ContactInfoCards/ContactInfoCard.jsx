/* src/components/pages/Contact/ContactInfoCards/ContactInfoCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/ui/Icon';
import styles from './ContactInfoCards.module.css';

/**
 * Single contact information card.
 * Matches Figma Nodes 731:5083–731:5087 (card shells)
 * and 731:5100–731:5128 (labels, values, CTA links, icon chips).
 *
 * @component ContactInfoCard
 */
const ContactInfoCard = memo(({ title, value, cta, icon }) => {
  return (
    <div className={styles.card} role="listitem">
      {/* Green icon chip — Figma: #035a2d, 59px × 56.5px, border-radius 8.6px */}
      <div className={styles.iconChip} aria-hidden="true">
        <Icon name={icon} size={28} color="#ffffff" decorative />
      </div>

      <div className={styles.cardContent}>
        {/* Card title — Host Grotesk SemiBold 27.564px */}
        <p className={styles.cardTitle}>{title}</p>

        {/* Value — Host Grotesk Regular 19.45px */}
        <p className={styles.cardValue}>{value}</p>

        {/* Optional CTA link — Host Grotesk Medium 23.844px, green with straight right arrow */}
        {cta && (
          <a
            href={cta.href}
            className={styles.cardCta}
            target={cta.href.startsWith('http') ? '_blank' : undefined}
            rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={`${cta.label} — ${value}`}
          >
            <span>{cta.label}</span>
            <Icon name="arrow-right" size={20} color="#035a2d" className={styles.ctaIcon} decorative />
          </a>
        )}
      </div>
    </div>
  );
});

ContactInfoCard.displayName = 'ContactInfoCard';

ContactInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  icon: PropTypes.string.isRequired,
};

export default ContactInfoCard;

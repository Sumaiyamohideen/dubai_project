/* src/components/pages/Contact/ContactInfoCards/ContactInfoCards.jsx */

import { memo } from 'react';
import ContactInfoCard from './ContactInfoCard';
import { CONTACT_INFO_CARDS } from '../constants';
import styles from './ContactInfoCards.module.css';

/**
 * ContactInfoCards — stacked column of 5 contact info cards.
 * Matches Figma Nodes 731:5083–731:5087 (right column of the two-column section).
 *
 * @component ContactInfoCards
 */
const ContactInfoCards = memo(() => {
  return (
    <div className={styles.cardsColumn} role="list" aria-label="Contact information">
      {CONTACT_INFO_CARDS.map((card) => (
        <ContactInfoCard
          key={card.id}
          title={card.title}
          value={card.value}
          cta={card.cta}
          icon={card.icon}
        />
      ))}
    </div>
  );
});

ContactInfoCards.displayName = 'ContactInfoCards';

export default ContactInfoCards;

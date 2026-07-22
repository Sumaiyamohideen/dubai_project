/* src/components/pages/Contact/ContactMap/ContactMap.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import styles from './ContactMap.module.css';

/**
 * ContactMap — static map image section.
 * Matches Figma Node 731:5139:
 *   1700px × 617.862px, border-radius 44.552px, left 110px on 1920px canvas.
 *
 * The map image must be available at:
 *   src/assets/images/contact/map.png
 *
 * @component ContactMap
 */
const ContactMap = memo(() => {
  return (
    <section className={styles.mapSection} aria-label="Map showing Chalachal Technical Services locations across the UAE">
      <Container>
        <div
          className={styles.mapWrapper}
          role="img"
          aria-label="Map of UAE showing Chalachal Technical Services service areas"
        >
          <img
            src="/src/assets/images/contact/map.png"
            alt="Map of UAE service areas — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain"
            className={styles.mapImage}
            loading="lazy"
            onError={(e) => {
              /* Graceful fallback if map image not yet exported */
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback placeholder shown when image is missing */}
          <div className={styles.mapFallback} aria-hidden="true">
            <p className={styles.fallbackText}>
              Serving all 7 Emirates of the UAE
            </p>
            <p className={styles.fallbackSub}>
              Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
});

ContactMap.displayName = 'ContactMap';

export default ContactMap;

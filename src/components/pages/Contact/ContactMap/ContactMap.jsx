/* src/components/pages/Contact/ContactMap/ContactMap.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import { CONTACT_MAP_DATA } from '../constants';
import styles from './ContactMap.module.css';

/**
 * ContactMap — embedded interactive Google Map section.
 * Matches Figma Node 731:5139:
 *   1700px × 617.862px, border-radius 44.552px, left 110px on 1920px canvas.
 *
 * Points to official business location link:
 *   https://maps.app.goo.gl/GT87anqgeNKjzYT86?g_st=ic
 *
 * @component ContactMap
 */
const ContactMap = memo(() => {
  return (
    <section className={styles.mapSection} aria-label="Official business location map">
      <Container>
        <div className={styles.mapWrapper}>
          <iframe
            src={CONTACT_MAP_DATA.embedUrl}
            title={CONTACT_MAP_DATA.title}
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={CONTACT_MAP_DATA.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openMapLink}
            aria-label={`${CONTACT_MAP_DATA.buttonLabel} (opens in a new tab)`}
          >
            <span>{CONTACT_MAP_DATA.buttonLabel}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={styles.externalIcon}
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
});

ContactMap.displayName = 'ContactMap';

export default ContactMap;


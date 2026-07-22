/* src/components/layout/FloatingContact/FloatingContact.jsx */

import { memo, useState, useEffect } from 'react';
import Icon from '../../ui/Icon';
import { FLOATING_CONTACT_DATA } from './constants';
import styles from './FloatingContact.module.css';

/**
 * Shared FloatingContact sidebar component.
 * Displays fixed dark-green container with Phone and WhatsApp action buttons on the right edge.
 * Automatically hidden while Hero section is in viewport, smoothly displayed once scrolled past.
 *
 * @component FloatingContact
 */
const FloatingContact = memo(() => {
  const { phone, whatsapp } = FLOATING_CONTACT_DATA;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('hero');

    // If hero section does not exist on current page, display floating contact by default
    if (!heroElement) {
      setIsVisible(true);
      return;
    }

    // Use IntersectionObserver to efficiently toggle visibility when Hero leaves/enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerClassName = `${styles.container} ${isVisible ? styles.visible : ''}`.trim();

  return (
    <aside className={containerClassName} aria-label="Floating contact shortcuts">
      <a
        href={phone.href}
        aria-label={phone.label}
        className={styles.actionButton}
      >
        <Icon name={phone.iconName} size={32} color="#ffffff" aria-hidden="true" />
      </a>

      <div className={styles.divider} aria-hidden="true" />

      <a
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsapp.label}
        className={styles.actionButton}
      >
        <Icon name={whatsapp.iconName} size={34} color="#ffffff" aria-hidden="true" />
      </a>
    </aside>
  );
});

FloatingContact.displayName = 'FloatingContact';

export default FloatingContact;

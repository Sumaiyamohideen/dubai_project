/* src/components/layout/FloatingContact/FloatingContact.jsx */

import { memo, useState, useEffect } from 'react';
import Icon from '../../ui/Icon';
import { FLOATING_CONTACT_DATA } from './constants';
import styles from './FloatingContact.module.css';

/**
 * Shared FloatingContact sidebar component.
 * Displays fixed dark-green container with connected Phone and WhatsApp action buttons on the right edge.
 * Automatically hidden at the top of the page, smoothly displayed once scrolled down.
 *
 * @component FloatingContact
 */
const FloatingContact = memo(() => {
  const { phone, whatsapp } = FLOATING_CONTACT_DATA;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        <Icon name={phone.iconName} size={28} color="#ffffff" aria-hidden="true" />
      </a>

      <div className={styles.divider} aria-hidden="true" />

      <a
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsapp.label}
        className={styles.actionButton}
      >
        <Icon name={whatsapp.iconName} size={28} color="#ffffff" aria-hidden="true" />
      </a>
    </aside>
  );
});

FloatingContact.displayName = 'FloatingContact';

export default FloatingContact;


/* src/components/layout/Footer/FooterColumn.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../ui/Typography';
import Icon from '../../ui/Icon';
import styles from './FooterColumn.module.css';

/**
 * Reusable FooterColumn component for footer navigation link lists and contact items.
 *
 * @component FooterColumn
 */
const FooterColumn = memo(({ title, links, items }) => {
  return (
    <div className={styles.column}>
      <Typography variant="h5" as="h3" className={styles.title}>
        {title}
      </Typography>

      {links && (
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.label} className={styles.linkItem}>
              <a href={link.href} className={styles.link}>
                <span>{link.label}</span>
                {link.showArrow && (
                  <Icon
                    name="arrow-up-right"
                    size={16}
                    aria-hidden="true"
                    className={styles.arrowIcon}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      )}

      {items && (
        <ul className={styles.itemList}>
          {items.map((item) => (
            <li key={item.text} className={styles.contactItem}>
              {item.href ? (
                <a href={item.href} className={styles.contactLink} aria-label={`${title}: ${item.text}`}>
                  <Icon name={item.icon} size={18} aria-hidden="true" className={styles.contactIcon} />
                  <span>{item.text}</span>
                </a>
              ) : (
                <div className={styles.contactInfo}>
                  <Icon name={item.icon} size={18} aria-hidden="true" className={styles.contactIcon} />
                  <span>{item.text}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

FooterColumn.displayName = 'FooterColumn';

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      showArrow: PropTypes.bool,
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
};

export default FooterColumn;

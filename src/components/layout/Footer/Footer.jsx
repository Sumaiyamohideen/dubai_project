/* src/components/layout/Footer/Footer.jsx */

import { memo } from 'react';
import Container from '../../ui/Container';
import Typography from '../../ui/Typography';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import FooterColumn from './FooterColumn';
import { FOOTER_DATA } from './constants';
import { images } from '../../../assets/images';
import styles from './Footer.module.css';

/**
 * Site-wide Footer component.
 * Features 4-column responsive layout with brand logo badge, company summary,
 * WhatsApp & Call action buttons, service links, service area links, and contact information.
 *
 * @component Footer
 */
const Footer = memo(() => {
  const { brand, columns, bottom } = FOOTER_DATA;

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <Container maxWidth="standard">
        <div className={styles.grid}>
          {/* Column 1: Brand Logo & Quick Actions */}
          <div className={styles.brandColumn}>
            <div className={styles.logoBox}>
              <img
                src={images.logo}
                alt="Chalachal Technical Services LLC"
                className={styles.logoImage}
                width={124}
                height={124}
                loading="lazy"
              />
            </div>

            <Typography variant="bodyMedium" as="p" className={styles.description}>
              {brand.description}
            </Typography>

            <div className={styles.actionButtons}>
              <Button
                variant="primary"
                size="lg"
                href={brand.whatsappBtn.href}
                target={brand.whatsappBtn.target}
                rel={brand.whatsappBtn.rel}
                icon={<Icon name={brand.whatsappBtn.iconName} size={20} color="var(--color-brand-primary)" />}
                iconPosition="left"
                className={styles.whatsappBtn}
                aria-label="Contact us on WhatsApp"
              >
                {brand.whatsappBtn.label}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={brand.callBtn.href}
                icon={<Icon name={brand.callBtn.iconName} size={20} color="var(--color-white)" />}
                iconPosition="left"
                className={styles.callBtn}
                aria-label="Call us directly"
              >
                {brand.callBtn.label}
              </Button>
            </div>
          </div>

          {/* Nav & Contact Columns (Columns 2, 3, 4) */}
          <nav className={styles.navColumns} aria-label="Footer navigation">
            {columns.map((col) => (
              <FooterColumn
                key={col.id}
                title={col.title}
                links={col.links}
                items={col.items}
              />
            ))}
          </nav>
        </div>

        {/* Bottom Footer Row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyrightText}>
            {bottom.copyright} | {bottom.designer}
          </p>

          <div className={styles.bottomLinks}>
            {bottom.links.map((link) => (
              <a key={link.label} href={link.href} className={styles.bottomLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;


/* src/components/sections/CTA/CTA.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { CTA_DATA } from './constants';
import styles from './CTA.module.css';

/**
 * CTA (Call To Action) section component supporting 'home' and 'about' variants.
 *
 * @component CTA
 * @param {Object} props
 * @param {'home' | 'about'} [props.variant='home'] - Layout variant for different pages
 */
const CTA = memo(({ variant = 'home' }) => {
  const { heading, description, primaryButton, secondaryButton } = CTA_DATA;

  return (
    <section className={styles.ctaSection} id="cta" aria-labelledby="cta-heading">
      <Container maxWidth="standard">
        <div className={styles.ctaCard}>
          <div className={styles.contentArea}>
            <Typography variant="h2" as="h2" id="cta-heading" className={styles.heading}>
              {heading}
            </Typography>
            <Typography variant="bodyLarge" as="p" className={styles.description}>
              {description}
            </Typography>
          </div>

          <div className={styles.actionsArea}>
            {variant === 'about' ? (
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon name="arrow-up-right" size={20} color="var(--color-white)" />
                  </span>
                }
                iconPosition="right"
                className={styles.whiteBtnPrimary}
              >
                REQUEST FREE QUOTE
              </Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  size="lg"
                  href={primaryButton.href}
                  icon={
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon name={primaryButton.iconName} size={20} color="var(--color-white)" />
                    </span>
                  }
                  iconPosition="right"
                  className={styles.whiteBtnPrimary}
                >
                  {primaryButton.label}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={secondaryButton.href}
                  target={secondaryButton.target}
                  rel={secondaryButton.rel}
                  icon={
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon name={secondaryButton.iconName} size={20} color="var(--color-white)" />
                    </span>
                  }
                  iconPosition="left"
                  className={styles.whiteBtnSecondary}
                >
                  {secondaryButton.label}
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
});

CTA.displayName = 'CTA';

CTA.propTypes = {
  variant: PropTypes.oneOf(['home', 'about']),
};

export default CTA;



/* src/components/pages/Home/CTA/CTA.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { CTA_DATA } from './constants';
import styles from './CTA.module.css';

/**
 * CTA (Call To Action) section component supporting 'home', 'about', and 'service' variants.
 *
 * @component CTA
 * @param {Object} props
 * @param {'home' | 'about' | 'service'} [props.variant='home'] - Layout variant for different pages
 * @param {string} [props.heading] - Optional heading text override
 * @param {string} [props.description] - Optional description text override
 * @param {string} [props.buttonLabel] - Optional primary button label override
 * @param {string} [props.href] - Optional primary button link override
 */
const CTA = memo(({
  variant = 'home',
  heading = undefined,
  description = undefined,
  buttonLabel = undefined,
  href = '#contact',
}) => {
  const displayHeading = heading || CTA_DATA.heading;
  const displayDescription = description || CTA_DATA.description;
  const displayButtonLabel = buttonLabel || (variant === 'about' ? 'REQUEST FREE QUOTE' : CTA_DATA.primaryButton.label);

  return (
    <section className={styles.ctaSection} id="cta" aria-labelledby="cta-heading">
      <Container maxWidth="standard">
        <div className={styles.ctaCard}>
          <div className={styles.contentArea}>
            <Typography variant="h2" as="h2" id="cta-heading" className={styles.heading}>
              {displayHeading}
            </Typography>
            <Typography variant="bodyLarge" as="p" className={styles.description}>
              {displayDescription}
            </Typography>
          </div>

          <div className={styles.actionsArea}>
            {variant === 'about' || variant === 'service' ? (
              <Button
                variant="primary"
                size="lg"
                href={href}
                icon={
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon name="arrow-up-right" size={20} color="var(--color-white)" />
                  </span>
                }
                iconPosition="right"
                className={styles.whiteBtnPrimary}
              >
                {displayButtonLabel}
              </Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  size="lg"
                  href={CTA_DATA.primaryButton.href}
                  icon={
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon name={CTA_DATA.primaryButton.iconName} size={20} color="var(--color-white)" />
                    </span>
                  }
                  iconPosition="right"
                  className={styles.whiteBtnPrimary}
                >
                  {CTA_DATA.primaryButton.label}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={CTA_DATA.secondaryButton.href}
                  target={CTA_DATA.secondaryButton.target}
                  rel={CTA_DATA.secondaryButton.rel}
                  icon={
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon name={CTA_DATA.secondaryButton.iconName} size={20} color="var(--color-white)" />
                    </span>
                  }
                  iconPosition="left"
                  className={styles.whiteBtnSecondary}
                >
                  {CTA_DATA.secondaryButton.label}
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
  variant: PropTypes.oneOf(['home', 'about', 'service']),
  heading: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  href: PropTypes.string,
};

export default CTA;

/* src/components/sections/Hero/Hero.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';

import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

import { images } from '@/assets/images';

import {
  HERO_BADGE,
  HERO_DESCRIPTION,
  HERO_CTA,
  HERO_SOCIAL_PROOF,
  HERO_COLUMN_1_IMAGES,
  HERO_COLUMN_2_IMAGES,
} from './constants';

import styles from './Hero.module.css';

/**
 * @component MarqueeColumn
 * @description Renders a single vertically-scrolling marquee column.
 * The image list is duplicated for a seamless infinite-scroll effect using
 * native CSS `@keyframes`. No external libraries are used.
 *
 * @param {Object} props
 * @param {Array}  props.items        - Array of { key, alt } image config objects
 * @param {string} props.columnClass  - CSS module class applied to the outer column wrapper
 * @param {string} props.trackClass   - CSS module class applied to the scrolling track
 */
const MarqueeColumn = memo(function MarqueeColumn({ items, columnClass, trackClass }) {
  return (
    <div className={columnClass} aria-hidden="true">
      {/* Track is doubled so the loop is seamless */}
      <div className={trackClass}>
        {[...items, ...items].map(({ key, alt }, idx) => {
          const src = images.services[key]?.card ?? images.services[key] ?? null;
          return (
            <div className={styles.imageCard} key={`${key}-${idx}`}>
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className={styles.imageCardImg}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                /* Placeholder shown until asset is delivered */
                <div className={styles.imageCardPlaceholder} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

MarqueeColumn.displayName = 'MarqueeColumn';
MarqueeColumn.propTypes = {
  items:       PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string.isRequired, alt: PropTypes.string.isRequired })
  ).isRequired,
  columnClass: PropTypes.string.isRequired,
  trackClass:  PropTypes.string.isRequired,
};

/**
 * @component Hero
 * @description The primary above-the-fold hero section for the Chalachal Technical Services
 * home page. Renders a badge pill, headline with brand-green accent, subheadline,
 * primary CTA button, social proof row (avatar stack + stat), and two decorative
 * background image columns with continuous vertical marquee animation on desktop.
 *
 * All business copy is sourced from `./constants.js`.
 * Images are imported from `src/assets/images/index.js`.
 * The marquee uses native CSS keyframes — zero external libraries.
 *
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS class for layout overrides
 */
const Hero = memo(({ className = '' }) => {
  const sectionClassName = `${styles.hero} ${className}`.trim();

  return (
    <section
      className={sectionClassName}
      aria-label="Hero"
      id="hero"
    >
      {/* Decorative top gradient overlay — desktop only (CSS-controlled visibility) */}
      <div className={styles.gradientTop} aria-hidden="true" />

      {/* Decorative bottom gradient overlay — desktop only */}
      <div className={styles.gradientBottom} aria-hidden="true" />

      {/* Decorative image columns with marquee — desktop absolute overlay across full section */}
      <div className={styles.imageColumns} aria-hidden="true">
        <MarqueeColumn
          items={HERO_COLUMN_1_IMAGES}
          columnClass={`${styles.imageColumnWrap} ${styles.columnRight}`}
          trackClass={styles.imageTrack}
        />
        <MarqueeColumn
          items={HERO_COLUMN_2_IMAGES}
          columnClass={`${styles.imageColumnWrap} ${styles.columnLeft}`}
          trackClass={styles.imageTrackReversed}
        />
      </div>

      <Container className={styles.containerWrap}>
        <div className={styles.inner}>
          {/* Badge Pill */}
          <div className={styles.badge}>
            <Icon
              name={HERO_BADGE.icon}
              size="sm"
              color="var(--color-brand-primary)"
              className={styles.badgeIcon}
            />
            <span className={styles.badgeLabel}>{HERO_BADGE.label}</span>
          </div>

          {/* H1 Headline */}
          <Typography variant="hero" className={styles.headline}>
            Professional Technical{' '}
            <br className={styles.desktopBr} />
            Services & Maintenance{' '}
            <br className={styles.desktopBr} />
            Solutions{' '}
            <span className={styles.headlineAccent}>
              Across UAE
            </span>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="bodyLarge"
            as="p"
            className={styles.description}
          >
            {HERO_DESCRIPTION}
          </Typography>

          {/* CTA Row */}
          <div className={styles.ctaRow}>
            <Button
              variant="primary"
              size="lg"
              href={HERO_CTA.href}
              className={styles.ctaButton}
              icon={<Icon name={HERO_CTA.icon} size="sm" />}
              iconPosition="right"
              aria-label="Get a free quote"
            >
              {HERO_CTA.label}
            </Button>
          </div>

          {/* Social Proof Row */}
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {HERO_SOCIAL_PROOF.avatars.map((imgSrc, i) => (
                <img
                  key={`avatar-${i}`}
                  src={imgSrc}
                  alt={`Satisfied Client ${i + 1}`}
                  className={styles.avatar}
                />
              ))}
              <div className={styles.avatarPlus} aria-hidden="true">
                <Icon
                  name="plus"
                  size={14}
                  color="var(--color-white)"
                  className={styles.avatarPlusIcon}
                />
              </div>
            </div>
            <div className={styles.proofStat}>
              <span className={styles.proofValue}>
                {HERO_SOCIAL_PROOF.value}
              </span>
              <span className={styles.proofLabel}>
                {HERO_SOCIAL_PROOF.label}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});

Hero.displayName = 'Hero';

Hero.propTypes = {
  /** Additional CSS class for layout overrides from parent */
  className: PropTypes.string,
};

export default Hero;

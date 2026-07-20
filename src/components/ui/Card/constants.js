/* src/components/ui/Card/constants.js */

/**
 * Predefined padding configurations using base 8px system tokens.
 * @type {Record<string, string>}
 */
export const CARD_PADDINGS = {
  NONE: 'none',
  SM: 'sm',   /* 16px */
  MD: 'md',   /* 24px */
  LG: 'lg',   /* 32px */
  XL: 'xl',   /* 48px */
};

/**
 * Predefined box shadow elevation configurations.
 * @type {Record<string, string>}
 */
export const CARD_SHADOWS = {
  NONE: 'none',
  SM: 'sm',   /* Subtle shadow */
  MD: 'md',   /* Standard card shadow */
  LG: 'lg',   /* Sticky/floating shadow */
};

/**
 * Predefined border radius configurations matching figma design tokens.
 * @type {Record<string, string>}
 */
export const CARD_RADIUS = {
  NONE: 'none',
  SM: 'sm',     /* Badge/Icon Chip (12px) */
  MD: 'md',     /* Button (17px) */
  LG: 'lg',     /* Card (32px) */
  PILL: 'pill', /* Pill (9999px) */
};

/**
 * Predefined border configurations.
 * @type {Record<string, string>}
 */
export const CARD_BORDERS = {
  NONE: 'none',
  STANDARD: 'standard', /* Standard gray border */
  PRIMARY: 'primary',   /* Primary green brand border */
};

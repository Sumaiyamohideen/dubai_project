/* src/components/features/StatCard/constants.js */

/**
 * Visual orientations for the statistic block.
 * - vertical: Icon, value, and label are stacked vertically.
 * - horizontal: Icon is on the left; value and label stack on the right.
 */
export const STAT_CARD_ORIENTATIONS = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
};

/**
 * Text and content alignments for the statistic block.
 */
export const STAT_CARD_ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

/**
 * Color highlight themes for the statistic value.
 * - primary: Deep Green (--color-brand-primary)
 * - dark: Dark Forest Green (--color-brand-secondary)
 * - text: Standard Text color (--color-text-primary)
 */
export const STAT_CARD_HIGHLIGHTS = {
  PRIMARY: 'primary',
  DARK: 'dark',
  TEXT: 'text',
};

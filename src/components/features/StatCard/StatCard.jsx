/* src/components/features/StatCard/StatCard.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';

import { STAT_CARD_ORIENTATIONS, STAT_CARD_ALIGNMENTS, STAT_CARD_HIGHLIGHTS } from './constants';
import Icon from '../../ui/Icon';
import Card from '../../ui/Card';
import Typography from '../../ui/Typography';

import styles from './StatCard.module.css';

/**
 * Helper to capitalize a string.
 *
 * @param {string} str
 * @returns {string} Capitalized string
 */
const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @component StatCard
 * @description A reusable statistics display block designed to render numbers (e.g. 120+, 24/7)
 * alongside optional icons and descriptive labels. Supports vertical/horizontal alignment,
 * brand-specific color highlights, and responsive layouts.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.value - The main numeric or text statistic value (e.g., "120+", "24/7")
 * @param {string} props.label - Descriptive label text (e.g., "Completed Projects")
 * @param {string|React.ReactNode} [props.icon] - Icon name string (lookup via Icon Map) or custom React node
 * @param {'vertical'|'horizontal'} [props.orientation='vertical'] - Stack direction of layout elements
 * @param {'left'|'center'|'right'} [props.align] - Content alignment (defaults based on orientation)
 * @param {'primary'|'dark'|'text'} [props.highlight='primary'] - Highlight theme for the stat value text
 * @param {'plain'|'card'} [props.variant='plain'] - Container variant (whether to wrap in Card component)
 * @param {React.ElementType} [props.as='div'] - Semantic HTML tag override for outer plain container
 * @param {string} [props.className=''] - Extra classes from parent container
 */
const StatCard = memo(({
  value,
  label,
  icon = null,
  orientation = STAT_CARD_ORIENTATIONS.VERTICAL,
  align = undefined,
  highlight = STAT_CARD_HIGHLIGHTS.PRIMARY,
  variant = 'plain',
  as: Component = 'div',
  className = '',
  ...rest
}) => {
  // Resolve default alignment based on orientation: Vertical -> Center, Horizontal -> Left
  const resolvedAlign = align || (orientation === STAT_CARD_ORIENTATIONS.HORIZONTAL
    ? STAT_CARD_ALIGNMENTS.LEFT
    : STAT_CARD_ALIGNMENTS.CENTER);

  // Capitalize orientation and alignment for CSS class lookups
  const orientationClass = styles[`orientation${capitalize(orientation)}`] || styles.orientationVertical;
  const alignmentClass = styles[`align${capitalize(resolvedAlign)}`] || styles.alignCenter;
  const highlightClass = styles[`highlight${capitalize(highlight)}`] || styles.highlightPrimary;

  // Build root classnames
  const rootClassNames = [
    styles.statCard,
    orientationClass,
    orientation === STAT_CARD_ORIENTATIONS.VERTICAL ? alignmentClass : '',
    className
  ].filter(Boolean).join(' ');

  // CSS class for text wrapper container in horizontal layout
  const textContentClasses = [
    styles.textContent,
    styles[`text${capitalize(resolvedAlign)}`]
  ].filter(Boolean).join(' ');

  // Render the icon node
  const renderIcon = () => {
    if (!icon) return null;

    return (
      <div className={styles.iconWrapper}>
        {typeof icon === 'string' ? (
          <Icon name={icon} size="xl" decorative />
        ) : (
          icon
        )}
      </div>
    );
  };

  // Render the inner content (value and label)
  const renderContent = () => (
    <>
      <Typography variant="hero" as="span" className={`${styles.value} ${highlightClass}`.trim()}>
        {value}
      </Typography>
      <Typography variant="bodyLarge" as="span" className={styles.label}>
        {label}
      </Typography>
    </>
  );

  // If card variant is chosen, wrap in our reusable Card component
  if (variant === 'card') {
    return (
      <Card
        className={rootClassNames}
        padding="lg"
        radius="lg"
        border="standard"
        {...rest}
      >
        {renderIcon()}
        {orientation === STAT_CARD_ORIENTATIONS.HORIZONTAL ? (
          <div className={textContentClasses}>
            {renderContent()}
          </div>
        ) : (
          renderContent()
        )}
      </Card>
    );
  }

  // Standard plain layout
  return (
    <Component className={rootClassNames} {...rest}>
      {renderIcon()}
      {orientation === STAT_CARD_ORIENTATIONS.HORIZONTAL ? (
        <div className={textContentClasses}>
          {renderContent()}
        </div>
      ) : (
        renderContent()
      )}
    </Component>
  );
});

StatCard.displayName = 'StatCard';

StatCard.propTypes = {
  /** Statistic number or textual value */
  value: PropTypes.node.isRequired,
  /** Statistic descriptive label */
  label: PropTypes.string.isRequired,
  /** Optional icon name key or direct JSX element */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Layout stacking orientation */
  orientation: PropTypes.oneOf(Object.values(STAT_CARD_ORIENTATIONS)),
  /** Alignment of typography and elements */
  align: PropTypes.oneOf(Object.values(STAT_CARD_ALIGNMENTS)),
  /** Highlight color of the value text */
  highlight: PropTypes.oneOf(Object.values(STAT_CARD_HIGHLIGHTS)),
  /** Container layout variant (wraps in Card if set to 'card') */
  variant: PropTypes.oneOf(['plain', 'card']),
  /** Plain outer container HTML tag override */
  as: PropTypes.elementType,
  /** Additional custom classes from parent */
  className: PropTypes.string,
};

export default StatCard;

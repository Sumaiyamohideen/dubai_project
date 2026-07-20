/* src/components/ui/Card/Card.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';

import { CARD_PADDINGS, CARD_SHADOWS, CARD_RADIUS, CARD_BORDERS } from './constants';

import styles from './Card.module.css';

const getCapitalized = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * A highly accessible, generic visual container component representing cards.
 * Implements strict design system token mappings and semantic HTML elements.
 *
 * @component Card
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Inside content of the card
 * @param {string} [props.className] - Additional class overrides
 * @param {string} [props.padding='md'] - Padding scale presets ('none', 'sm', 'md', 'lg', 'xl')
 * @param {string} [props.shadow='none'] - Box shadow depth presets ('none', 'sm', 'md', 'lg')
 * @param {string} [props.radius='none'] - Corner radius presets ('none', 'sm', 'md', 'lg', 'pill')
 * @param {string|boolean} [props.border='none'] - Border types ('none', 'standard', 'primary') or boolean
 * @param {boolean} [props.hoverable=false] - Enables hover translations and visual elevations
 * @param {React.ElementType} [props.as='div'] - Semantic HTML tag type (e.g. 'div', 'article', 'section')
 * @param {function} [props.onClick] - Click event handler
 */
const Card = memo(({
  children = null,
  className = '',
  padding = CARD_PADDINGS.MD,
  shadow = CARD_SHADOWS.NONE,
  radius = CARD_RADIUS.NONE,
  border = CARD_BORDERS.NONE,
  hoverable = false,
  as: Component = 'div',
  onClick = undefined,
  ...rest
}) => {
  const isClickable = typeof onClick === 'function';

  // Capitalize config names for CSS Module class lookup
  const paddingClass = styles[`padding${getCapitalized(padding)}`] || styles.paddingNone;
  const shadowClass = styles[`shadow${getCapitalized(shadow)}`] || styles.shadowNone;
  const radiusClass = styles[`radius${getCapitalized(radius)}`] || styles.radiusNone;

  // Resolve border variant
  let borderClass = styles.borderNone;
  if (border === true || border === CARD_BORDERS.STANDARD) {
    borderClass = styles.borderStandard;
  } else if (border === CARD_BORDERS.PRIMARY || border === 'brand') {
    borderClass = styles.borderPrimary;
  }

  // Combine style classes
  const cardClasses = [
    styles.card,
    paddingClass,
    shadowClass,
    radiusClass,
    borderClass,
    hoverable ? styles.hoverable : '',
    isClickable ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ');

  // Keyboard accessibility handler for non-native button elements
  const handleKeyDown = (event) => {
    if (isClickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick(event);
    }
    if (rest.onKeyDown) {
      rest.onKeyDown(event);
    }
  };

  // Resolve interactive roles
  const interactiveProps = isClickable
    ? {
        onClick,
        onKeyDown: handleKeyDown,
        tabIndex: rest.tabIndex ?? 0,
        role: rest.role ?? 'button'
      }
    : {};

  return (
    <Component
      className={cardClasses}
      {...interactiveProps}
      {...rest}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'pill']),
  border: PropTypes.oneOfType([
    PropTypes.oneOf(['none', 'standard', 'primary']),
    PropTypes.bool
  ]),
  hoverable: PropTypes.bool,
  as: PropTypes.elementType,
  onClick: PropTypes.func,
};

export default Card;

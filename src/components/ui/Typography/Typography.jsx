/* src/components/ui/Typography/Typography.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.css';

/**
 * List of valid typography variants supported by the design system.
 * Used for runtime validation and fallback error prevention.
 * @type {string[]}
 */
const VALID_VARIANTS = [
  'hero',
  'h1',
  'h2',
  'h3',
  'h4',
  'bodyLarge',
  'body',
  'bodySmall',
  'caption',
  'button',
  'label',
];

/**
 * Default element mappings for each typography variant to ensure semantic HTML.
 * @type {Record<string, React.ElementType>}
 */
const defaultElements = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  bodyLarge: 'p',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
  button: 'span',
  label: 'span',
};

/**
 * @component Typography
 * @description A production-grade reusable Typography component for rendering
 * consistent, responsive text styles aligned with the Chalachal Technical Services design tokens.
 * It enforces semantic HTML usage and prevents layout reflows on smaller viewports.
 *
 * @example
 * // Render H1 with desktop size ~78px and mobile size ~40px
 * <Typography variant="h1">Dubai Renovation Services</Typography>
 *
 * @example
 * // Override tag to render as standard paragraph for screen readers
 * <Typography variant="h2" as="p">Subheading text here</Typography>
 *
 * @param {Object} props
 * @param {'hero'|'h1'|'h2'|'h3'|'h4'|'bodyLarge'|'body'|'bodySmall'|'caption'|'button'|'label'} [props.variant='body'] - Visual style variant
 * @param {React.ElementType} [props.as] - Optional semantic HTML tag override
 * @param {string} [props.className=''] - Additional custom CSS class name for styling/layout overrides
 * @param {React.ReactNode} props.children - Text content or nested DOM nodes (required)
 */
const Typography = memo(({
  variant = 'body',
  as = undefined,
  className = '',
  children,
  ...rest
}) => {
  // Gracefully fallback to 'body' if an invalid variant is received (error prevention)
  const activeVariant = VALID_VARIANTS.includes(variant) ? variant : 'body';

  // Determine semantic HTML tag: custom 'as' prop, variant default mapping, or fallback 'span'
  const Component = as || defaultElements[activeVariant] || 'span';

  // Scoped styling classes combined with custom parent class names
  const combinedClassName = `${styles.typography} ${styles[activeVariant]} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...rest}>
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

Typography.propTypes = {
  /** Visual style variant corresponding to Figma typography scale */
  variant: PropTypes.oneOf(VALID_VARIANTS),
  /** Optional semantic tag override */
  as: PropTypes.elementType,
  /** Additional custom class names */
  className: PropTypes.string,
  /** Text content or nodes to be styled */
  children: PropTypes.node.isRequired,
};

export default Typography;

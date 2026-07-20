/* src/components/ui/Container/Container.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { CONTAINER_WIDTHS } from './constants';
import styles from './Container.module.css';

/**
 * List of valid max-width values supported by the Container.
 * @type {string[]}
 */
const VALID_WIDTHS = Object.values(CONTAINER_WIDTHS);

/**
 * @component Container
 * @description A production-grade reusable layout constraint wrapper that provides
 * consistent max-widths, horizontal padding, and responsiveness. Every section and
 * page must use this component to align content with the Figma grid.
 *
 * @example
 * // Standard layout container (max-width: 1700px)
 * <Container>
 *   <div>Standard content here</div>
 * </Container>
 *
 * @example
 * // Narrow layout container (max-width: 1200px) for forms or centered lists
 * <Container maxWidth="narrow" as="section">
 *   <h2>Contact Form</h2>
 *   <form>...</form>
 * </Container>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to wrap (required)
 * @param {string} [props.className=''] - Custom CSS class name to merge
 * @param {React.ElementType} [props.as='div'] - Semantic HTML wrapper element tag
 * @param {boolean} [props.fluid=false] - Whether the container is full-width (spans 100% viewport)
 * @param {'standard'|'narrow'|'wide'} [props.maxWidth='standard'] - The layout constraint width (ignored if fluid is true)
 */
const Container = memo(({
  children,
  className = '',
  as: Component = 'div',
  fluid = false,
  maxWidth = 'standard',
  ...rest
}) => {
  // Gracefully fallback to 'standard' if an invalid width option is passed
  const activeWidth = VALID_WIDTHS.includes(maxWidth) ? maxWidth : 'standard';

  // Build combined classes dynamically
  const widthClass = fluid ? styles.fluid : styles[activeWidth];
  const combinedClassName = `${styles.container} ${widthClass} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...rest}>
      {children}
    </Component>
  );
});

Container.displayName = 'Container';

Container.propTypes = {
  /** Child elements to render inside the container */
  children: PropTypes.node.isRequired,
  /** Optional custom styling classes to apply layout overrides */
  className: PropTypes.string,
  /** Override default wrapper HTML element for semantic structure */
  as: PropTypes.elementType,
  /** Spans the full width of the viewport without constraint if true */
  fluid: PropTypes.bool,
  /** Layout constraint widths mapping to design tokens */
  maxWidth: PropTypes.oneOf(VALID_WIDTHS),
};

export default Container;

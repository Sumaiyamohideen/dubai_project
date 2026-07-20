/* src/components/ui/Button/Button.jsx */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './constants';
import styles from './Button.module.css';

const VALID_VARIANTS = Object.values(BUTTON_VARIANTS);
const VALID_SIZES = Object.values(BUTTON_SIZES);

/**
 * @component Button
 * @description A production-ready, highly reusable Button component conforming to the design system.
 * It renders either an anchor `<a>` or a `<button>` based on the `href` prop.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - The button text/label (optional for icon-only buttons)
 * @param {'primary'|'secondary'|'outline'|'text'|'floating'|'icon'} [props.variant='primary'] - Style variant
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {React.ReactNode} [props.icon] - Icon element (SVG / Icon node)
 * @param {'left'|'right'} [props.iconPosition='left'] - Position of the icon relative to children
 * @param {boolean} [props.fullWidth=false] - If true, the button spans 100% width
 * @param {boolean} [props.disabled=false] - Disables interaction and clicks
 * @param {boolean} [props.loading=false] - Disables interaction and renders a loading spinner
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type (ignored if href exists)
 * @param {string} [props.href] - If present, renders the component as an anchor link
 * @param {string} [props.target] - Target attribute for anchor link (e.g., '_blank')
 * @param {string} [props.rel] - Rel attribute for anchor link (e.g., 'noopener noreferrer')
 * @param {string} [props.className=''] - Custom CSS class name to append
 * @param {function} [props.onClick] - Click handler function
 */
const Button = memo(({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  href = undefined,
  target = undefined,
  rel = undefined,
  className = '',
  onClick = undefined,
  ...rest
}) => {
  const activeVariant = VALID_VARIANTS.includes(variant) ? variant : 'primary';
  const activeSize = VALID_SIZES.includes(size) ? size : 'md';

  const isLink = !!href;
  const isCurrentlyDisabled = disabled || loading;

  const combinedClassName = [
    styles.btn,
    styles[activeVariant],
    styles[activeSize],
    fullWidth ? styles.fullWidth : '',
    isCurrentlyDisabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className,
  ].filter(Boolean).join(' ').trim();

  const renderIcon = (position) => {
    if (loading && position === iconPosition) {
      return <span className={styles.spinner} aria-hidden="true" />;
    }
    if (icon && position === iconPosition && !loading) {
      const spacingClass = children
        ? (position === 'left' ? styles.iconLeft : styles.iconRight)
        : '';
      return <span className={spacingClass}>{icon}</span>;
    }
    return null;
  };

  const handleLinkClick = (e) => {
    if (isCurrentlyDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const renderChildren = children ? <span className={styles.label}>{children}</span> : null;

  if (isLink) {
    return (
      <a
        href={isCurrentlyDisabled ? undefined : href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        className={combinedClassName}
        onClick={handleLinkClick}
        role="button"
        tabIndex={isCurrentlyDisabled ? -1 : 0}
        aria-disabled={isCurrentlyDisabled || undefined}
        {...rest}
      >
        {renderIcon('left')}
        {renderChildren}
        {renderIcon('right')}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={isCurrentlyDisabled}
      className={combinedClassName}
      onClick={onClick}
      aria-disabled={isCurrentlyDisabled || undefined}
      {...rest}
    >
      {renderIcon('left')}
      {renderChildren}
      {renderIcon('right')}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(VALID_VARIANTS),
  size: PropTypes.oneOf(VALID_SIZES),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

/* src/components/ui/Icon/Icon.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Lucide from 'lucide-react';

import { ICON_SIZE_MAPS, ICON_SIZES } from './constants';
import { CUSTOM_ICONS } from './iconMap';

import styles from './Icon.module.css';

/**
 * Utility helper to convert kebab-case/camelCase strings to PascalCase.
 * E.g., 'chevron-down' -> 'ChevronDown', 'arrowRight' -> 'ArrowRight'
 *
 * @param {string} str - String to convert
 * @returns {string} PascalCase string
 */
const toPascalCase = (str) => {
  if (!str) return '';
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/[-_\s]+/g, '');
};

/**
 * Unified, highly reusable Icon component that abstracts whether an icon is fetched
 * from `lucide-react` or loaded from local custom brand SVG vectors.
 *
 * @component Icon
 * @param {Object} props
 * @param {string} props.name - The unique identifier of the icon (e.g. 'shield-check', 'phone', 'chevron-down')
 * @param {string} [props.size='md'] - Sizing token ('sm', 'md', 'lg', 'xl') or a numeric/CSS value (e.g., 24, '2rem')
 * @param {string} [props.color] - Color value override (supports hex, rgb, css-variables)
 * @param {string} [props.className] - Additional parent CSS classes for layout/alignment
 * @param {string} [props.title] - Optional screen reader accessible title tooltip
 * @param {boolean} [props.decorative=true] - If true, hides from screen readers. If false, requires title or ariaLabel
 * @param {string} [props.ariaLabel] - Direct aria-label text override
 * @param {number|string} [props.strokeWidth] - Customizable width of paths (mainly for Lucide icons)
 * @param {function} [props.onClick] - Optional click handler for interactive icons
 */
const Icon = memo(({
  name,
  size = ICON_SIZES.MD,
  color = undefined,
  className = '',
  title = undefined,
  decorative = true,
  ariaLabel = undefined,
  strokeWidth = undefined,
  onClick = undefined,
  ...rest
}) => {
  if (!name) {
    if (import.meta.env.DEV) {
      console.warn('[Icon] The "name" prop is required but was not provided.');
    }
    return null;
  }

  // 1. Resolve custom SVG icon lookup (case-insensitive, normalized kebab-case)
  const kebabName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  let SelectedIcon = CUSTOM_ICONS[kebabName];

  // 2. Resolve Lucide fallback lookup (PascalCase conversion)
  if (!SelectedIcon) {
    const pascalName = toPascalCase(name);
    SelectedIcon = Lucide[pascalName];
  }

  // 3. Handle non-existent icons gracefully in production, and warning alerts in dev
  if (!SelectedIcon) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] Icon "${name}" was not found in custom brand assets or lucide-react.`);
    }
    return null;
  }

  // 4. Resolve dimensions (convert SM/MD/LG/XL keys to pixel values, or pass numbers/strings straight through)
  const resolvedSize = ICON_SIZE_MAPS[size] || size || ICON_SIZE_MAPS.md;

  // 5. Build style classes
  const isPredefinedSize = typeof size === 'string' && ['sm', 'md', 'lg', 'xl'].includes(size);
  const sizeClass = isPredefinedSize ? styles[size] : '';
  const classNameMerged = `${styles.icon} ${sizeClass} ${className}`.trim();

  // 6. Accessibility validation & warnings (DEV mode only)
  const ariaHidden = decorative ? 'true' : undefined;
  const resolvedAriaLabel = !decorative ? (ariaLabel || title) : undefined;

  if (import.meta.env.DEV) {
    if (!decorative && !title && !ariaLabel) {
      console.warn(
        `[Icon] Accessible icon "${name}" is missing a "title" or "ariaLabel" prop. ` +
        `Screen readers will not be able to announce this icon.`
      );
    }
  }

  // 7. Inject props into the selected icon (works identically for Lucide and custom SVG wrappers)
  const iconProps = {
    size: resolvedSize,
    color,
    strokeWidth,
    className: classNameMerged,
    'aria-hidden': ariaHidden,
    'aria-label': resolvedAriaLabel,
    onClick,
    title,
    ...rest
  };

  return <SelectedIcon {...iconProps} />;
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    PropTypes.number,
    PropTypes.string
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  decorative: PropTypes.bool,
  ariaLabel: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
};

export default Icon;

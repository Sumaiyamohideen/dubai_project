# Icon Component

The `Icon` component is a unified, highly optimized, and accessible vector wrapper. It abstracts standard UI utility icons (`lucide-react`) and local custom brand SVGs into a single API.

## Features

- **Unified API**: The consumer does not need to know if an icon is a standard Lucide icon or a custom local SVG asset.
- **Auto-Resolution**: Seamlessly resolves kebab-case, PascalCase, or camelCase names to their respective vector files or packages.
- **Strict Accessibility**: Enforces screen reader compliance in development mode (warnings logged for missing labels on semantic/non-decorative icons).
- **Type Safety**: Fully validates all incoming props using `PropTypes`.
- **CSS Variable / Dynamic Styling Support**: Supports standard CSS coloring (`currentColor`) and size presets.

---

## Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | **Required** | Unique key matching a custom brand asset (e.g., `shield-check`, `whatsapp`) or any Lucide icon name (e.g., `arrow-right`, `chevron-down`). |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `'md'` | Presets: `'sm'` (16px), `'md'` (24px), `'lg'` (32px), `'xl'` (48px). Also accepts raw pixel numbers or CSS values (e.g., `2rem`, `100%`). |
| `color` | `string` | `undefined` | Custom fill/stroke color (hex, rgb, or CSS variables). Falls back to CSS `currentColor` (inherits parent font color). |
| `className` | `string` | `""` | Additional CSS module class names for styling or spacing. |
| `decorative` | `boolean` | `true` | If `true`, adds `aria-hidden="true"`. If `false`, either `title` or `ariaLabel` is required. |
| `title` | `string` | `undefined` | Screen reader hover/tooltip title (used if `decorative` is `false`). |
| `ariaLabel` | `string` | `undefined` | Screen reader announcer label override (used if `decorative` is `false`). |
| `strokeWidth` | `number \| string` | `undefined` | Custom stroke width (mainly applied to Lucide icons). |
| `onClick` | `function` | `undefined` | Optional click event handler. |

---

## Sizing Constants

Exported standard sizes:
- `ICON_SIZES.SM` ('sm') = 16px
- `ICON_SIZES.MD` ('md') = 24px
- `ICON_SIZES.LG` ('lg') = 32px
- `ICON_SIZES.XL` ('xl') = 48px

---

## Usage Examples

### 1. Basic Usage (Lucide & Custom Icons)

```jsx
import Icon from '@/components/ui/Icon';

// Renders Lucide's ArrowRight icon
<Icon name="arrow-right" />

// Renders the local brand ShieldCheck custom SVG
<Icon name="shield-check" />
```

### 2. Sizing Presets & Custom Dimensions

```jsx
import Icon, { ICON_SIZES } from '@/components/ui/Icon';

// Using preset size constants
<Icon name="phone" size={ICON_SIZES.LG} />

// Using custom numeric sizes (renders 40px width/height)
<Icon name="award-medal" size={40} />

// Using custom CSS unit values
<Icon name="technician" size="3.5rem" />
```

### 3. Custom Coloring & Transitions

By default, icons use `color="currentColor"`, allowing them to inherit parent hover/active state colors automatically:

```jsx
// Custom hex color
<Icon name="whatsapp" color="#25D366" />

// Using design system tokens
<Icon name="target-pin" color="var(--color-brand-primary)" />
```

### 4. Accessibility Compliance

#### Decorative Icons (Default)
Most icons used alongside text are decorative and should be hidden from screen readers to prevent noise:
```jsx
// Adds aria-hidden="true"
<Icon name="clock" decorative={true} />
```

#### Semantic Icons
Icons acting as buttons or status indicators without surrounding text must contain labels:
```jsx
// Adds role/label markup. Logs a console warning in DEV if label props are missing.
<Icon name="menu" decorative={false} ariaLabel="Open side navigation menu" />
```

---

## Registered Custom Brand Icons

The following custom brand assets are pre-registered inside `iconMap.js`:
- `shield-check`
- `award-medal`
- `user-support`
- `office-building`
- `hospital`
- `shield-search`
- `target-pin`
- `document-report`
- `add-team`
- `storefront`
- `technician`
- `user-star`
- `toolbox`
- `whatsapp`

# Card Component

The `Card` component is a generic visual container designed to serve as the visual base layout for all card-like modules across the project (e.g. Service Cards, Project Cards, Testimonial Cards, etc.). It contains no business logic.

---

## Features

- **Generic Container**: Agnostic to content type. Designed purely as a wrapper.
- **Design Tokens Mapped**: Inherits spacing, colors, radiuses, and shadows directly from design token variables.
- **Strict Accessibility**: Automatically injects `role="button"`, `tabIndex={0}`, and keypress handlers (`Enter`, `Space`) when clickable to guarantee full keyboard nav compliance.
- **Flexible Semantics**: Supports rendering as custom HTML tags (`as="article"`, `as="section"`, etc.) for correct HTML document structuring.
- **Performance Optimized**: Uses `React.memo` to eliminate unnecessary renders.

---

## Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | `null` | The card body content. |
| `className` | `string` | `""` | Additional styling classes. |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Internal content padding using spacing tokens. |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'none'` | Shadow elevation depths. |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'pill'` | `'none'` | Corner border radiuses matching Figma values. |
| `border` | `'none' \| 'standard' \| 'primary' \| boolean` | `'none'` | Border styles. Setting `true` defaults to standard subtle borders. |
| `hoverable` | `boolean` | `false` | Enables translateY lifts and raised elevations on hover. |
| `as` | `elementType` | `'div'` | HTML tag or React element to render as (e.g., `'article'`, `'li'`). |
| `onClick` | `function` | `undefined` | Optional click event handler. |

---

## Configuration Constants

Pre-configured options exported from `@/components/ui/Card/constants.js`:
- `CARD_PADDINGS`
- `CARD_SHADOWS`
- `CARD_RADIUS`
- `CARD_BORDERS`

---

## Usage Examples

### 1. Static Container Card

```jsx
import Card, { CARD_RADIUS } from '@/components/ui/Card';

<Card radius={CARD_RADIUS.LG} border="standard" padding="lg">
  <h3>Card Title</h3>
  <p>Static body text goes here.</p>
</Card>
```

### 2. Interactive Clickable Card (Accessible)

When `onClick` is provided, the card automatically receives keyboard focus outline, hand cursor, click visual feedback, and handles keystrokes:

```jsx
import Card, { CARD_RADIUS, CARD_SHADOWS } from '@/components/ui/Card';

const handleSelect = () => {
  console.log("Card selected!");
};

<Card
  radius={CARD_RADIUS.LG}
  shadow={CARD_SHADOWS.MD}
  hoverable={true}
  onClick={handleSelect}
  as="article"
>
  <h3>Service Card</h3>
  <p>This acts exactly like a native button to screen readers.</p>
</Card>
```

### 3. Border and Shadow Presets

```jsx
import Card from '@/components/ui/Card';

// Subtle standard border card
<Card border={true}>
  <p>Subtle border content</p>
</Card>

// Bold Brand primary border card
<Card border="primary">
  <p>Primary theme highlight content</p>
</Card>

// Floating Card with deep shadow elevation
<Card shadow="lg">
  <p>Sticky elevation preview</p>
</Card>
```

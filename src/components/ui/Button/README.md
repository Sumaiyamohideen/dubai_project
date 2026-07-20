# Button Component

The `Button` component is the single, unified button element used throughout the Chalachal Technical Services LLC website. It adapts its layout and styles dynamically to fit all CTAs, navigation triggers, icon buttons, and floating actions visible in the Figma designs.

---

## Constants

To avoid spelling errors or type issues, the component exports the following configuration objects:

### `BUTTON_VARIANTS`
- `PRIMARY`: Standard filled green action button (`#035a2d`).
- `SECONDARY`: Secondary filled forest green button (`#102e16`).
- `OUTLINE`: Transparent button with a green border and text.
- `TEXT`: Borderless, background-free link style button.
- `FLOATING`: Floating action button (FAB) with a highlight green background (`#00bf5c`) and shadow, used for quick contact triggers (WhatsApp/Call).
- `ICON`: Circular border-bound button designed for lone icons (e.g., slider arrows, menu toggles).

### `BUTTON_SIZES`
- `SM`: Small badges/pills.
- `MD`: Default layout button size.
- `LG`: Primary call-to-actions (pills).

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `node` | `null` | Button label text/nodes |
| `variant` | `string` | `"primary"` | Style variant from `BUTTON_VARIANTS` |
| `size` | `string` | `"md"` | Sizing configuration from `BUTTON_SIZES` |
| `icon` | `node` | `null` | Element/SVG to render as an icon |
| `iconPosition` | `"left" \| "right"` | `"left"` | Alignment of the icon relative to the label |
| `fullWidth` | `bool` | `false` | Stretches button width to fill container if `true` |
| `disabled` | `bool` | `false` | Disables user interaction |
| `loading` | `bool` | `false` | Renders a loading spinner and disables user interaction |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Button element type (ignored if `href` is present) |
| `href` | `string` | `undefined` | Renders an anchor `<a>` element if provided |
| `target` | `string` | `undefined` | Target attribute for links (e.g. `"_blank"`) |
| `rel` | `string` | `undefined` | Rel attribute for links (e.g. `"noopener noreferrer"`) |
| `onClick` | `func` | `undefined` | Button click trigger function |
| `className` | `string` | `""` | Additional styling classes |

---

## Usage Examples

### 1. Primary CTA with Icon
Pill-shaped filled green button with an arrow icon on the right side.
```jsx
import Button, { BUTTON_VARIANTS, BUTTON_SIZES } from '@/components/ui/Button';
import ArrowRightIcon from '@/assets/icons/ArrowRight'; // Example icon

const Hero = () => {
  return (
    <Button 
      variant={BUTTON_VARIANTS.PRIMARY} 
      size={BUTTON_SIZES.LG}
      icon={<ArrowRightIcon />}
      iconPosition="right"
    >
      Explore Services
    </Button>
  );
};
```

### 2. External Navigation Link Button
If the `href` prop is supplied, the component automatically renders a semantic anchor `<a>` element, maintaining correct keyboard focus and click block behavior if disabled.
```jsx
import Button, { BUTTON_VARIANTS } from '@/components/ui/Button';

const Nav = () => {
  return (
    <Button 
      href="https://wa.me/971500000000" 
      target="_blank"
      variant={BUTTON_VARIANTS.OUTLINE}
    >
      Contact via WhatsApp
    </Button>
  );
};
```

### 3. Floating Contact Triggers (FABs)
Uses the floating style, perfect for WhatsApp or Phone widgets anchored in fixed layouts.
```jsx
import Button, { BUTTON_VARIANTS, BUTTON_SIZES } from '@/components/ui/Button';
import PhoneIcon from '@/assets/icons/Phone';

const StickyCall = () => {
  return (
    <Button
      variant={BUTTON_VARIANTS.FLOATING}
      size={BUTTON_SIZES.LG}
      icon={<PhoneIcon />}
      onClick={() => window.open('tel:+971500000000')}
      aria-label="Call technical maintenance service"
    />
  );
};
```

### 4. Slider Nav Buttons (Icon-Only)
Uses the icon variant, which applies circular constraints and centers the child icon node.
```jsx
import Button, { BUTTON_VARIANTS, BUTTON_SIZES } from '@/components/ui/Button';
import ChevronLeft from '@/assets/icons/ChevronLeft';

const Slider = () => {
  return (
    <Button
      variant={BUTTON_VARIANTS.ICON}
      size={BUTTON_SIZES.MD}
      icon={<ChevronLeft />}
      onClick={goPrev}
      aria-label="Previous Slide"
    />
  );
};
```

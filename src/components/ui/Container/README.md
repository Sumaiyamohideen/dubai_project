# Container Component

The `Container` component is the standard layout constraint wrapper for the Chalachal Technical Services LLC website. Every page and page section must use this component to enforce alignment with the Figma grid.

---

## Purpose
- **Layout Alignment**: Constraints page layouts to the 1700px desktop grid width defined in Figma.
- **Horizontal Paddings**: Standardizes side gutters (16px on mobile, 32px on tablet and desktop) to prevent content from touching screen edges.
- **Responsive Sizing**: Handles transitions between mobile viewports (e.g. 412px iPhone) and desktop viewports (1920px).

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `node` | *Required* | Child elements to wrap |
| `className` | `string` | `""` | Optional custom classes to inject spacing or alignment overrides |
| `as` | `elementType` | `"div"` | Overrides the default HTML element for semantic structure (e.g., `"section"`, `"header"`, `"footer"`) |
| `fluid` | `bool` | `false` | Spans 100% of the viewport width if set to `true` (ignores `maxWidth`) |
| `maxWidth` | `"standard" \| "narrow" \| "wide"` | `"standard"` | Layout constraint widths (`standard` = 1700px, `narrow` = 1200px, `wide` = 1920px). Can be passed as strings or via the exported `CONTAINER_WIDTHS` constant. |

---

## Usage Examples

### 1. Standard Section Layout (Default)
Enforces a maximum width of `1700px` (`var(--max-width-container)`) and centers itself.
```jsx
import Container from '@/components/ui/Container';

const ServicesTeaser = () => {
  return (
    <Container as="section" className="services-section">
      <h2>Our Renovation Services</h2>
      {/* Services Grid Content */}
    </Container>
  );
};
```

### 2. Narrow Layout (Forms / Detail Pages)
Enforces a maximum width of `1200px` (`var(--max-width-narrow)`). Uses the type-safe `CONTAINER_WIDTHS` constant to prevent typos.
```jsx
import Container, { CONTAINER_WIDTHS } from '@/components/ui/Container';

const ContactForm = () => {
  return (
    <Container maxWidth={CONTAINER_WIDTHS.NARROW} as="article">
      <h2>Get a Free Quote</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
```

### 3. Full-width Fluid Layout
Spans the entire viewport width (`100%`) without constraint, while retaining side padding.
```jsx
import Container from '@/components/ui/Container';

const Banner = () => {
  return (
    <Container fluid className="full-width-banner">
      <p>Licensed UAE Technical Services Contractor</p>
    </Container>
  );
};
```

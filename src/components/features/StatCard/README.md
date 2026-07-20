# StatCard Component

The `StatCard` is a highly flexible, responsive component designed to display numeric statistics alongside descriptive labels and optional icons. It is used across sections like the Hero header, the 4-item Stats Bar, and About sections.

---

## Folder Structure

```text
src/components/features/StatCard/
├── StatCard.jsx          # Core component logic & layout orchestrator
├── StatCard.module.css   # Scoped Vanilla CSS styles using design tokens
├── constants.js          # Layout orientations, alignments, and color highlights
├── index.js              # Entrypoint file exporting component & constants
└── README.md             # Integration & API documentation (this file)
```

---

## Design System Tokens & Mappings

- **Statistic Value Typography:** Rendered using the `hero` variant of `<Typography />` (scales from `~78px` on desktop down to `~40px` on mobile, font weight: 600, font family: `Host Grotesk`).
- **Label Typography:** Rendered using the `bodyLarge` variant of `<Typography />` (scales from `~20px` on desktop down to `~16px` on mobile, font weight: 500, font family: `Poppins`).
- **Standard Highlight Colors:**
  - `primary`: Deep Green (`--color-brand-primary` / `#035a2d`)
  - `dark`: Dark Forest Green (`--color-brand-secondary` / `#102e16`)
  - `text`: Near Black (`--color-text-primary` / `#0e0e0e`)

---

## API Reference

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `node` | **Required** | The main statistic number or text (e.g., `120+`, `24/7`). |
| `label` | `string` | **Required** | Descriptive label text (e.g., `Completed Projects`). |
| `icon` | `string` \| `node` | `null` | Optional icon name (resolved via custom icons and `lucide-react` registry) or JSX element. |
| `orientation`| `'vertical'` \| `'horizontal'` | `'vertical'` | Stack direction of layout elements. |
| `align` | `'left'` \| `'center'` \| `'right'` | *Auto-detected* | Text and flex alignment. Defaults to `'center'` (vertical) or `'left'` (horizontal). |
| `highlight` | `'primary'` \| `'dark'` \| `'text'` | `'primary'` | High-emphasis color highlight theme for the main statistic value. |
| `variant` | `'plain'` \| `'card'` | `'plain'` | Visual wrapping. Set to `'card'` to wrap in the project's `<Card />` container. |
| `as` | `elementType` | `'div'` | Semantic HTML wrapper tag override when container is `'plain'`. |
| `className` | `string` | `''` | Extra class names passed from parent layouts. |

---

## Code Examples

### 1. Vertical plain stat block (Default Stats Bar style)
```jsx
import StatCard from '@/components/features/StatCard';

const MyStatsSection = () => (
  <div className="stats-grid">
    <StatCard value="10+" label="Years Experience" />
    <StatCard value="2,000+" label="Projects Done" />
  </div>
);
```

### 2. Horizontal stat card with custom brand icon (Card variant)
```jsx
import StatCard from '@/components/features/StatCard';

const HighlightStat = () => (
  <StatCard
    value="24/7"
    label="Technical Support"
    icon="user-support" // Resolves automatically via custom SVG icons
    orientation="horizontal"
    variant="card"
    hoverable
  />
);
```

### 3. Left-aligned Hero Inline Stat (with custom avatar layout wrapper)
```jsx
import StatCard from '@/components/features/StatCard';

const HeroInlineStat = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    {/* Overlapping Avatar Row */}
    <div className="avatar-row">
      <img src="/avatar1.webp" alt="Client 1" />
      <img src="/avatar2.webp" alt="Client 2" />
    </div>
    
    {/* Statistic Text Block */}
    <StatCard
      value="2,000+"
      label="Satisfied Clients"
      align="left"
      orientation="vertical"
    />
  </div>
);
```

---

## Accessibility & SEO Best Practices

1. **Semantic DOM Hierarchy:**
   - Plain layout allows polymorphic `as` tags (e.g. `as="article"` or `as="section"`) to fit nicely inside parent context landmarks.
   - Text elements are rendered as `span` tags inside typography blocks to avoid nesting headings inappropriately.
2. **Screen Reader Integration:**
   - Decorative icons are hidden from screen readers (`aria-hidden="true"`) to prevent audio clutter.
   - Values and labels remain fully readable in a unified stream.
3. **Contrast Compliance:**
   - High-contrast highlight themes comply with WCAG AA guidelines relative to their background contexts.

# Hero Section

The `Hero` section is the primary above-the-fold component for the Chalachal Technical Services LLC website home page. It is structured to follow the Figma design (node `731:1424`).

## Component Specifications

The component is located at `src/components/sections/Hero/` and consists of the following files:
*   `Hero.jsx` - Core React component using `React.memo` and composing atomic UI Kit components.
*   `Hero.module.css` - Scoped Vanilla CSS module styling following mobile-first design system breakpoints.
*   `constants.js` - Data constants file maintaining all textual content and layout metadata.
*   `index.js` - Main entrypoint default export.

## Design System Integration

This component leverages existing UI Kit components from `src/components/ui/` to enforce visual consistency:
*   `<Container>` - Layout width constraint (`max-width: 1700px` standard).
*   `<Typography>` - Semantic font styling (`hero`, `bodyLarge`, `label`).
*   `<Button>` - CTA actions ("GET FREE QUOTE").
*   `<Icon>` - SVG brand indicators ("shield-check", "arrow-right", "plus").

## Spacing & Design Tokens

Styling utilizes tokens defined under `src/styles/tokens/`:
*   Colors: `--color-brand-primary` (#035a2d), `--color-text-primary` (#0e0e0e), `--color-text-medium` (73% black), `--color-bg-gray` (#f0f3f1)
*   Borders & Radius: `--radius-card` (32px), `--radius-pill` (9999px)
*   Spacing: `--spacing-section` (96px), `--spacing-lg` (32px), `--spacing-md` (24px), `--spacing-sm` (16px), `--spacing-xs` (8px)

## Missing Asset Strategy

As defined in `docs/06-ai-agent-instructions.md` (Raster Asset Policy):
*   Background image columns and avatar social proof images are not yet provided in the repository's centralized assets.
*   The layouts for these image areas are fully implemented and visually placeholder-safe (rendering empty containers and neutral backgrounds).
*   No generic stock photos or programmatic placeholding is generated. The component is ready to import real assets once delivered.

## Responsive Adaptation

*   **Mobile (< 768px)**: Collapses into a single-column block. Decorative gradient overlays and scrolling image columns are completely hidden to conserve viewport space.
*   **Tablet (768px - 1023px)**: Adjusts grid column gap sizes, font scaling, and container gutters.
*   **Desktop (1024px+)**: Splits visually into a content zone on the left (spanning up to 54rem max-width) and overlapping columns of decorative service card photography on the right.

## Accessibility (A11y)

*   Wraps in a semantic `<section>` element with a descriptive `aria-label="Hero"`.
*   Includes a single primary `<h1>` element (rendered via `<Typography variant="hero">`).
*   Hides all decorative background graphics and layout placeholders from assistive technologies using `aria-hidden="true"`.
*   Supports user systems with sensitive motion preferences via `@media (prefers-reduced-motion: reduce)`.

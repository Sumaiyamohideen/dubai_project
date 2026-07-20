# Navbar Component

## Purpose
Sticky site-wide navigation bar used on every page of the application.  
Rendered by `MainLayout` — never imported directly from a page component.

## Figma Reference
| Element | Node ID | Dimensions |
|---|---|---|
| Desktop bar | `731:1828` | `1920×151px`, `y=0` |
| Logo area | `731:1829` | `123×100px` at `x=94, y=25` |
| Nav pill bg | `731:1830` | `788×63px` |
| Phone icon | `731:1839` | `17×17px` |
| Phone text | `731:1838` | `+971 55 457 9790` |
| FREE QUOTE btn | `731:1836` | `181×59px` at `x=1629` |
| Mobile comp | `Component 27` | Frame 17 (collapsed) / Frame 18 (expanded) |

## Logo Asset
The logo image is **not yet available**.  
Expected at: `public/assets/images/logo/company-logo.svg`  
The component renders it via `<img src="/assets/images/logo/company-logo.svg" />`.  
Until the asset is delivered by the designer, an `onError` handler displays the company name as a text fallback — the layout is fully intact.

**Do not generate a replacement image.**

## Usage
```jsx
// This component is mounted by MainLayout — do not import in pages.
import Navbar from '@/components/layout/Navbar';

<Navbar />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Extra class applied to the `<header>` element for exceptional overrides. |

## Behaviour
| State | Description |
|---|---|
| **Default** | Transparent background, visible over hero section. |
| **Scrolled** | White background + subtle box-shadow after 20px scroll. |
| **Mobile closed** | Logo + hamburger icon on a 80px bar. |
| **Mobile open** | Full-screen brand-green overlay, nav links stacked vertically, phone + CTA in footer area. |

## Data Source
All content is imported from `src/constants/navData.js`.  
**Never hardcode nav labels or phone numbers inside the component.**

## Accessibility
- `<header>` landmark element.
- `<nav aria-label="Primary navigation">` for desktop.
- `<nav aria-label="Mobile primary navigation">` for overlay.
- Hamburger button: `aria-expanded`, `aria-controls`, `aria-label` toggled by state.
- Mobile menu: `role="dialog"`, `aria-modal`, `aria-hidden` when closed.
- All links have `:focus-visible` outlines.
- `Escape` key closes the mobile menu.
- `prefers-reduced-motion` disables all transitions.

## Responsive Breakpoints
| Breakpoint | Behaviour |
|---|---|
| `≥ 1024px` | Full desktop bar — pill links, phone, CTA visible. |
| `< 1024px` | Compact 80px bar — only logo + hamburger visible. |

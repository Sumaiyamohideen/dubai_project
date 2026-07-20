# Chalachal Technical Services LLC — Permanent Development Guide
**File Version:** 1.0.0  
**Target Project:** Vite + React + Vanilla CSS Modules

This document serves as the permanent, authoritative development guide for the Chalachal Technical Services LLC web application. All developers and AI assistants must strictly adhere to these rules. Any code that violates these principles will be rejected in code reviews.

---

## Table of Contents
1. [Project Philosophy](#1-project-philosophy)
2. [Folder Structure Rules](#2-folder-structure-rules)
3. [File Naming Rules](#3-file-naming-rules)
4. [React Component Rules](#4-react-component-rules)
5. [CSS Modules Rules](#5-css-modules-rules)
6. [JavaScript Standards](#6-javascript-standards)
7. [Import Rules](#7-import-rules)
8. [Component Reusability Rules](#8-component-reusability-rules)
9. [Page Assembly Rules](#9-page-assembly-rules)
10. [Section Creation Rules](#10-section-creation-rules)
11. [Layout Rules](#11-layout-rules)
12. [Responsive Design Rules](#12-responsive-design-rules)
13. [Accessibility Rules](#13-accessibility-rules)
14. [Performance Rules](#14-performance-rules)
15. [Animation Rules](#15-animation-rules)
16. [Design Token Rules](#16-design-token-rules)
17. [Figma Implementation Rules](#17-figma-implementation-rules)
18. [Data-Driven Development Rules](#18-data-driven-development-rules)
19. [Code Duplication Rules](#19-code-duplication-rules)
20. [Git Commit Conventions](#20-git-commit-conventions)
21. [Code Review Checklist](#21-code-review-checklist)
22. [Things That Must Never Be Done](#22-things-that-must-never-be-done)
23. [AI Development Rules](#23-ai-development-rules)

---

## 1. Project Philosophy
- **Figma Fidelity:** Maintain absolute visual fidelity to the Figma mockups. If the mockups have gaps or logical conflicts, flag them before implementing; never make assumptions or invent layout paradigms.
- **Component-Driven Construction:** Build the site using modular, self-contained components. Every interface block is either an atomic UI component, a composite layout section, or a page assembler.
- **Zero-Hardcoding Policy:** Spacings, colors, typography, borders, and animations are strictly bound to CSS custom properties (design tokens).
- **Maintenance First:** Prioritize clean, readable, and highly documented code. Code is written for human readability and longevity.

---

## 2. Folder Structure Rules
The repository follows a strict modular structure under `src/`. Do not create arbitrary files in root subdirectories.

```
src/
├── assets/           # Structured global assets:
│   ├── images/       # Photographic images
│   ├── icons/        # Icon SVGs / packs
│   ├── logos/        # Company and brand logos
│   ├── illustrations/# Vector illustrations and maps
│   ├── fonts/        # Self-hosted typography files
│   └── ...
├── components/
│   ├── layout/       # App-wide structural layout (MainLayout, Header, Footer)
│   ├── sections/     # Large, page-specific layout blocks (Hero, StatsBar, FAQAccordion)
│   └── ui/           # Atomic, project-agnostic UI elements (Button, Badge, LocationChip)
├── constants/        # Centralized static data files (navLinks.js, servicesData.js)
├── hooks/            # Shared, project-wide custom React hooks
├── pages/            # Page-level container assemblies (Home.jsx, About.jsx, Contact.jsx)
├── routes/           # Centralized React Router configuration
├── services/         # API integration files or static database mocks
├── styles/           # Global stylesheets, CSS reset, and design tokens
└── utils/            # Pure utility helper functions
```

### Component Isolation Rule
Every component must reside in its own folder under `components/` or `pages/` with its styling, logic, and index entrypoint co-located.
```
src/components/ui/Button/
├── Button.jsx
├── Button.module.css
└── index.js
```
The `index.js` file must export the component by default:
```javascript
export { default } from './Button';
```
*Never place CSS styles in the same folder as a component if they do not belong to that component.*

---

## 3. File Naming Rules
Consistency in file naming ensures frictionless navigation and autocompletion.

- **React Components / Pages:** `PascalCase`. Use `.jsx` extensions.
  - *Correct:* `Button.jsx`, `MainLayout.jsx`, `FAQAccordion.jsx`
  - *Incorrect:* `button.jsx`, `Main_layout.jsx`, `FAQAccordion.js`
- **CSS Modules:** `PascalCase.module.css` (matching the component name exactly).
  - *Correct:* `Button.module.css`, `FAQAccordion.module.css`
  - *Incorrect:* `button.module.css`, `faq-accordion.css`
- **Constants, Hooks, Utils, Routes, & Services:** `camelCase` with `.js` extensions.
  - *Correct:* `useScrollToTop.js`, `servicesData.js`, `cn.js`
  - *Incorrect:* `UseScrollToTop.js`, `ServicesData.jsx`
- **Asset Filenames:** `lowercase-kebab-case`.
  - *Correct:* `logo-header.png`, `whatsapp-icon.svg`
  - *Incorrect:* `WhatsApp Image 2026-06-03.png`

---

## 4. React Component Rules
- **Single Responsibility Principle (SRP):** Each component must do exactly one thing. If a component grows past **150 lines**, it must be broken down into sub-components.
- **Explicit Prop Destructuring:** Always destructure props in the component's function signature.
  ```jsx
  // Correct
  const ServiceCard = ({ title, description, imageUrl, link }) => { ... };
  
  // Incorrect
  const ServiceCard = (props) => { ... props.title ... };
  ```
- **Default Props:** Provide clean defaults or use optional chaining (`?.`) to prevent runtime render crashes.
- **Pure Rendering:** React components must remain pure. Side effects belong exclusively inside `useEffect` or event handlers.
- **Default Exports:** Export the main component as default at the end of the file.

---

## 5. CSS Modules Rules
To prevent global scope pollution, all styles must be written inside CSS modules.

- **Class Naming Convention:** Use `camelCase` for CSS class names to ensure seamless access inside JS.
  - *Correct:* `.cardContainer`, `.primaryButton`, `.faqAnswerActive`
  - *Incorrect:* `.card-container`, `.PrimaryButton`
- **Strict Scoping:** Never write raw tag selectors (`div`, `p`, `h1`) directly at the root level of a CSS Module unless wrapped inside `.moduleClass h1 {}` or `:global()`.
- **Referencing Tokens:** Reference variables from `src/styles/variables.css` exclusively.
- **Class Composition:** Use classnames utilities or simple templates to join styles:
  ```javascript
  import styles from './Button.module.css';
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;
  ```

---

## 6. JavaScript Standards
- **ES6+ Features:** Prefer arrow functions, template literals, optional chaining (`?.`), and nullish coalescing (`??`).
- **Immutable Operations:** Use `map()`, `filter()`, `reduce()`, and spread operators (`[...]`, `{...}`) instead of mutating arrays/objects directly.
- **Async Code:** Use `async/await` syntax for asynchronous logic with robust `try/catch` error-handling blocks.
- **Linting & Formatting:** Keep your code clean by conforming strictly to Prettier and ESLint configurations (semi-colons, single quotes, and 2-space indentation).

---

## 7. Import Rules
Maintain a structured, logical order for imports in every file.

```javascript
// 1. React Core and React Libraries
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 2. Third-Party Libraries / Packages
import PropTypes from 'prop-types';

// 3. Absolute Imports (using @/ aliases)
import { SERVICES } from '@/constants/servicesData';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// 4. Relative Sub-components and Layout Elements
import Button from '@/components/ui/Button';

// 5. CSS Modules (Always the very last import)
import styles from './FAQAccordion.module.css';
```
*Note: Absolute imports are mapped to the `@/` prefix pointing to `src/`. Relative pathing hell (e.g., `../../../../components`) is strictly forbidden.*

---

## 8. Component Reusability Rules
- **No Duplicate Layout Markup:** If a visual element appears more than once (e.g., service cards, stat rows, action buttons, pills), it **must** be designed as a reusable component in `src/components/ui/` or `src/components/sections/`.
- **Parametric Customization:** Components must be generalized via props.
  - Use `variant` props to handle visual states (e.g. `<Button variant="solid-pill">`).
  - Use `className` props to allow parents to inject structural margins or flex positioning.
- **UI Button Specifications:** Button components must support the three distinct variants observed in Figma:
  1. `primary-pill`: White background, deep green text, circular green icon chip with white arrow.
  2. `solid-pill`: Deep green `#035a2d` background, white text.
  3. `text-link`: Brand-green text, inline arrow icon, no background container.

---

## 9. Page Assembly Rules
- **Pages as Orchestrators:** Pages under `src/pages/` must not contain direct styling, margins, grid definitions, or raw JSX structural layouts.
- **Assembler Pattern:** Pages must import and compose section components inside layout wrappers.
  ```jsx
  // Correct Page Assembly
  import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
  import { Hero } from '@/components/sections/Hero/Hero';
  import { StatsBar } from '@/components/sections/StatsBar/StatsBar';
  import { ServiceTeaser } from '@/components/sections/ServiceTeaser/ServiceTeaser';
  
  const Home = () => (
    <MainLayout>
      <Hero />
      <StatsBar />
      <ServiceTeaser />
    </MainLayout>
  );
  
  export default Home;
  ```
- **SEO & Metadata:** Define page titles and meta descriptions at the page container layer (using a meta management component or hooks) to guarantee SEO discoverability.

---

## 10. Section Creation Rules
- **Location:** All section components must sit in `src/components/sections/`.
- **HTML Element:** Wrap each section in a semantic `<section>` element.
- **Section Padding:** Apply vertical padding to sections uniformly using the spacing variable `var(--spacing-section)`.
- **Inner Constraints:** Sections must use a standard wrapper class that enforces the `max-width` limit (`--max-width-container` / 1700px) and centers content on desktop.
- **Data Dependency:** Sections containing lists (e.g. FAQ list, Testimonials grid) must map over constants rather than hardcoding children.

---

## 11. Layout Rules
- **App Wrapper Layout:** Maintain a global `MainLayout` wrapping component containing the persistent `Header` (navbar) and `Footer`.
- **Figma Grid Constraints:**
  - **Desktop:** Force a max width of `1700px` for layout containers (`--max-width-container`) with side margins automatically centered (`margin: 0 auto`).
  - **Mobile:** Fixed target width of `412px` (iPhone/Android compact layout) with `26px` to `30px` side margins.
- **Positioning Rules:** Utilize CSS Flexbox and CSS Grid systems for major layouts. Absolutely positioned layers should only be used for floating UI nodes (like floating WhatsApp / Call buttons) or background decorators.

---

## 12. Responsive Design Rules
- **Mobile-First CSS:** Implement styles mobile-first. Write base styles for mobile widths, then wrap desktop overrides in media queries.
  ```css
  /* Mobile-first base styling */
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  /* Desktop styling */
  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-lg);
    }
  }
  ```
- **Key Breakpoints:**
  - Mobile Base: Up to `767px` (Mobile Mockup target is `412px`).
  - Tablet: `768px` to `1023px`.
  - Desktop: `1024px` and up (Desktop Mockup target is `1920px`).
- **Breakpoint Conversions (Figma to Code):**
  - **Stats Bar:** Stacks as a `2x2` grid on mobile; converts to a `1x4` horizontal row on desktop.
  - **Cards / Services Listing:** Stacks vertically on mobile (360px wide); switches to a multi-column row/grid on desktop.
  - **Mobile Navigation:** The desktop horizontal bar collapses into a hamburger icon. The hamburger must toggle a full-screen overlay component matching the Figma variant (`Component 27`, `Frame 18`).

---

## 13. Accessibility Rules
- **Semantic HTML Only:** Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<a>`) rather than using `<div onClick={...}>`.
- **Keyboard Operability:** Every interactive element must be focusable via `Tab` key. Custom buttons or interactive cards must support the `Enter` and `Space` key actions.
- **ARIA Integration:** Use ARIA attributes dynamically for interactive toggles.
  - Accordion headers must have `aria-expanded="true|false"` and `aria-controls="panel-id"`.
  - Mobile burger menus must use `aria-label="Toggle navigation menu"`.
- **Image Accessibility:** Images require descriptive `alt` tags. Background decorative layouts or image cards without textual value must use `alt=""` or `role="presentation"`.
- **Focus Indicators:** Never suppress default outline highlights unless replaced with custom focus rings (`:focus-visible` or active shadows).

---

## 14. Performance Rules
- **Image Optimization:** 
  - Convert heavy assets to `.webp` or compressed `.svg` formats.
  - Force lazy loading on all lower-page images (`loading="lazy"`).
  - Explicitly define `width` and `height` properties to prevent layout shifting (CLS).
- **Code Splitting:** Implement `React.lazy` and `Suspense` at the router layer to load pages in small chunks on demand.
- **Minimal Renders:** Avoid unnecessary state changes. Wrap complex inline calculations in `useMemo` and event handlers passed to child trees in `useCallback`.
- **Font Optimization:** Load typography families (Host Grotesk, Poppins, Geist, Inter) efficiently via system-level fonts or self-hosted Google Fonts to eliminate render delays.

---

## 15. Animation Rules
- **Smoothness:** Restrict animations to hardware-accelerated CSS properties (`transform`, `opacity`). Never animate layout properties like `height`, `width`, `top`, or `left`.
- **Micro-Animations:** Use the standard transition token (`var(--transition-normal)`) for all button and card hover responses:
  - Cards should shift vertically (`transform: translateY(-4px)`) and slightly increase shadow depth on hover.
  - Nav links should fade opacity or render subtle underlines.
  - Button arrow icons should translate slightly to the right (`transform: translateX(4px)`) on hover.
- **Accordion Transitions:** Maximize accordion fluidity by utilizing CSS transitions for collapsible height properties safely (e.g. grid-template-rows transition or CSS variables).
- **Accessibility Safeguard:** Respect user browser settings by disabling animations for users requesting reduced motion:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
  ```

---

## 16. Design Token Rules
Direct hex codes, pixel sizes, and arbitrary layout units are strictly banned inside component styling. You must reference variables inside `src/styles/variables.css`.

### Forbidden vs. Allowed CSS Styles:
```css
/* FORBIDDEN */
.card {
  color: #0e0e0e;
  background-color: #ffffff;
  font-size: 24px;
  padding: 24px;
  border-radius: 32px;
  box-shadow: 0px 0px 16px rgba(0,0,0,0.2);
}

/* ALLOWED */
.card {
  color: var(--color-text-primary);
  background-color: var(--color-white);
  font-size: var(--font-size-card-title);
  padding: var(--spacing-md);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
}
```

---

## 17. Figma Implementation Rules
- **Fidelity Checklist:** Developers must translate sizing, borders, and margins precisely using CSS variables that approximate Figma specifications.
- **Handling Figma Design Discrepancies:**
  - **FAQ Accordion Content:** The Figma design contains placeholder copy belonging to an IT-training organization ("Skillanic"). Replace this placeholder copy with real services copy for Chalachal Technical Services LLC, maintaining the structural design.
  - **Mobile Nav Menu Content:** The Figma collapsed mobile nav contains leftover styling links from a spa template ("SPA MENU", "LOCATIONS", "BOOK NOW"). Strip this placeholder copy and bind the mobile nav to the standard nav links constants.
  - **Missing Breakpoint Frames:** Figma lacks mobile mockups for 11 out of the 21 Service details pages and 1 Projects page. Implement these missing screens by cloning the layouts of the existing, fully documented responsive templates.
  - **Logo Assets:** The Figma logo is a raster image. Export it as a clean WebP file and write an implementation item to swap it with a vector SVG version if provided by the client later.

---

## 18. Data-Driven Development Rules
- **No Inline Text Lists:** All content arrays, navigation link matrices, services collections, testimonials, and FAQ items must be stored inside Javascript constant array configuration files inside `src/constants/`.
- **Consistent Data Shapes:** Elements within collections must conform to clean objects.
  ```javascript
  // Example: src/constants/servicesData.js
  export const SERVICES = [
    {
      id: 'wallpaper-fixing',
      title: 'Wallpaper Fixing & Installation',
      description: 'Expert wallpaper fixing and customized wall-sticker installations...',
      imageUrl: '/assets/images/services/wallpaper.webp',
      link: '/services/wallpaper-fixing'
    },
    // ... remaining services
  ];
  ```

---

## 19. Code Duplication Rules
- **DRY Principle:** Do not copy-paste code snippets. If similar layouts or functions exist, centralize them.
- **Responsive Parity:** Never maintain separate desktop and mobile files for the same component (e.g., do not write `HeroDesktop.jsx` and `HeroMobile.jsx`). Construct a single component that uses media queries to alter layout dynamically.
- **Common CSS Utilities:** Avoid copy-pasting standard styling rules (such as page title underlines, flex row setups, or shadow borders). Use variables and shared global styles inside `src/styles/global.css`.

---

## 20. Git Commit Conventions
We use the Angular semantic git commit format to make history clear, readable, and machine-parsable.

### Format: `<type>(<scope>): <subject>`

- **Types:**
  - `feat`: A new user-facing feature.
  - `fix`: A bug fix.
  - `docs`: Documentation changes only.
  - `style`: Formatting, semi-colons, white-spaces (no logic changes).
  - `refactor`: Restructuring code (no performance, style, or feature changes).
  - `perf`: Code changes that optimize performance.
  - `chore`: Infrastructure updates, package configs, build adjustments.
- **Scope:** The area of code changed (e.g., `faq`, `hero`, `nav`, `deps`).
- **Examples:**
  - `feat(faq): implement accordion item expansion logic`
  - `fix(nav): fix overlay click bounding box in mobile view`
  - `style(components): remove dangling double spaces in Button.jsx`

---

## 21. Code Review Checklist
Before creating a Pull Request, verify that the implementation answers **YES** to all these questions:

1. [ ] Are all styling units, colors, fonts, and spacings linked directly to CSS variables?
2. [ ] Does the page compile cleanly with zero console warnings or Prettier styling issues?
3. [ ] Are list elements (services, testimonials, FAQs) driven by array constants?
4. [ ] Have you tested the layout responsively on both `412px` (mobile) and `1920px` (desktop)?
5. [ ] Is the page layout keyboard-operable, and does it use semantic HTML tags?
6. [ ] Are all images optimized, using WebP/SVG with `loading="lazy"` tags applied?
7. [ ] Have placeholder values (like "Skillanic" or SPA nav menus) been fully removed?

---

## 22. Things That Must Never Be Done
1. **Never use inline styles:** Inline styling (`style={{ color: '#035a2d' }}`) is strictly prohibited.
2. **Never hardcode hex values or spacings:** Do not write values like `margin: 20px;` or `color: #035a2d;` in components or modules.
3. **Never duplicate markup:** Do not build separate desktop/mobile components or hardcode loops of elements.
4. **Never use utility frameworks:** Do not import Tailwind CSS, Bootstrap, or any utility-first library unless explicitly requested. Use Vanilla CSS Modules.
5. **Never use `!important`:** Do not use `!important` to force layout fixes; resolve CSS cascade issues correctly.
6. **Never leave console statements:** Clean up all `console.log` statements before committing code.
7. **Never break semantic HTML:** Do not use `<div>` or `<span>` for click actions when `<button>` or `<a>` is the correct element.
8. **Never modify unrelated files:** When implementing a feature, modify only the files required for that feature. Do not refactor or edit unrelated code.

---

## 23. AI Development Rules
When an AI coding assistant performs tasks in this codebase, it must obey these instructions:

- **Strict Adherence:** Treat `docs/01-project-rules.md` as the absolute law. Any file edits must conform to these rules.
- **No Verbose Comments:** Write clean, descriptive code. Do not insert obvious comments (e.g. `// this renders a div`). Only document complex, non-obvious business logic.
- **No Placeholders:** Never generate code blocks containing placeholders (e.g., `// TODO: implement this`). Write complete, functional code.
- **Validation:** When introducing components, confirm that they fit within the Vite React structure and do not duplicate existing components.
- **Duplication Prevention:** Before creating any new component, search the codebase to see if a reusable version already exists. Never create duplicate components.
- **Scope Contraction:** Modify only the files required for your specific feature task. Do not engage in unsolicited refactoring of unrelated code.
- **Image Generation:** If mock assets or images are required, the AI must use local system asset generation or explicitly note missing assets without placing dummy links.

---

## 24. Asset Import Rule
- **No Direct Component Imports:** Components must never import image files directly.
- **Centralized Exports:** All image imports must go through `src/assets/images/index.js`.
- **Structured Directories:** New assets must follow the approved folder structure and naming convention.
- **Descriptive Names:** Asset filenames must describe their purpose, not their original Figma export names.


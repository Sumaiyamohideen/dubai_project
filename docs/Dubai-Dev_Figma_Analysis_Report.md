# Figma Design Analysis Report — "Dubai Dev (Copy)"
**Site subject:** Chalachal Technical Services LLC — a UAE technical maintenance & renovation company (electrical, plumbing, painting, carpentry, waterproofing, flooring, wall tiling, aluminum & glass, welding, wallpaper/wall-sticker installation).

**File key:** `UZNBdQfC5V6RFfrFoHbM4X`

**Pages confirmed in the file:**
| Page | Node ID | Contents |
|---|---|---|
| Lap Screen | `0:1` | Desktop designs (1920px-wide frames) |
| Assets | `746:670` | Not analyzed — the Figma MCP connection hit its tool-call rate limit before this page could be opened. Its contents are **not** documented below; nothing about it should be assumed. |
| Mobile screen | `75:3863` | Mobile designs (412px-wide frames) |

> **Scope note on method:** This report is built from the file's node metadata (layer tree, names, positions, sizes), rendered screenshots of the primary desktop screens, and targeted design-context pulls on specific components (FAQ accordion, hero heading, CTA button, mobile nav, a service card). Every fact below traces to one of those. Where something could not be confirmed (see "Interactive Behaviour"), it is labeled as inferred rather than presented as fact.

---

## 1. Screen Inventory

The file is built as **one long horizontal canvas per breakpoint**, with each "screen" being a frame on that canvas, rather than separate Figma pages per screen.

### Desktop (canvas "Lap Screen", 1920px frames)
| Screen | Desktop | Mobile equiv. | Main sections visible | Notable components |
|---|---|---|---|---|
| Home page (×2 near-identical copies: `731:1424`, `731:1840`) | ✅ | ✅ (`Home`, `Android Compact - 19`) | Nav header, hero (badge, H1, subtext, 2 CTAs, avatar row, stat), 4-stat bar, services teaser, about teaser, fit-out feature block, projects teaser, testimonials, service-area map, FAQ accordion, CTA banner, footer | Nav bar, hero CTA button, stat blocks, service cards, testimonial cards, FAQ accordion (Component 24), footer, floating WhatsApp/Call buttons |
| About page (`731:2285`) | ✅ | ✅ (`About`) | Nav header, page hero copy, "Built on Trust" section, "The Chalachal Advantage" checklist (4 items), CTA banner, footer | Nav bar, checklist rows, CTA banner, footer |
| Service page (`731:2414`) | ✅ | ✅ (`Service 1`–`Service 10`, mobile only covers 10 of the 21) | Nav header, service grid/listing, footer | Service cards (repeated), nav, footer |
| Service Details Page (×21, `731:2636` → `731:4473`) | ✅ | ⚠️ Partial — mobile has only 10 "Service" frames + 1 generic "Service detail page" (`731:7368`), not 21 | Nav header, single-service detail template, footer | Same template reused per service |
| Projects page (×5, `731:4564`,`4703`,`4779`,`4871`,`4955`) | ✅ | ✅ (`Project 1`–`Project 4`, 4 of 5) | Nav header, project gallery, footer | Project cards (repeated) |
| Contact page (`731:5039`) | ✅ | ✅ (`Contact`) | Nav header, contact content, footer | Nav, footer |

**Mobile-only extra nodes:** `Component 27` (`731:7857`) and `Component 28` (`731:7896`) are standalone component frames, not full pages — they are the mobile navigation component in its two variant states (see Section 2/9/10).

---

## 2. Reusable Component Inventory

> Caveat: apart from the FAQ block and the mobile nav, this file is **not** built from a formal Figma component library — most "components" are duplicated groups with matching layer names/positions across pages, not linked master components/instances. This matters for implementation: the repetition is real and reliable, but there's no Figma-side single-source-of-truth to sync from except the two true components noted below.

| Category | Where it appears | Reused? | Variants observed |
|---|---|---|---|
| **Header / Navbar** | Every desktop & mobile page (identical rect/text IDs pattern confirmed on Home + About) | Yes, duplicated per page | Desktop: full horizontal bar. Mobile: true Figma component (`Component 27`) with a `property1` variant prop — see Navigation below |
| **Footer** | Every page (confirmed identical "Group 55" structure across Home/About) | Yes, duplicated per page | Single variant |
| **Buttons** | Hero, CTA banner, cards, nav | Yes, several repeats | See Section 3 |
| **Cards (Service/Project)** | Home teaser, Service listing, Projects listing | Yes | Image + heading + description + "Learn more" link |
| **Stat block** | Hero inline stat, 4-item stats bar | Yes | Big number + label, no border |
| **Testimonial card** | Home page trust section | Yes (multiple, star + name + location) | Star rating + quote-adjacent caption |
| **Badge/pill** | Hero "Licensed UAE Technical Services" | Single instance, pattern reusable | Icon + label pill |
| **FAQ Accordion** | Home page, `Component 24` | **True Figma component instance** | 4 Q&A rows, each a `<button>`-equivalent row with divider |
| **Mobile Nav** | `Component 27` | **True Figma component with a variant property** | `Frame 17` (collapsed bar) / `Frame 18` (expanded overlay menu) |
| **Location/Emirate chip** | Service-area map section | Yes, 7 repeats | Icon + emirate name |
| **Floating action buttons** | Bottom of Home/footer area | Yes | WHATSAPP / CALL pill pair |

---

## 3. Component Variants

**Buttons**
- Primary pill (white bg, brand-green text + circular green icon chip with white arrow) — e.g. "GET FREE QUOTE"
- Solid pill (brand-green bg `#035a2d`, white text) — e.g. "WHATSAPP US", mobile expanded-menu "FREE QUOTE"
- Text link with arrow icon, no background — "Learn more", "VIEW ALL"
- Small badge/pill — "Licensed UAE Technical Services" (icon + label, light background)
- Small dark tag pill — "BOOK NOW" style (only found inside the leftover/mismatched mobile-nav content, see Section 9 flag — appears to be unused template debris, not part of the real UI)

**Mobile Nav component (`Component 27`) variants**
- `Frame 17` — collapsed state: logo + hamburger icon only
- `Frame 18` — expanded state: full-screen/overlay dropdown with nav links + CTA pill

**Cards**
- Service/Project card: white surface, large radius, drop shadow, image, heading, description, "Learn more" link
- Testimonial card: star row + name + project/location caption, no visible container border in the sampled instance

**Text/opacity variants (used instead of distinct color tokens for hierarchy)**
- Full-opacity black/`#0e0e0e` — headings
- 86% opacity black — sub-headings (e.g. FAQ question line)
- 73% opacity black — body copy (e.g. FAQ answers)
- 61% opacity black — card descriptions

No hover/disabled/active button states could be confirmed (see Section 10).

---

## 4. Layout Patterns

- **Hero section** — badge + H1 (with a brand-color accent phrase) + subtext + dual CTA + inline stat/avatar row, on Home page.
- **Full-width stat bar** — 4 evenly spaced number+label blocks directly under the hero (desktop: 1 row of 4; mobile: 2×2 grid).
- **Card grid / teaser row** — repeated on Home (services teaser), Service page (full listing), Projects page (gallery).
- **Two-column feature block** — image + paragraph pairing, used for "fit-out"/quality-focused content blocks on Home and About.
- **Checklist section** — About page's "The Chalachal Advantage", 4 rows of icon + statement.
- **Service-area map layout** — central map illustration with 7 surrounding location chips in two columns.
- **FAQ accordion list** — stacked rows with divider lines between each.
- **CTA banner** — centered heading + subtext + two side-by-side buttons, full-width rounded panel; appears on Home and About in an identical position/structure.
- **Footer layout** — 3-column link layout (Services / Service Areas / Contact) + company blurb + logo, with floating WhatsApp/Call buttons anchored near the bottom.
- **Navigation layout** — desktop: single horizontal bar (logo, 5 links, phone number, CTA pill) at fixed top position (`y=0`, full 1920 width, 151px tall); mobile: compact bar that expands into an overlay menu.

---

## 5. Typography

Extracted directly from node styles (font sizes below are at the file's native canvas scale, not necessarily 1:1 with intended rendered CSS px):

| Role | Font family / weight | Size (canvas px) | Color | Example |
|---|---|---|---|---|
| H1 (hero) | Host Grotesk, SemiBold | 78.19px | `#0e0e0e`, accent phrase in `#035a2d` | "Professional Technical Services & Maintenance Solutions **Across UAE**" |
| Card heading | Host Grotesk, SemiBold | 32.35px | `#0e0e0e` | "Wallpaper Fixing Installation" |
| Card link | Host Grotesk, Medium | 23.84px | `#035a2d` | "Learn more" |
| Card description | Poppins, Medium | 20.45px | black @ 61% opacity | service card copy |
| CTA button label | Poppins, SemiBold | 20.54px | `#035a2d` or white depending on button variant | "GET FREE QUOTE" |
| Mobile nav links | Poppins, Bold (active) / Medium (others) | ~11.3–16px | `#102e16` | "HOME", "ABOUT", etc. |
| FAQ question | Geist, Medium | 39.84px | black @ 86% opacity | "What types of courses does Skillanic offer?" *(see content flag, Section 9)* |
| FAQ answer | Inter, Medium | 30.11px | black @ 73% opacity | accordion answer copy |

**Font families in use across the file:** Host Grotesk, Poppins, Geist, Inter. No single unified type scale was found in named text styles — sizes vary per instance rather than being pulled from a shared style library.

---

## 6. Color Usage

| Category | Value | Usage |
|---|---|---|
| Primary / Brand | `#035a2d` (deep green) | CTA button fills/text, link text, icon chips, accent heading spans |
| Secondary dark | `#102e16` (darker green) | Mobile nav text/badges |
| Text (headings) | `#0e0e0e` | Near-black headings |
| Text (body hierarchy) | Black at 86% / 73% / 61% opacity | Used instead of distinct gray hex values for secondary/tertiary text |
| Surface | White | Card and button backgrounds |
| Header/hero background | Image fill (photographic texture), not a flat color | Confirmed on the nav bar rectangle — it renders from an image asset, not a CSS color |

No warning/success/danger/error color usage was found anywhere in the sampled screens.

---

## 7. Spacing & Layout System

- **Desktop canvas:** fixed 1920px frame width; content commonly constrained to ~1700px width with ~110–220px side margins (seen consistently in the stats bar, footer divider, and FAQ divider lines, all 1700px wide).
- **Mobile canvas:** fixed 412px frame width (iPhone-style safe frame) with ~26–30px side margins.
- **Border radius:** large radii (29–35px) on cards and card images; medium radius (~17px) on buttons; small radius (~5–12px) on icon chips/badges; fully rounded (pill) on badges and small CTA buttons.
- **Shadow:** soft drop shadow on cards, approx. `0 0 16.8px rgba(0,0,0,0.25)`; a lighter shadow (~`0 0 6px rgba(0,0,0,0.25)`) on small pill buttons.
- **Section rhythm:** heading + subtext block, followed by a repeated card/grid row, is the dominant repeating pattern down the page.

---

## 8. Icons & Assets

- **Icon sets in use:** layer names indicate two icon libraries — `hugeicons` (e.g. `hugeicons:add-team-02`) and `ix` (e.g. `ix:quality-report`, `ix:customer`), both used for feature icons on the About page.
- **Generic vector icons:** arrows, chevrons, and checkmarks throughout buttons/links are unnamed "Vector" nodes (individual SVG paths, not from a named icon set).
- **Logo:** the site's logo is a raster image literally named `WhatsApp Image 2026-06-03 at 12.30.53 PM 1`, reused in both the header and footer — i.e., it is a saved phone-screenshot-style image, not a vector logo asset.
- **Photography:** used extensively for the hero background, service cards, about section, and project images — all raster fills.
- **Decorative icons:** star icons for testimonial ratings; a stylized UAE map illustration for the Service Areas section.

---

## 9. Responsive Behaviour (Desktop vs Mobile)

- **Layout:** desktop uses multi-column grids for cards/services; mobile stacks everything into a single column (card widths shrink from ~506–746px on desktop to 360px on mobile).
- **Header:** desktop shows a full horizontal bar with all 5 nav links + phone number + CTA pill visible at once. Mobile compresses this to a logo + hamburger icon, which expands into a full overlay menu (see `Component 27` variants).
- **Stats bar:** desktop lays out 4 stat blocks in a single row; mobile arranges the same 4 blocks in a 2×2 grid (confirmed via each block's x/y coordinates).
- **Type scale:** headline and body sizes scale down proportionally on mobile versions of the same copy blocks.
- **Content parity:** copy is reused verbatim between breakpoints; no sections appear hidden or removed on mobile.
- **⚠️ Coverage gap:** Desktop has 21 distinct "Service Details Page" frames, but mobile only has 10 "Service" frames (`Service 1`–`Service 10`) plus one generic `Service detail page`. Not every desktop service detail screen has a matching mobile mockup — this should be flagged to the team/client, not assumed or filled in.
- **⚠️ Coverage gap:** Desktop has 5 "Projects page" variants; mobile only has 4 ("Project 1"–"Project 4").

---

## 10. Interactive Behaviour

**Important limitation:** the Figma MCP tools available in this session (metadata, design-context, screenshot) return structural and visual data, not prototype "reaction"/connection data, hover states, or animation curves — and the file's tool-call limit was reached before this could be explored further through other means. Everything below is therefore **inferred from structure and naming**, not confirmed from the prototype's actual wiring:

- **FAQ accordion** (`Component 24`): each Q&A row is built as a clickable element with a divider line beneath it, strongly suggesting a click-to-expand/collapse accordion pattern (currently only one visual state was retrievable, so open/closed styling differences are not confirmed).
- **Mobile navigation** (`Component 27`): has two explicitly named variants, `Frame 17` (collapsed bar) and `Frame 18` (expanded overlay menu) — this is a strong, structurally confirmed signal of a tap-to-open/close hamburger menu, even though the actual interaction trigger wasn't inspectable.
- **Nav links** (HOME/ABOUT/SERVICES/PROJECTS/CONTACT) correspond one-to-one with the actual page frames present in the file, consistent with — but not proof of — in-file prototype navigation between them.
- **"Learn more" links** on service cards correspond in count/subject to the 21 Service Details Page frames, consistent with each card deep-linking to its own detail page.
- **"VIEW ALL" buttons** are positioned near teaser sections and likely link to the corresponding full listing page (Services / Projects).
- **WHATSAPP / CALL buttons** are most likely external-link triggers (e.g. `wa.me`/`tel:`), not in-file navigation, based on their labeling and pairing with a WhatsApp logo asset.

No hover, active, disabled, or transition/animation states could be confirmed from the retrievable data.

---

## 11. Repeated Data Structures

These should be modeled as arrays/data files rather than duplicated markup:

- Nav links (5 items: Home, About, Services, Projects, Contact)
- Stats bar (4 items: value + label)
- Service cards (title, image, description, link) — same shape drives the Home teaser, the Service listing page, and all 21 Service Detail pages
- Project cards (5 items on desktop, 4 modeled on mobile)
- Testimonials (name, project title, location, star rating)
- Service-area / emirate chips (7 items: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain)
- Footer link columns (Services list, Service Areas list, Contact details)
- FAQ items (question + answer) — **currently populated with placeholder/mismatched content**, see flag below

---

## 12. Component Dependency Overview

```
Page (Desktop 1920px / Mobile 412px, template shared across breakpoints)
  ├── Header/Navbar
  │     ├── Logo (raster image asset)
  │     ├── Nav Links (×5)
  │     ├── Phone Number
  │     └── CTA Pill Button ("FREE QUOTE")
  │     [Mobile variant: Component 27 — collapsed bar ⇄ expanded overlay menu]
  ├── Hero (Home page only)
  │     ├── Badge Pill (icon + label)
  │     ├── Heading (with accent-colored span)
  │     ├── Subtext
  │     ├── CTA Button ×2
  │     └── Avatar row + inline stat
  ├── Stats Bar
  │     └── Stat Block ×4 (value + label)
  ├── Card Grid Section (Services / Projects / Home teaser)
  │     └── Card ×N
  │           ├── Image
  │           ├── Heading
  │           ├── Description
  │           └── "Learn more" Link (icon)
  ├── Checklist Section (About page)
  │     └── Row ×4 (icon + statement)
  ├── Testimonials Section
  │     └── Testimonial Card ×N (stars, name, project/location)
  ├── Service Areas Section
  │     ├── Map Illustration
  │     └── Location Chip ×7
  ├── FAQ Accordion (Component 24)
  │     └── Q&A Row ×4 (question, chevron icon, divider, answer)
  ├── CTA Banner
  │     ├── Heading + Subtext
  │     └── Button ×2 ("WHATSAPP US", "GET FREE QUOTE")
  └── Footer
        ├── Logo + Company Blurb
        ├── Link Column ×3 (Services / Service Areas / Contact)
        └── Floating Action Buttons (WhatsApp, Call)
```

---

## 13. Final Summary

- **Total frames/screens found:** 31 on the Desktop canvas + 21 on the Mobile canvas = **52 frames** across the two accessible pages (the third page, "Assets", was not reachable before the tool-call limit was hit).
- **Unique page templates:** 6 — Home, About, Service (listing), Service Details (single-service template), Projects (gallery template), Contact — each with a desktop and mobile version.
- **True reusable Figma components found:** 2 — the FAQ accordion (`Component 24`) and the mobile nav (`Component 27`, with a collapsed/expanded variant). Everything else that repeats (header, footer, cards, CTA banner, stat blocks) is duplicated per page/instance rather than linked to a shared master component.
- **Major repeated layout patterns:** hero, stats bar, card grid, two-column feature block, checklist, service-area map, FAQ accordion, CTA banner, 3-column footer.
- **Major repeated UI elements:** nav bar, footer, primary/solid/text-link buttons, service/project cards, stat blocks, testimonial cards, location chips.
- **Content issues found (documented as-is, not corrected):**
  - The FAQ accordion's questions ("What types of courses does Skillanic offer?", etc.) belong to an unrelated IT-training business ("Skillanic") and don't match Chalachal Technical Services — this looks like leftover content from a reused component and needs real copy before shipping.
  - The mobile nav's collapsed-state variant (`Frame 17`) contains leftover menu items from what appears to be a spa/wellness template ("SPA MENU", "PACKAGES", "MEMBERSHIP", "LOCATIONS", "BOOK NOW"), inconsistent with the expanded-state variant (`Frame 18`), which correctly shows the real site's nav (Home/About/Services/Projects/Contact).
  - Mobile mockups don't fully cover the desktop's service/project count (10 of 21 services; 4 of 5 projects have mobile frames).
  - The site logo is a raster screenshot-style image file, not a vector logo asset.

### Suggested implementation order
1. **Design tokens first:** colors (`#035a2d`, `#102e16`, `#0e0e0e`, opacity-based text scale), type families (Host Grotesk, Poppins, Geist, Inter), radii, and shadow values.
2. **Atomic components:** buttons (all variants), badges/pills, icon chips.
3. **Composite components:** service/project card, stat block, testimonial card, location chip.
4. **Structural components:** header/nav (with mobile collapse/expand behavior), footer, CTA banner.
5. **Section-level blocks:** hero, stats bar, card grid, checklist, service-area map, FAQ accordion.
6. **Page assembly:** Home → About → Service listing → Service Detail template → Projects listing → Contact.
7. **Resolve flagged content gaps** (FAQ copy, mobile nav leftover items, missing mobile service/project frames) with the client/design team before final build — do not silently invent replacement content.

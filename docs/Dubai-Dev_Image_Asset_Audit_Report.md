# Dubai-Dev Image Asset Audit Report

## 1. Executive Summary: Export Status — STOPPED

**STATUS:** **STOPPED (Figma MCP Server Export Limitations)**

As per project guidelines, all placeholder images and programmatically generated mock assets have been removed from the repository. The project must contain only authentic design assets.

Because the configured `figma-dev-mode-mcp-server` is designed exclusively for layout inspection, CSS token extraction, and screen rendering, it **cannot export the raw, original uploaded raster assets**. 

Below is the audit of the assets that require manual export from Figma or provision by the designer.

---

## 2. Technical Limitation (Why the MCP Server Cannot Export Assets)

The `figma-dev-mode-mcp-server` exposes five tools:
1. `get_metadata` (structural XML representation of layer names, IDs, positions, and dimensions)
2. `get_design_context` (layout metrics and CSS generation)
3. `get_screenshot` (viewport viewport snapshots/renders of nodes)
4. `get_variable_defs` (variables and styles definitions)
5. `get_figjam` (FigJam diagram analysis)

**Why this is insufficient for raster asset extraction:**
- **No File Downloader:** The server does not expose an asset downloader/exporter tool or bridge to Figma's image endpoint (`/v1/images/:key`).
- **Viewport Renders vs. Originals:** The `get_screenshot` tool generates viewport snapshots. Running this on raster nodes returns low-resolution viewport captures rather than the original, uncompressed source files uploaded by the designer.
- **No Alpha Channels/Vector Support:** Viewport screenshots do not preserve alpha-channel transparency (needed for logos/avatars) and cannot export vectors (`.svg`).

---

## 3. List of Assets That Cannot Be Exported

| Figma Node ID | Suggested Filename | Dimensions | Recommended Format | Expected Destination Path | Usage in Codebase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **754:776** | `company-logo` | 1380x1123 | `.svg` (or transparent `.png`) | `src/assets/images/logo/` | Main branding in Navbar & Footer. |
| **746:694** | `electrical` | 448x309 | `.webp` | `src/assets/images/services/` | `electrical-repair` service card. |
| **746:695** | `ac` | 448x309 | `.webp` | `src/assets/images/services/` | `ac-maintenance` service card. |
| **746:696** | `carpentry` | 448x309 | `.webp` | `src/assets/images/services/` | `carpentry-work` service card. |
| **746:697** | `plumbing` | 448x309 | `.webp` | `src/assets/images/services/` | `plumbing-services` service card. |
| **746:698** | `aluminum` | 448x309 | `.webp` | `src/assets/images/services/` | `aluminum-glass` service card. |
| **746:699** | `tiling` | 448x309 | `.webp` | `src/assets/images/services/` | `floor-tiling` service card. |
| **746:700** | `wall-tiling` | 448x309 | `.webp` | `src/assets/images/services/` | `wall-tiling` service card. |
| **746:701** | `welding` | 448x309 | `.webp` | `src/assets/images/services/` | `welding-fabrication` service card. |
| **746:702** | `masonry` | 448x309 | `.webp` | `src/assets/images/services/` | `masonry-repair` service card. |
| **746:723** | `waterproofing` | 448x309 | `.webp` | `src/assets/images/services/` | `waterproofing` service card. |
| **746:719** | `painting` | 448x309 | `.webp` | `src/assets/images/services/` | `painting-services` service card. |
| **746:720** | `wallpaper` | 448x309 | `.webp` | `src/assets/images/services/` | `wallpaper-installation` service card. |
| **746:721** | `gypsum` | 448x309 | `.webp` | `src/assets/images/services/` | `ceiling-gypsum` service card. |
| **746:722** | `cleaning` | 448x309 | `.webp` | `src/assets/images/services/` | `deep-cleaning` service card. |
| **746:724** | `renovation` | 448x309 | `.webp` | `src/assets/images/services/` | `home-renovation` service card. |
| **746:725** | `locksmith` | 448x309 | `.webp` | `src/assets/images/services/` | `door-locksmith` service card. |
| **746:726** | `kitchen-refurbish` | 448x309 | `.webp` | `src/assets/images/services/` | `kitchen-cabinet` service card. |
| **746:727** | `garden` | 448x309 | `.webp` | `src/assets/images/services/` | `garden-maintenance` service card. |
| **746:728** | `glass-replace` | 448x309 | `.webp` | `src/assets/images/services/` | `window-glass` service card. |
| **746:729** | `handyman` | 448x309 | `.webp` | `src/assets/images/services/` | `handyman-tasks` service card. |
| **746:730** | `bathroom-refurbish` | 448x309 | `.webp` | `src/assets/images/services/` | `bathroom-fittings` service card. |
| **746:704** | `project1` | 703x718 | `.webp` | `src/assets/images/projects/` | `project-1` showcase image. |
| **746:713** | `project2` | 695x950 | `.webp` | `src/assets/images/projects/` | `project-2` showcase image. |
| **746:715** | `project3` | 523x638 | `.webp` | `src/assets/images/projects/` | `project-3` showcase image. |
| **746:717** | `project4` | 695x773 | `.webp` | `src/assets/images/projects/` | `project-4` showcase image. |
| **746:736** | `project5` | 589x779 | `.webp` | `src/assets/images/projects/` | `project-5` showcase image. |
| **N/A** | `avatar1` | 150x150 | `.webp` | `public/` (and `testimonials/`) | Testimonial avatar 1. |
| **N/A** | `avatar2` | 150x150 | `.webp` | `public/` (and `testimonials/`) | Testimonial avatar 2. |
| **N/A** | `avatar3` | 150x150 | `.webp` | `src/assets/images/testimonials/`| Testimonial avatar 3. |
| **N/A** | `avatar4` | 150x150 | `.webp` | `src/assets/images/testimonials/`| Testimonial avatar 4. |
| **746:706** | `about-team` | 462x308 | `.webp` | `src/assets/images/about/` | About section company photo. |
| **746:707** | `advantage-quality` | 462x308 | `.webp` | `src/assets/images/about/` | Advantage / value card image. |
| **746:708** | `advantage-speed` | 462x308 | `.webp` | `src/assets/images/about/` | Advantage / value card image. |
| **746:709** | `advantage-trust` | 462x308 | `.webp` | `src/assets/images/about/` | Advantage / value card image. |

---

## 4. Specific Asset Request Details for the Designer

To ensure exact match and performance-grade loading, please request the designer to export and package the following assets:

1. **Company Logo**:
   - **Requirement**: Scalable Vector Graphic (`.svg`) with transparent background, keeping branding text shapes crisp.
2. **Services & Projects Pack**:
   - **Requirement**: 21 service images (cropped to `448x309` or standard landscape card aspect ratios) and 5 project showcase images (cropped to their original mocked dimensions) exported in high-quality `.webp` format.
3. **Avatars and Transparent Elements**:
   - **Requirement**: 4 client avatars cropped to circular frame sizes (`150x150`) with transparent backgrounds where appropriate, exported as `.webp` or `.png`.
4. **Hero and Section Backgrounds**:
   - **Requirement**: Uncompressed desktop-size (`1920px` width) background assets for the Hero layout and CTA blocks.

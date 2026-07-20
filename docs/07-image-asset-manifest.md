# Image Asset Manifest

**File Version:** 1.0.0  
**Target Directory:** `src/assets/`  
**Audit Completion Date:** July 18, 2026  

---

## 1. Executive Summary

This manifest consolidates the comprehensive audit of all **49 raster image assets** exported from the Figma design and currently residing in the temporary directory `src/assets/images/`.

### Key Metrics
*   **Total Checked Assets:** 49
*   **Active Production Assets:** 40
*   **Unused Legacy Assets:** 9
*   **Active Service Cards Mapped:** 21 (1-to-1 matching)
*   **Active Service Banners Mapped:** 21 (19 dedicated `1624x945` files, 2 stretched thumbnails)
*   **Active Project Masonry Assets Mapped:** 5 (used in asymmetric layouts on Home/About pages)
*   **Active Project Grid Thumbnails Mapped:** 9 (used on the uniform Projects page grid)
*   **Company Logo Mapped:** 1 (`WhatsApp Image...` confirmed as the high-res 1380x1124 logo)

> [!IMPORTANT]
> In accordance with the **No-Rename and No-Modify Policy**, no physical files, imports, or source code files have been altered during this audit phase. This manifest serves as the formal blueprint for the upcoming batch migration and codebase refactoring.

---

## 2. Global Assets: Company Logo

We have successfully resolved the "missing company logo" blocker. The high-resolution raster branding file was found under a legacy WhatsApp export name:

| Legacy Filename | Dimensions | Recommended Production Path | Usage in Figma Layout | Node IDs |
| :--- | :--- | :--- | :--- | :--- |
| `WhatsApp Image 2026-06-03 at 12.30.53 PM 1.png` | 1380x1124 | `src/assets/logos/company-logo.png` | Mapped to header and footer branding containers on all 25+ layout screens (e.g. Y=61.8) | `731:1823`, `731:1829`, `731:2236`, `731:2242` etc. |

---

## 3. Services Asset Mapping (21 Services)

The UAE design specifies 21 services. Each service contains a **Card Thumbnail** (Landscape, `448x309`) and a **Detail Page Banner** (Large Landscape, `1624x945`). 

> [!NOTE]
> For the **Air-Conditioning** and **General Maintenance** details pages, the designer stretched the corresponding card thumbnails (`image 77` and `image 83`) into the banner space instead of using separate files. This has been captured below and must be supported in layout styles.

### Card Thumbnails (`448x309` layout size)
| # | Service Title / Component | Legacy Filename | Suggested Filename | Suggested Path | Figma Node ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | **Air Filtration Systems** | `image 82.png` | `air-filtration-card.png` | `src/assets/images/services/air-filtration-card.png` | `731:2555, 731:3810` |
| 02 | **Air-Conditioning** | `image 77.png` | `air-conditioning-card.png` | `src/assets/images/services/air-conditioning-card.png` | `731:2483, 731:3166` |
| 03 | **Aluminum & Glass Works** | `Aluminium and glass work 2.png` | `aluminum-glass-works-card.png` | `src/assets/images/services/aluminum-glass-works-card.png` | `731:1518, 731:2523` |
| 04 | **Carpentry Services** | `Carpentery work  2.png` | `carpentry-services-card.png` | `src/assets/images/services/carpentry-services-card.png` | `731:1503, 731:2475` |
| 05 | **Electrical Fittings** | `electrical work 2 2.png` | `electrical-fittings-card.png` | `src/assets/images/services/electrical-fittings-card.png` | `731:1489, 731:2459` |
| 06 | **Electromechanical Installation** | `image 91.png` | `electromechanical-card.png` | `src/assets/images/services/electromechanical-card.png` | `731:2563, 731:4086` |
| 07 | **False Ceiling Installation** | `image 81.png` | `false-ceiling-card.png` | `src/assets/images/services/false-ceiling-card.png` | `731:2499, 731:3718` |
| 08 | **Fixtures Repairing** | `image 80.png` | `fixtures-repairing-card.png` | `src/assets/images/services/fixtures-repairing-card.png` | `731:2603, 731:3626` |
| 09 | **Floor Tiling** | `tiles 4 2.png` | `floor-tiling-card.png` | `src/assets/images/services/floor-tiling-card.png` | `731:1525, 731:2531` |
| 10 | **General Maintenance** | `image 83.png` | `general-maintenance-card.png` | `src/assets/images/services/general-maintenance-card.png` | `731:2595, 731:3350` |
| 11 | **Interlock Installation** | `image 92.png` | `interlock-installation-card.png` | `src/assets/images/services/interlock-installation-card.png` | `731:2547, 731:3534` |
| 12 | **Light Partitions Installation** | `image 51.png` | `light-partitions-card.png` | `src/assets/images/services/light-partitions-card.png` | `731:2491, 731:3442` |
| 13 | **Painting Services** | `image 66.png` | `painting-services-card.png` | `src/assets/images/services/painting-services-card.png` | `731:1532, 731:2571` |
| 14 | **Plumbing Installation** | `plumbing work 2.png` | `plumbing-installation-card.png` | `src/assets/images/services/plumbing-installation-card.png` | `731:1511, 731:2515` |
| 15 | **Roof Waterproofing** | `rooftoping 3 2.png` | `roof-waterproofing-card.png` | `src/assets/images/services/roof-waterproofing-card.png` | `731:2539, 731:3258` |
| 16 | **Sanitary Installation** | `image 88.png` | `sanitary-installation-card.png` | `src/assets/images/services/sanitary-installation-card.png` | `731:2611, 731:3902` |
| 17 | **Ventilations Installation** | `image 93.png` | `ventilations-installation-card.png` | `src/assets/images/services/ventilations-installation-card.png` | `731:2619, 731:4178` |
| 18 | **Wall Tiling** | `image 89.png` | `wall-tiling-card.png` | `src/assets/images/services/wall-tiling-card.png` | `731:2507, 731:3994` |
| 19 | **Wallpaper Fixing Installation** | `image 67.png` | `wallpaper-fixing-card.png` | `src/assets/images/services/wallpaper-fixing-card.png` | `731:1496, 731:2467` |
| 20 | **Welding Services** | `welding work(1) 2.png` | `welding-services-card.png` | `src/assets/images/services/welding-services-card.png` | `731:1539, 731:2579` |
| 21 | **Wood Flooring** | `wood flooring 2.png` | `wood-flooring-card.png` | `src/assets/images/services/wood-flooring-card.png` | `731:1546, 731:2587` |

### Detail Page Banners (`1624x945` layout size)
| # | Service Title / Component | Legacy Filename | Suggested Filename | Suggested Path | Figma Node ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | **Air Filtration Systems** | `image 97.png` | `air-filtration-banner.png` | `src/assets/images/services/air-filtration-banner.png` | `` |
| 02 | **Aluminum & Glass Works** | `Aluminium and glass work 3.png` | `aluminum-glass-works-banner.png` | `src/assets/images/services/aluminum-glass-works-banner.png` | `` |
| 03 | **Carpentry Services** | `Carpentery work  3.png` | `carpentry-services-banner.png` | `src/assets/images/services/carpentry-services-banner.png` | `` |
| 04 | **Electrical Fittings** | `electrical work 2 3.png` | `electrical-fittings-banner.png` | `src/assets/images/services/electrical-fittings-banner.png` | `` |
| 05 | **Electromechanical Installation** | `image 100.png` | `electromechanical-banner.png` | `src/assets/images/services/electromechanical-banner.png` | `` |
| 06 | **False Ceiling Installation** | `image 98.png` | `false-ceiling-banner.png` | `src/assets/images/services/false-ceiling-banner.png` | `` |
| 07 | **Fixtures Repairing** | `image 101.png` | `fixtures-repairing-banner.png` | `src/assets/images/services/fixtures-repairing-banner.png` | `` |
| 08 | **Floor Tiling** | `tiles 4 4.png` | `floor-tiling-banner.png` | `src/assets/images/services/floor-tiling-banner.png` | `` |
| 09 | **Interlock Installation** | `image 96.png` | `interlock-installation-banner.png` | `src/assets/images/services/interlock-installation-banner.png` | `731:3695` |
| 10 | **Light Partitions Installation** | `image 104.png` | `light-partitions-banner.png` | `src/assets/images/services/light-partitions-banner.png` | `` |
| 11 | **Painting Services** | `image 95.png` | `painting-services-banner.png` | `src/assets/images/services/painting-services-banner.png` | `731:4520` |
| 12 | **Plumbing Installation** | `plumbing work 3.png` | `plumbing-installation-banner.png` | `src/assets/images/services/plumbing-installation-banner.png` | `` |
| 13 | **Roof Waterproofing** | `rooftoping 3 3.png` | `roof-waterproofing-banner.png` | `src/assets/images/services/roof-waterproofing-banner.png` | `731:3511` |
| 14 | **Sanitary Installation** | `image 102.png` | `sanitary-installation-banner.png` | `src/assets/images/services/sanitary-installation-banner.png` | `` |
| 15 | **Ventilations Installation** | `image 103.png` | `ventilations-installation-banner.png` | `src/assets/images/services/ventilations-installation-banner.png` | `` |
| 16 | **Wall Tiling** | `image 99.png` | `wall-tiling-banner.png` | `src/assets/images/services/wall-tiling-banner.png` | `` |
| 17 | **Wallpaper Fixing Installation** | `image 94.png` | `wallpaper-fixing-banner.png` | `src/assets/images/services/wallpaper-fixing-banner.png` | `731:2867` |
| 18 | **Welding Services** | `welding work(1) 3.png` | `welding-services-banner.png` | `src/assets/images/services/welding-services-banner.png` | `` |
| 19 | **Wood Flooring** | `wood flooring 3.png` | `wood-flooring-banner.png` | `src/assets/images/services/wood-flooring-banner.png` | `` |
| 20 | **Air-Conditioning** | `image 77.png` *(Stretched)* | `air-conditioning-card.png` | `src/assets/images/services/air-conditioning-card.png` | `731:3419` |
| 21 | **General Maintenance** | `image 83.png` *(Stretched)* | `general-maintenance-card.png` | `src/assets/images/services/general-maintenance-card.png` | `731:3593` |


---

## 4. Projects Asset Mapping

The design uses projects in two distinct layouts:
1.  **Masonry Grid (Home/About Page):** Asymmetric cards with variable dimensions.
2.  **Projects Grid (Projects Page):** Uniform cards with landscape layouts (`462x308`).

### Masonry Showcase (Asymmetric Layouts)
| # | Project Name / Detail | Legacy Filename | Suggested Filename | Dimensions | Figma Node ID | Context |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Jumeirah Villa Full Renovation** | `image 68.png` | `jumeirah-villa-renovation-masonry.png` | `283x351` | `731:1551` | Asymmetric masonry block on Home Page (Y=1551) |
| 2 | **Sharjah Office Glass Partitions** | `image 30.png` | `sharjah-office-partitions-masonry.png` | `695x950` | `731:1747, 731:2161` | Asymmetric masonry block on Home Page (Y=1747, Y=2161) |
| 3 | **Mirdif Roof Waterproofing** | `image 31.png` | `mirdif-roof-waterproofing-masonry.png` | `523x638` | `731:2340` | Asymmetric masonry block on About Page (Y=2340) |
| 4 | **Khalifa City Driveway Interlock** | `image 69.png` | `khalifa-city-driveway-masonry.png` | `283x351` | `731:2384` | Asymmetric masonry block on About Page (Y=2384) |
| 5 | **Al Nahda Bathroom Re-tile** | `image 70.png` | `al-nahda-bathroom-retile-masonry.png` | `283x351` | `731:2281` | Asymmetric masonry block on Home Page (Y=2281) |

### Uniform Project Cards (`462x308` layout size)
These 9 files represent the card thumbnails for the uniform Projects page grid:

| # | Project Card Name | Legacy Filename | Suggested Filename | Suggested Path | Figma Node ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Jumeirah Villa Full Renovation** | `ChatGPT Image Jun 21, 2026, 03_42_10 PM 1.png` | `jumeirah-villa-renovation-card.png` | `src/assets/images/projects/jumeirah-villa-renovation-card.png` | `731:1604, 731:2018` |
| 2 | **Mirdif Roof Waterproofing** | `image 73.png` | `mirdif-roof-waterproofing-card.png` | `src/assets/images/projects/mirdif-roof-waterproofing-card.png` | `731:1612, 731:4635` |
| 3 | **Al Barsha Apartment Repaint** | `image 84.png` | `al-barsha-apartment-repaint-card.png` | `src/assets/images/projects/al-barsha-apartment-repaint-card.png` | `731:4642, 731:4942` |
| 4 | **Khalifa City Driveway Interlock** | `image 71.png` | `khalifa-city-driveway-card.png` | `src/assets/images/projects/khalifa-city-driveway-card.png` | `731:1620, 731:4650` |
| 5 | **Sharjah Office Glass Partitions** | `image 74.png` | `sharjah-office-partitions-card.png` | `src/assets/images/projects/sharjah-office-partitions-card.png` | `731:1628, 731:4658` |
| 6 | **Al Nahda Bathroom Re-tile** | `image 85.png` | `al-nahda-bathroom-retile-card.png` | `src/assets/images/projects/al-nahda-bathroom-retile-card.png` | `731:4666, 731:4858` |
| 7 | **Downtown Office Fit-Out** | `image 75.png` | `downtown-office-fitout-card.png` | `src/assets/images/projects/downtown-office-fitout-card.png` | `731:1644, 731:4682` |
| 8 | **Hotel Maintenance & Fit-Out** | `image 72.png` | `hotel-maintenance-fitout-card.png` | `src/assets/images/projects/hotel-maintenance-fitout-card.png` | `731:1636, 731:4674` |
| 9 | **Warehouse MEP Installation** | `image 86.png` | `warehouse-mep-installation-card.png` | `src/assets/images/projects/warehouse-mep-installation-card.png` | `731:4690` |


---

## 5. Unused Legacy Assets (9 Files)

The following 9 assets are **completely absent** from the Figma layout XML tree (Home, About, Services, Projects, Contact, and all Details pages). 

> [!CAUTION]
> These files are likely legacy materials from initial drafts or boilerplate code. They should be deleted to clean up the codebase **only after developer/designer approval**.

| # | Filename | Dimensions | File Size | Suggested Action | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `image 44.png` | 283x351 | 211 KB | Mark for Deletion | Vertical aspect ratio; no matching layout node found. |
| 2 | `image 47.png` | 283x351 | 195 KB | Mark for Deletion | Vertical aspect ratio; no matching layout node found. |
| 3 | `image 52.png` | 283x351 | 172 KB | Mark for Deletion | Vertical aspect ratio; no matching layout node found. |
| 4 | `image 53.png` | 283x351 | 181 KB | Mark for Deletion | Vertical aspect ratio; no matching layout node found. |
| 5 | `image 54.png` | 283x351 | 216 KB | Mark for Deletion | Vertical aspect ratio; no matching layout node found. |
| 6 | `image 65.png` | 283x351 | 178 KB | Mark for Deletion | Vertical aspect ratio; no matching layout node found. |
| 7 | `image 76.png` | 462x308 | 252 KB | Mark for Deletion | Landscape card; not referenced in the final Projects page grid. |
| 8 | `image 78.png` | 462x308 | 277 KB | Mark for Deletion | Landscape card; not referenced in the final Projects page grid. |
| 9 | `image 79.png` | 695x773 | 956 KB | Mark for Deletion | Large vertical image; not referenced in masonry or about sections. |

---

## 6. Implementation Action Plan

To finalize this manifest and begin refactoring, the following sequence is recommended:

1.  **Approval:** Wait for confirmation of these mappings from the project owner/lead developer.
2.  **Asset Restructuring:**
    *   Create subdirectories: `src/assets/logos/`, `src/assets/images/services/`, and `src/assets/images/projects/`.
    *   Move and rename the assets to their production-grade paths as specified in Sections 2, 3, and 4.
3.  **Data Refactoring:**
    *   Update `src/constants/servicesData.js` to point to the new paths (e.g. `/assets/images/services/electrical-fittings-card.png` and `/assets/images/services/electrical-fittings-banner.png` or imports).
    *   Update `src/constants/projectsData.js` to define all 9 grid projects shown in the design, pointing to their renamed paths under `src/assets/images/projects/`.
4.  **Component Refactoring:**
    *   Update the `Navbar` and `Footer` components to import and display `src/assets/logos/company-logo.png` instead of using the text fallback.
5.  **Build Validation:** Run `npm run build` to verify all imports resolve and there are no broken links.

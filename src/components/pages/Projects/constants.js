/* src/components/pages/Projects/constants.js */

export const PROJECTS_HERO_DATA = {
  title: 'Recent work across the UAE',
  description:
    'A showcase of our completed villa, apartment, office, retail, and commercial projects, highlighting the quality workmanship, attention to detail, and reliable service our team delivers across the UAE.',
};

/* Exact category labels extracted from Figma Node 731:4607 */
export const PROJECT_FILTER_CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'renovation', label: 'RENOVATION' },
  { id: 'waterproofing', label: 'WATERPROOFING' },
  { id: 'flooring', label: 'FLOORING' },
];

/*
 * Exact 9 project cards extracted from Figma Node 731:4564.
 *
 * categoryLabel    → badge displayed on the card   (exact Figma text — do NOT change)
 * filterCategories → used ONLY by the filter bar   (do NOT use for display)
 *
 * Filter ids match PROJECT_FILTER_CATEGORIES id values (lowercase):
 *   all | residential | commercial | renovation | waterproofing | flooring
 */
export const PROJECTS_GRID_DATA = [
  {
    id: 'project-jumeirah-villa',
    title: 'Jumeirah Villa Full Renovation',
    slug: 'jumeirah-villa-full-renovation',
    categoryLabel: 'Renovation',               // Figma Node 731:4626
    filterCategories: ['renovation'],
    location: 'Jumeirah, Dubai',
    imageKey: 'project01Card',
    description:
      'Complete villa refurb — paint, flooring, kitchen carpentry and bathroom re-tiling.',
  },
  {
    id: 'project-al-barsha-repaint',
    title: 'Al Barsha Apartment Repaint',
    slug: 'al-barsha-apartment-repaint',
    categoryLabel: 'Residential',              // Figma Node 731:4649
    filterCategories: ['residential'],
    location: 'Al Barsha, Dubai',
    imageKey: 'sharjahOfficeGlassPartitions',
    description:
      'Two-bedroom move-in repaint with two accent walls, completed in 36 hours.',
  },
  {
    id: 'project-sharjah-office-partitions',
    title: 'Sharjah Office Glass Partitions',
    slug: 'sharjah-office-glass-partitions',
    categoryLabel: 'Commercial',               // Figma Node 731:4673
    filterCategories: ['commercial'],
    location: 'Sharjah Commercial Zone',
    imageKey: 'image72',
    description:
      'Frameless glass partitions for a 1,200 sqft executive office floor.',
  },
  {
    id: 'project-mirdif-waterproofing',
    title: 'Mirdif Roof Waterproofing',
    slug: 'mirdif-roof-waterproofing',
    categoryLabel: 'Waterproofing',            // Figma Node 731:4634
    filterCategories: ['waterproofing'],
    location: 'Mirdif, Dubai',
    imageKey: 'mirdifRoofWaterproofing',
    description:
      'PU-based roof waterproofing with heat-reflective topcoat on a 5-bedroom villa.',
  },
  {
    id: 'project-khalifa-city-driveway',
    title: 'Khalifa City Driveway Interlock',
    slug: 'khalifa-city-driveway-interlock',
    categoryLabel: 'Residential',              // Figma Node 731:4657
    filterCategories: ['residential', 'flooring'], // appears under both filter tabs
    location: 'Khalifa City, Abu Dhabi',
    imageKey: 'project05Card',
    description:
      'Charcoal & grey interlock driveway with edge curbs and garden path.',
  },
  {
    id: 'project-al-nahda-bathroom',
    title: 'Al Nahda Bathroom Re-tile',
    slug: 'al-nahda-bathroom-retile',
    categoryLabel: 'Renovation',               // Figma Node 731:4681
    filterCategories: ['renovation'],
    location: 'Al Nahda, Dubai',
    imageKey: 'project07Card',
    description:
      'Full bathroom strip-out, waterproofing membrane and porcelain re-tiling.',
  },
  {
    id: 'project-downtown-fitout',
    title: 'Downtown Office Fit-Out',
    slug: 'downtown-office-fitout',
    categoryLabel: 'Commercial Fit-Out',       // Figma Node 731:4641
    filterCategories: ['commercial'],
    location: 'Downtown Dubai',
    imageKey: 'project03Card',
    description:
      'Complete office fit-out with acoustic glass partitions, ceiling and MEP installation.',
  },
  {
    id: 'project-hotel-fitout',
    title: 'Hotel Maintenance & Fit-Out',
    slug: 'hotel-maintenance-fitout',
    categoryLabel: 'Hotel Renovation',         // Figma Node 731:4665
    filterCategories: ['renovation'],
    location: 'Business Bay, Dubai',
    imageKey: 'project06Card',
    description:
      'Comprehensive hotel facility renovation and preventive MEP maintenance services.',
  },
  {
    id: 'project-warehouse-mep',
    title: 'Warehouse MEP Installation',
    slug: 'warehouse-mep-installation',
    categoryLabel: 'Industrial MEP',           // Figma Node 731:4689
    filterCategories: [], // appears ONLY in ALL view — no named filter tab
    location: 'Dubai Industrial City',
    imageKey: 'project09Card',
    description:
      'Industrial electrical power distribution, ventilation, and plumbing systems.',
  },
];

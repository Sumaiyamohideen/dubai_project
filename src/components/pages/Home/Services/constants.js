/* src/components/sections/Services/constants.js */

/**
 * @typedef {Object} ServiceItem
 * @property {string} id - Unique identifier for the service
 * @property {string} title - Display title of the service
 * @property {string} description - Brief summary of the service offerings
 * @property {string} imageKey - Key matching the exported image in src/assets/images/index.js
 * @property {string} href - Navigation URL for the service details
 */

export const SERVICES_SECTION_HEADER = {
  title: 'Comprehensive Technical Services Across the UAE',
  description: 'End-to-end maintenance and engineering solutions backed by experience and expertise.',
};

export const SERVICES_DATA = [
  {
    id: 'electrical-works',
    title: 'Electrical Works',
    description: 'Wiring, repairs, installations & upgrades by certified electricians.',
    imageKey: 'electricalFittings',
    href: '#contact',
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    description: 'Leaks, fittings, water tanks & full plumbing installations.',
    imageKey: 'plumbingInstallation',
    href: '#contact',
  },
  {
    id: 'painting-services',
    title: 'Painting Services',
    description: 'Interior & exterior painting with premium UAE-grade finishes.',
    imageKey: 'paintingServices',
    href: '#contact',
  },
  {
    id: 'wall-sticker-installation',
    title: 'Wall Sticker Installation',
    description: 'Decorative & branded wall stickers, decals and wall murals.',
    imageKey: 'wallpaperFixing',
    href: '#contact',
  },
  {
    id: 'aluminum-glass-works',
    title: 'Aluminum & Glass Works',
    description: 'Doors, windows, partitions, shower glass & shopfronts.',
    imageKey: 'aluminumGlassWorks',
    href: '#contact',
  },
  {
    id: 'welding-services',
    title: 'Welding Services',
    description: 'Mild steel, stainless & aluminum welding on-site.',
    imageKey: 'weldingServices',
    href: '#contact',
  },
  {
    id: 'carpentry-services',
    title: 'Carpentry Services',
    description: 'Doors, cabinets, wardrobes, partitions & furniture repair.',
    imageKey: 'carpentryServices',
    href: '#contact',
  },
  {
    id: 'floor-tiling',
    title: 'Floor Tiling',
    description: 'Ceramic, porcelain & marble tile installation and repair.',
    imageKey: 'floorTiling',
    href: '#contact',
  },
  {
    id: 'wood-flooring',
    title: 'Wood Flooring',
    description: 'Laminate, engineered & vinyl wood flooring installation.',
    imageKey: 'woodFlooring',
    href: '#contact',
  },
];

export const SERVICES_CTA = {
  label: 'VIEW ALL',
  href: '#services',
  icon: 'arrow-right',
};

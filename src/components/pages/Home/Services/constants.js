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
    id: 'electrical-fittings',
    title: 'Electrical Works',
    description: 'Wiring, repairs, installations & upgrades by certified electricians.',
    imageKey: 'electricalFittings',
    href: '/services/electrical-fittings',
  },
  {
    id: 'plumbing-installation',
    title: 'Plumbing Services',
    description: 'Leaks, fittings, water tanks & full plumbing installations.',
    imageKey: 'plumbingInstallation',
    href: '/services/plumbing-installation',
  },
  {
    id: 'painting-services',
    title: 'Painting Services',
    description: 'Interior & exterior painting with premium UAE-grade finishes.',
    imageKey: 'paintingServices',
    href: '/services/painting-services',
  },
  {
    id: 'wallpaper-fixing-installation',
    title: 'Wall Sticker Installation',
    description: 'Decorative & branded wall stickers, decals and wall murals.',
    imageKey: 'wallpaperFixing',
    href: '/services/wallpaper-fixing-installation',
  },
  {
    id: 'aluminum-glass-works',
    title: 'Aluminum & Glass Works',
    description: 'Doors, windows, partitions, shower glass & shopfronts.',
    imageKey: 'aluminumGlassWorks',
    href: '/services/aluminum-glass-works',
  },
  {
    id: 'welding-services',
    title: 'Welding Services',
    description: 'Mild steel, stainless & aluminum welding on-site.',
    imageKey: 'weldingServices',
    href: '/services/welding-services',
  },
  {
    id: 'carpentry-services',
    title: 'Carpentry Services',
    description: 'Doors, cabinets, wardrobes, partitions & furniture repair.',
    imageKey: 'carpentryServices',
    href: '/services/carpentry-services',
  },
  {
    id: 'floor-tiling',
    title: 'Floor Tiling',
    description: 'Ceramic, porcelain & marble tile installation and repair.',
    imageKey: 'floorTiling',
    href: '/services/floor-tiling',
  },
  {
    id: 'wood-flooring',
    title: 'Wood Flooring',
    description: 'Laminate, engineered & vinyl wood flooring installation.',
    imageKey: 'woodFlooring',
    href: '/services/wood-flooring',
  },
];

export const SERVICES_CTA = {
  label: 'VIEW ALL',
  href: '#services',
  icon: 'arrow-right',
};

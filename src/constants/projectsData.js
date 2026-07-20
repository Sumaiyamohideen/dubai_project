/* src/constants/projectsData.js */
import { images } from '../assets/images';

export const PROJECTS_DATA = [
  {
    id: 'project-1',
    title: 'Luxury Villa Interior Renovation',
    slug: 'luxury-villa-interior-renovation',
    image: images.projects.project01,
    masonryImage: images.projects.project01Masonry,
    location: 'Emirates Hills, Dubai',
    category: 'Home Renovation & Fit-out',
    completionDate: 'June 2026',
    scope: [
      'Complete marble floor installation across 6,000 sq. ft.',
      'Custom false ceiling construction with LED strip channels',
      'High-end interior painting using Jotun Fenomastic paint',
      'Electrical system load balancing and smart lighting controls'
    ]
  },
  {
    id: 'project-2',
    title: 'Modern Office Glass & Partition Setup',
    slug: 'modern-office-glass-partition-setup',
    image: images.projects.project05,
    masonryImage: images.projects.project05Masonry,
    location: 'Downtown Dubai',
    category: 'Aluminum & Glass Work',
    completionDate: 'April 2026',
    scope: [
      'Frameless single-glazed glass partitions setup for 24 office cabins',
      'Custom aluminum door frames fabrication and mounting',
      'Soundproofing insulation inside partition drywalls',
      'Smart lock access system integration'
    ]
  },
  {
    id: 'project-3',
    title: 'Residential Complex Waterproofing Project',
    slug: 'residential-complex-waterproofing',
    image: images.projects.project02,
    masonryImage: images.projects.project02Masonry,
    location: 'Yas Island, Abu Dhabi',
    category: 'Roof & Wet-Area Waterproofing',
    completionDate: 'May 2026',
    scope: [
      'Polyurethane liquid membrane application for 4 major block roofs',
      'Shower tray sealing and tiling reconstruction in 80 apartments',
      'Thermal scan diagnostics of water leakages',
      'Joint expansions sealing with polyurethane sealants'
    ]
  },
  {
    id: 'project-4',
    title: 'Commercial Restaurant Kitchen Renovation',
    slug: 'commercial-restaurant-kitchen-renovation',
    image: images.projects.project04,
    masonryImage: images.projects.project04Masonry,
    location: 'Marina Mall, Abu Dhabi',
    category: 'Technical Renovation',
    completionDate: 'March 2026',
    scope: [
      'Industrial anti-slip floor tiling layout with epoxy grout lines',
      'Stainless steel welded splashback panel fabrications',
      'Commercial drainage grids and grease trap replacements',
      'Ventilation AC ducts cleaning and chemical washing'
    ]
  },
  {
    id: 'project-5',
    title: 'Showroom Gypsum Ceiling & AC Setup',
    slug: 'showroom-gypsum-ceiling-ac-setup',
    image: images.projects.project06,
    masonryImage: images.projects.project06Masonry,
    location: 'Al Reem Island, Abu Dhabi',
    category: 'Gypsum & False Ceiling',
    completionDate: 'January 2026',
    scope: [
      'Cove ceiling decoration for 4,500 sq. ft. showroom display area',
      'AC ducting layout and linear diffuser grill setups',
      'Steel welded structures for overhead signage load supports',
      'Post-construction commercial deep cleaning and window cleaning'
    ]
  }
];

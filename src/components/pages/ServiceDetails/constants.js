/* src/components/pages/ServiceDetails/constants.js */

import { images } from '@/assets/images';

/**
 * Service Details content database for all 21 services.
 * Slugs are derived directly from the service title (e.g. 'Electrical Fittings' -> 'electrical-fittings').
 * Sourced 1:1 from connected Figma nodes.
 */

// 1. Electrical Fittings
const ELECTRICAL_FITTINGS_DATA = {
  id: 'electrical-fittings',
  title: 'Electrical Fittings',
  slug: 'electrical-fittings',
  heroImage: images.services.electricalFittings.banner || images.services.electricalFittings.card,
  overviewLead:
    'Electrical Fittings & Fixtures Repairing & Maintenance – Professional repair and maintenance of electrical fittings and fixtures to ensure safe, efficient, and reliable performance for residential, commercial, and industrial spaces',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Repair and maintenance of electrical fittings, switches, sockets, lighting, and wiring for safe and reliable home electrical systems.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional maintenance of electrical fixtures and systems for offices, retail stores, restaurants, and commercial spaces.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Reliable repair and maintenance of electrical equipment, wiring, and power systems for factories, warehouses, and industrial facilities.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'plumbing-installation',
      title: 'Plumbing Installation',
      slug: 'plumbing-installation',
      description: 'Leaks, fittings, water tanks & full plumbing installations.',
      image: images.services.plumbingInstallation.card,
    },
    {
      id: 'painting-services',
      title: 'Painting Services',
      slug: 'painting-services',
      description: 'Interior & exterior painting with premium UAE-grade finishes.',
      image: images.services.paintingServices.card,
    },
    {
      id: 'wallpaper-fixing-installation',
      title: 'Wallpaper Fixing Installation',
      slug: 'wallpaper-fixing-installation',
      description: 'Decorative & branded wall stickers, decals and wall murals.',
      image: images.services.wallpaperFixing.card,
    },
  ],
  viewAllHref: '/services',
};

// 2. Plumbing Installation
const PLUMBING_INSTALLATION_DATA = {
  id: 'plumbing-installation',
  title: 'Plumbing Installation',
  slug: 'plumbing-installation',
  heroImage: images.services.plumbingInstallation.banner || images.services.plumbingInstallation.card,
  overviewLead:
    'Professional plumbing solutions for efficient water supply, drainage, and piping systems, ensuring reliable performance for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert plumbing installations and repairs for homes, ensuring efficient water flow and reliable drainage.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional plumbing services for offices, retail stores, restaurants, and commercial spaces, designed for smooth daily operations.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Reliable plumbing solutions for factories, warehouses, and industrial facilities, built for durability and efficient performance.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'painting-services',
      title: 'Painting Services',
      slug: 'painting-services',
      description: 'Interior & exterior painting with premium UAE-grade finishes.',
      image: images.services.paintingServices.card,
    },
    {
      id: 'wallpaper-fixing-installation',
      title: 'Wallpaper Fixing Installation',
      slug: 'wallpaper-fixing-installation',
      description: 'Decorative & branded wall stickers, decals and wall murals.',
      image: images.services.wallpaperFixing.card,
    },
    {
      id: 'aluminum-glass-works',
      title: 'Aluminum & Glass Works',
      slug: 'aluminum-glass-works',
      description: 'Doors, windows, partitions, shower glass & shopfronts.',
      image: images.services.aluminumGlassWorks.card,
    },
  ],
  viewAllHref: '/services',
};

// 3. Wallpaper Fixing Installation
const WALLPAPER_FIXING_DATA = {
  id: 'wallpaper-fixing-installation',
  title: 'Wallpaper Fixing Installation',
  slug: 'wallpaper-fixing-installation',
  heroImage: images.services.wallpaperFixing.banner || images.services.wallpaperFixing.card,
  overviewLead:
    'Professional wallpaper installation services that enhance interiors with seamless finishes, stylish designs, and long-lasting quality for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert wallpaper installation for homes, creating elegant and modern interior spaces with a flawless finish.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality wallpaper fixing for offices, retail stores, hotels, and commercial spaces, enhancing aesthetics with a professional look.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable wall covering installation for industrial offices, showrooms, and facility interiors, providing a clean and professional finish.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'aluminum-glass-works',
      title: 'Aluminum & Glass Works',
      slug: 'aluminum-glass-works',
      description: 'Doors, windows, partitions, shower glass & shopfronts.',
      image: images.services.aluminumGlassWorks.card,
    },
    {
      id: 'welding-services',
      title: 'Welding Services',
      slug: 'welding-services',
      description: 'Mild steel, stainless & aluminum welding on-site.',
      image: images.services.weldingServices.card,
    },
    {
      id: 'carpentry-services',
      title: 'Carpentry Services',
      slug: 'carpentry-services',
      description: 'Doors, cabinets, wardrobes, partitions & furniture repair.',
      image: images.services.carpentryServices.card,
    },
  ],
  viewAllHref: '/services',
};

// 4. Aluminum & Glass Works
const ALUMINUM_GLASS_WORKS_DATA = {
  id: 'aluminum-glass-works',
  title: 'Aluminum & Glass Works',
  slug: 'aluminum-glass-works',
  heroImage: images.services.aluminumGlassWorks.banner || images.services.aluminumGlassWorks.card,
  overviewLead:
    'Professional aluminum and glass installation solutions that combine durability, functionality, and modern design for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert installation of aluminum doors, windows, partitions, and glass works for stylish and secure homes.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality aluminum and glass solutions for commercial spaces with a modern, professional finish.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable aluminum and glass installations for factories, warehouses, and industrial facilities, ensuring strength, safety, and long-lasting performance.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'welding-services',
      title: 'Welding Services',
      slug: 'welding-services',
      description: 'Mild steel, stainless & aluminum welding on-site.',
      image: images.services.weldingServices.card,
    },
    {
      id: 'carpentry-services',
      title: 'Carpentry Services',
      slug: 'carpentry-services',
      description: 'Doors, cabinets, wardrobes, partitions & furniture repair.',
      image: images.services.carpentryServices.card,
    },
    {
      id: 'floor-tiling',
      title: 'Floor Tiling',
      slug: 'floor-tiling',
      description: 'Ceramic, porcelain & marble tile installation and repair.',
      image: images.services.floorTiling.card,
    },
  ],
  viewAllHref: '/services',
};

// 5. Painting Services
const PAINTING_SERVICES_DATA = {
  id: 'painting-services',
  title: 'Painting Services',
  slug: 'painting-services',
  heroImage: images.services.paintingServices.banner || images.services.paintingServices.card,
  overviewLead:
    'Professional interior and exterior painting services delivering flawless finishes, premium quality coatings, and long-lasting visual appeal for residential, commercial, and industrial properties.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert painting services for homes, providing high-quality finishes that refresh and protect every space.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional painting solutions for offices, retail stores, restaurants, and commercial buildings, creating a clean and modern look.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable painting services for factories, warehouses, and industrial facilities, ensuring long-lasting protection and a professional finish.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'wallpaper-fixing-installation',
      title: 'Wallpaper Fixing Installation',
      slug: 'wallpaper-fixing-installation',
      description: 'Decorative & branded wall stickers, decals and wall murals.',
      image: images.services.wallpaperFixing.card,
    },
    {
      id: 'aluminum-glass-works',
      title: 'Aluminum & Glass Works',
      slug: 'aluminum-glass-works',
      description: 'Doors, windows, partitions, shower glass & shopfronts.',
      image: images.services.aluminumGlassWorks.card,
    },
    {
      id: 'welding-services',
      title: 'Welding Services',
      slug: 'welding-services',
      description: 'Mild steel, stainless & aluminum welding on-site.',
      image: images.services.weldingServices.card,
    },
  ],
  viewAllHref: '/services',
};
// 6. Air Conditioning
const AIR_CONDITIONING_DATA = {
  id: 'air-conditioning',
  title: 'Air-Conditioning',
  slug: 'air-conditioning',
  heroImage: images.services.airConditioning.banner || images.services.airConditioning.card,
  overviewLead:
    'Professional air-conditioning services for efficient cooling, energy savings, and year-round comfort.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert AC installation and maintenance for homes, providing reliable cooling and enhanced indoor comfort.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-performance air-conditioning solutions for offices, retail stores, restaurants, and commercial buildings, ensuring a comfortable environment.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Efficient air-conditioning systems for factories, warehouses, and industrial facilities, designed for reliable performance and optimal climate control.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'roof-waterproofing',
      title: 'Roof Waterproofing',
      slug: 'roof-waterproofing',
      description: 'Leak-proof roof, balcony & bathroom waterproofing solutions.',
      image: images.services.roofWaterproofing.card,
    },
    {
      id: 'general-maintenance',
      title: 'General Maintenance',
      slug: 'general-maintenance',
      description: 'All-in-one annual maintenance for villas, apartments & businesses.',
      image: images.services.generalMaintenance.card,
    },
    {
      id: 'interlock-installation',
      title: 'Interlock Installation',
      slug: 'interlock-installation',
      description: 'Driveway, parking & garden interlock paving installation.',
      image: images.services.interlockInstallation.card,
    },
  ],
  viewAllHref: '/services',
};

// 7. Carpentry Services
const CARPENTRY_SERVICES_DATA = {
  id: 'carpentry-services',
  title: 'Carpentry Services',
  slug: 'carpentry-services',
  heroImage: images.services.carpentryServices.banner || images.services.carpentryServices.card,
  overviewLead:
    'Professional carpentry solutions delivering quality craftsmanship, durable woodwork, and custom designs for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert carpentry services for doors, cabinets, wardrobes, furniture, and custom woodwork that enhance your home.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality carpentry solutions for offices, retail stores, restaurants, and commercial interiors, combining functionality with a professional finish.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable carpentry works for factories, warehouses, and industrial facilities, including partitions, storage units, and custom wooden structures.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'floor-tiling',
      title: 'Floor Tiling',
      slug: 'floor-tiling',
      description: 'Ceramic, porcelain & marble tile installation and repair.',
      image: images.services.floorTiling.card,
    },
    {
      id: 'wood-flooring',
      title: 'Wood Flooring',
      slug: 'wood-flooring',
      description: 'Laminate, engineered & vinyl wood flooring installation.',
      image: images.services.woodFlooring.card,
    },
    {
      id: 'air-conditioning',
      title: 'Air-Conditioning',
      slug: 'air-conditioning',
      description: 'Delivering cool comfort with trusted Air-Conditioning expertise.',
      image: images.services.airConditioning.card,
    },
  ],
  viewAllHref: '/services',
};

// 8. Roof Waterproofing
const ROOF_WATERPROOFING_DATA = {
  id: 'roof-waterproofing',
  title: 'Roof Waterproofing',
  slug: 'roof-waterproofing',
  heroImage: images.services.roofWaterproofing.banner || images.services.roofWaterproofing.card,
  overviewLead:
    'Professional roof waterproofing solutions for long-lasting protection against leaks, moisture, and weather damage.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert roof waterproofing services for homes, preventing water leakage and protecting your property from moisture damage.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Reliable waterproofing solutions for offices, retail stores, hotels, and commercial buildings, ensuring long-term protection and structural integrity.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Heavy-duty roof waterproofing for factories, warehouses, and industrial facilities, safeguarding structures against harsh weather and water infiltration.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'general-maintenance',
      title: 'General Maintenance',
      slug: 'general-maintenance',
      description: 'All-in-one annual maintenance for villas, apartments & businesses.',
      image: images.services.generalMaintenance.card,
    },
    {
      id: 'interlock-installation',
      title: 'Interlock Installation',
      slug: 'interlock-installation',
      description: 'Driveway, parking & garden interlock paving installation.',
      image: images.services.interlockInstallation.card,
    },
    {
      id: 'air-filtration-systems',
      title: 'Air Filtration Systems',
      slug: 'air-filtration-systems',
      description: 'Expert Systems Installation tailored to your residential and commercial needs.',
      image: images.services.airFiltration.card,
    },
  ],
  viewAllHref: '/services',
};

// 9. Floor Tiling
const FLOOR_TILING_DATA = {
  id: 'floor-tiling',
  title: 'Floor Tiling',
  slug: 'floor-tiling',
  heroImage: images.services.floorTiling.banner || images.services.floorTiling.card,
  overviewLead:
    'Professional floor tiling solutions that combine durability, precision, and elegant finishes for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert floor tiling for homes, creating stylish, durable, and easy-to-maintain living spaces.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality floor tiling for offices, retail stores, restaurants, and commercial buildings, ensuring a modern and professional finish.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Heavy-duty floor tiling solutions for factories, warehouses, and industrial facilities, built to withstand demanding environments and long-term use.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'wood-flooring',
      title: 'Wood Flooring',
      slug: 'wood-flooring',
      description: 'Laminate, engineered & vinyl wood flooring installation.',
      image: images.services.woodFlooring.card,
    },
    {
      id: 'air-conditioning',
      title: 'Air-Conditioning',
      slug: 'air-conditioning',
      description: 'Delivering cool comfort with trusted Air-Conditioning expertise.',
      image: images.services.airConditioning.card,
    },
    {
      id: 'roof-waterproofing',
      title: 'Roof Waterproofing',
      slug: 'roof-waterproofing',
      description: 'Leak-proof roof, balcony & bathroom waterproofing solutions.',
      image: images.services.roofWaterproofing.card,
    },
  ],
  viewAllHref: '/services',
};

// 10. Wall Tiling
const WALL_TILING_DATA = {
  id: 'wall-tiling',
  title: 'Wall Tiling',
  slug: 'wall-tiling',
  heroImage: images.services.wallTiling.banner || images.services.wallTiling.card,
  overviewLead:
    'Professional wall tiling solutions that deliver durable, stylish, and high-quality finishes for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: "Expert wall tiling for kitchens, bathrooms, and living spaces, enhancing your home's beauty and durability.",
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality wall tiling for offices, retail stores, restaurants, hotels, and commercial buildings, creating a modern and professional appearance.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable wall tiling solutions for factories, warehouses, and industrial facilities, designed for long-lasting performance and easy maintenance.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'electromechanical-installation',
      title: 'Electromechanical Installation',
      slug: 'electromechanical-installation',
      description: 'Complete Electromechanical Installation services tailored to your project needs.',
      image: images.services.electromechanical.card,
    },
    {
      id: 'fixtures-repairing',
      title: 'Fixtures Repairing',
      slug: 'fixtures-repairing',
      description: 'Expert fixture repairs for reliable performance and lasting durability.',
      image: images.services.fixturesRepairing.card,
    },
    {
      id: 'sanitary-installation',
      title: 'Sanitary Installation',
      slug: 'sanitary-installation',
      description: 'Precision sanitary installations ensuring safety, functionality, and lasting reliability.',
      image: images.services.sanitaryInstallation.card,
    },
  ],
  viewAllHref: '/services',
};

// 11. Welding Services
const WELDING_SERVICES_DATA = {
  id: 'welding-services',
  title: 'Welding Services',
  slug: 'welding-services',
  heroImage: images.services.weldingServices.banner || images.services.weldingServices.card,
  overviewLead:
    'Professional welding solutions that provide strong, precise, and durable metal fabrication and repair for residential, commercial, and industrial projects.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert welding services for gates, railings, grills, fences, and other custom metal works for homes.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Reliable welding solutions for offices, retail stores, commercial buildings, and structural metal fabrication projects.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Heavy-duty welding services for factories, warehouses, industrial structures, machinery, and equipment, ensuring strength and long-lasting performance.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'carpentry-services',
      title: 'Carpentry Services',
      slug: 'carpentry-services',
      description: 'Doors, cabinets, wardrobes, partitions & furniture repair.',
      image: images.services.carpentryServices.card,
    },
    {
      id: 'floor-tiling',
      title: 'Floor Tiling',
      slug: 'floor-tiling',
      description: 'Ceramic, porcelain & marble tile installation and repair.',
      image: images.services.floorTiling.card,
    },
    {
      id: 'wood-flooring',
      title: 'Wood Flooring',
      slug: 'wood-flooring',
      description: 'Laminate, engineered & vinyl wood flooring installation.',
      image: images.services.woodFlooring.card,
    },
  ],
  viewAllHref: '/services',
};

// 12. Light Partitions Installation
const LIGHT_PARTITIONS_DATA = {
  id: 'light-partitions-installation',
  title: 'Light Partitions Installation',
  slug: 'light-partitions-installation',
  heroImage: images.services.lightPartitions.banner || images.services.lightPartitions.card,
  overviewLead:
    'Professional light partition installation services that create functional, modern, and flexible interior spaces for residential, commercial, and industrial environments.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert light partition installation for homes, providing stylish room divisions with a clean and modern finish.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality partition solutions for offices, retail stores, restaurants, and commercial buildings, optimizing space and improving functionality.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable light partition installations for factories, warehouses, and industrial facilities, creating efficient and well-organized workspaces.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'electrical-fittings',
      title: 'Electrical Fittings',
      slug: 'electrical-fittings',
      description: 'Wiring, repairs, installations & upgrades by certified electricians.',
      image: images.services.electricalFittings.card,
    },
    {
      id: 'plumbing-installation',
      title: 'Plumbing Installation',
      slug: 'plumbing-installation',
      description: 'Leaks, fittings, water tanks & full plumbing installations.',
      image: images.services.plumbingInstallation.card,
    },
    {
      id: 'painting-services',
      title: 'Painting Services',
      slug: 'painting-services',
      description: 'Interior & exterior painting with premium UAE-grade finishes.',
      image: images.services.paintingServices.card,
    },
  ],
  viewAllHref: '/services',
};

// 13. Sanitary Installation
const SANITARY_INSTALLATION_DATA = {
  id: 'sanitary-installation',
  title: 'Sanitary Installation',
  slug: 'sanitary-installation',
  heroImage: images.services.sanitaryInstallation.banner || images.services.sanitaryInstallation.card,
  overviewLead:
    'Professional sanitary installation services that ensure hygienic, efficient, and reliable plumbing systems for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert installation of toilets, wash basins, showers, and sanitary fixtures for comfortable and efficient homes.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional sanitary installations for offices, retail stores, restaurants, hotels, and commercial buildings, ensuring hygiene and reliable performance.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable sanitary installation solutions for factories, warehouses, and industrial facilities, designed for efficient operation and long-term reliability.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'ventilations-installation',
      title: 'Ventilations Installation',
      slug: 'ventilations-installation',
      description: 'Expert ventilation solutions designed for efficient and reliable air circulation.',
      image: images.services.ventilationsInstallation.card,
    },
    {
      id: 'light-partitions-installation',
      title: 'Light Partitions Installation',
      slug: 'light-partitions-installation',
      description: 'recision light partition systems designed for durability, privacy, and a clean finish.',
      image: images.services.lightPartitions.card,
    },
    {
      id: 'electrical-fittings',
      title: 'Electrical Fittings',
      slug: 'electrical-fittings',
      description: 'Wiring, repairs, installations & upgrades by certified electricians.',
      image: images.services.electricalFittings.card,
    },
  ],
  viewAllHref: '/services',
};

// 14. Ventilations Installation
const VENTILATIONS_INSTALLATION_DATA = {
  id: 'ventilations-installation',
  title: 'Ventilations Installation',
  slug: 'ventilations-installation',
  heroImage: images.services.ventilationsInstallation.banner || images.services.ventilationsInstallation.card,
  overviewLead:
    'Professional ventilation installation services that improve airflow, indoor air quality, and comfort for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert ventilation solutions for homes, ensuring fresh air circulation and a healthier indoor environment.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-performance ventilation systems for offices, retail stores, restaurants, and commercial buildings, enhancing comfort and air quality.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Reliable ventilation installations for factories, warehouses, and industrial facilities, providing efficient airflow and a safe working environment.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'ventilations-installation',
      title: 'Ventilations Installation',
      slug: 'ventilations-installation',
      description: 'Expert ventilation solutions designed for efficient and reliable air circulation.',
      image: images.services.ventilationsInstallation.card,
    },
    {
      id: 'electrical-fittings',
      title: 'Electrical Fittings',
      slug: 'electrical-fittings',
      description: 'Wiring, repairs, installations & upgrades by certified electricians.',
      image: images.services.electricalFittings.card,
    },
    {
      id: 'plumbing-installation',
      title: 'Plumbing Installation',
      slug: 'plumbing-installation',
      description: 'Leaks, fittings, water tanks & full plumbing installations.',
      image: images.services.plumbingInstallation.card,
    },
  ],
  viewAllHref: '/services',
};

// 15. Electromechanical Installation
const ELECTROMECHANICAL_DATA = {
  id: 'electromechanical-installation',
  title: 'Electromechanical Installation',
  slug: 'electromechanical-installation',
  heroImage: images.services.electromechanical.banner || images.services.electromechanical.card,
  overviewLead:
    'Professional electromechanical installation services for safe, efficient, and reliable system performance.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert installation of electromechanical systems for homes, ensuring reliable performance and long-term efficiency.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional electromechanical solutions for offices, retail stores, hotels, and commercial buildings, designed for smooth and efficient operations.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Reliable electromechanical installations for factories, warehouses, and industrial facilities, ensuring high performance, safety, and operational efficiency.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'fixtures-repairing',
      title: 'Fixtures Repairing',
      slug: 'fixtures-repairing',
      description: 'Expert fixture repairs for reliable performance and lasting durability.',
      image: images.services.fixturesRepairing.card,
    },
    {
      id: 'sanitary-installation',
      title: 'Sanitary Installation',
      slug: 'sanitary-installation',
      description: 'Precision sanitary installations ensuring safety, functionality, and lasting reliability.',
      image: images.services.sanitaryInstallation.card,
    },
    {
      id: 'ventilations-installation',
      title: 'Ventilations Installation',
      slug: 'ventilations-installation',
      description: 'Expert ventilation solutions designed for efficient and reliable air circulation.',
      image: images.services.ventilationsInstallation.card,
    },
  ],
  viewAllHref: '/services',
};

// 16. Interlock Installation
const INTERLOCK_INSTALLATION_DATA = {
  id: 'interlock-installation',
  title: 'Interlock Installation',
  slug: 'interlock-installation',
  heroImage: images.services.interlockInstallation.banner || images.services.interlockInstallation.card,
  overviewLead:
    'Professional interlock paving installation services that deliver durable, attractive, and long-lasting surfaces for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert interlock installation for driveways, walkways, patios, and outdoor spaces, enhancing both beauty and durability.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality interlock paving for offices, retail stores, hotels, and commercial properties, creating safe and professional outdoor areas.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Heavy-duty interlock installation for factories, warehouses, parking areas, and industrial facilities, built to withstand heavy traffic and demanding conditions.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'air-filtration-systems',
      title: 'Air Filtration Systems',
      slug: 'air-filtration-systems',
      description: 'Expert Systems Installation tailored to your residential and commercial needs.',
      image: images.services.airFiltration.card,
    },
    {
      id: 'false-ceiling-installation',
      title: 'False Ceiling Installation',
      slug: 'false-ceiling-installation',
      description: 'Professional false ceiling installation for modern, stylish, and functional interiors.',
      image: images.services.falseCeiling.card,
    },
    {
      id: 'wall-tiling',
      title: 'Wall Tiling',
      slug: 'wall-tiling',
      description: 'Transform your walls with precision Wall Tiling solutions.',
      image: images.services.wallTiling.card,
    },
  ],
  viewAllHref: '/services',
};

// 17. False Ceiling Installation
const FALSE_CEILING_DATA = {
  id: 'false-ceiling-installation',
  title: 'False Ceiling Installation',
  slug: 'false-ceiling-installation',
  heroImage: images.services.falseCeiling.banner || images.services.falseCeiling.card,
  overviewLead:
    'Professional false ceiling installation services that enhance aesthetics, improve insulation, and provide a modern finish for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert false ceiling installation for homes, creating stylish interiors with improved lighting and comfort.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality false ceiling solutions for offices, retail stores, restaurants, and commercial buildings, delivering a clean and professional appearance.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable false ceiling installations for factories, warehouses, and industrial facilities, designed to improve functionality and maintain a professional environment.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'wall-tiling',
      title: 'Wall Tiling',
      slug: 'wall-tiling',
      description: 'Transform your walls with precision Wall Tiling solutions.',
      image: images.services.wallTiling.card,
    },
    {
      id: 'electromechanical-installation',
      title: 'Electromechanical Installation',
      slug: 'electromechanical-installation',
      description: 'Complete Electromechanical Installation services tailored to your project needs.',
      image: images.services.electromechanical.card,
    },
    {
      id: 'fixtures-repairing',
      title: 'Fixtures Repairing',
      slug: 'fixtures-repairing',
      description: 'Expert fixture repairs for reliable performance and lasting durability.',
      image: images.services.fixturesRepairing.card,
    },
  ],
  viewAllHref: '/services',
};

// 18. Fixtures Repairing
const FIXTURES_REPAIRING_DATA = {
  id: 'fixtures-repairing',
  title: 'Fixtures Repairing',
  slug: 'fixtures-repairing',
  heroImage: images.services.fixturesRepairing.banner || images.services.fixturesRepairing.card,
  overviewLead:
    'Professional fixture repair services that restore the functionality, safety, and appearance of electrical, plumbing, and interior fixtures for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert repair of home fixtures, ensuring reliable performance and long-lasting functionality.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional fixture repair services for offices, retail stores, restaurants, hotels, and commercial buildings, minimizing disruptions.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Reliable fixture repair solutions for factories, warehouses, and industrial facilities, ensuring safe and efficient operation.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'sanitary-installation',
      title: 'Sanitary Installation',
      slug: 'sanitary-installation',
      description: 'Precision sanitary installations ensuring safety, functionality, and lasting reliability.',
      image: images.services.sanitaryInstallation.card,
    },
    {
      id: 'ventilations-installation',
      title: 'Ventilations Installation',
      slug: 'ventilations-installation',
      description: 'Expert ventilation solutions designed for efficient and reliable air circulation.',
      image: images.services.ventilationsInstallation.card,
    },
    {
      id: 'light-partitions-installation',
      title: 'Light Partitions Installation',
      slug: 'light-partitions-installation',
      description: 'recision light partition systems designed for durability, privacy, and a clean finish.',
      image: images.services.lightPartitions.card,
    },
  ],
  viewAllHref: '/services',
};

// 19. General Maintenance
const GENERAL_MAINTENANCE_DATA = {
  id: 'general-maintenance',
  title: 'General Maintenance',
  slug: 'general-maintenance',
  heroImage: images.services.generalMaintenance.banner || images.services.generalMaintenance.card,
  overviewLead:
    'Comprehensive maintenance services that ensure the safety, functionality, and long-term performance of residential, commercial, and industrial properties.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Reliable maintenance services for homes, including repairs, inspections, and routine upkeep to keep your property in excellent condition.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'Professional maintenance solutions for offices, retail stores, restaurants, and commercial buildings, ensuring smooth daily operations.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Comprehensive maintenance services for factories, warehouses, and industrial facilities, minimizing downtime and maximizing operational efficiency.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'interlock-installation',
      title: 'Interlock Installation',
      slug: 'interlock-installation',
      description: 'Driveway, parking & garden interlock paving installation.',
      image: images.services.interlockInstallation.card,
    },
    {
      id: 'air-filtration-systems',
      title: 'Air Filtration Systems',
      slug: 'air-filtration-systems',
      description: 'Expert Systems Installation tailored to your residential and commercial needs.',
      image: images.services.airFiltration.card,
    },
    {
      id: 'false-ceiling-installation',
      title: 'False Ceiling Installation',
      slug: 'false-ceiling-installation',
      description: 'Professional false ceiling installation for modern, stylish, and functional interiors.',
      image: images.services.falseCeiling.card,
    },
  ],
  viewAllHref: '/services',
};

// 20. Wood Flooring
const WOOD_FLOORING_DATA = {
  id: 'wood-flooring',
  title: 'Wood Flooring',
  slug: 'wood-flooring',
  heroImage: images.services.woodFlooring.banner || images.services.woodFlooring.card,
  overviewLead:
    'Professional wood flooring solutions that combine elegance, durability, and long-lasting performance for residential, commercial, and industrial spaces.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert wood flooring installation for homes, creating warm, stylish, and comfortable living spaces.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-quality wood flooring for offices, retail stores, hotels, and commercial spaces, delivering a modern and professional appearance.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Durable wood flooring solutions for industrial offices, showrooms, and specialized workspaces, designed for strength and lasting performance.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'air-conditioning',
      title: 'Air-Conditioning',
      slug: 'air-conditioning',
      description: 'Delivering cool comfort with trusted Air-Conditioning expertise.',
      image: images.services.airConditioning.card,
    },
    {
      id: 'roof-waterproofing',
      title: 'Roof Waterproofing',
      slug: 'roof-waterproofing',
      description: 'Leak-proof roof, balcony & bathroom waterproofing solutions.',
      image: images.services.roofWaterproofing.card,
    },
    {
      id: 'general-maintenance',
      title: 'General Maintenance',
      slug: 'general-maintenance',
      description: 'All-in-one annual maintenance for villas, apartments & businesses.',
      image: images.services.generalMaintenance.card,
    },
  ],
  viewAllHref: '/services',
};

// 21. Air Filtration Systems
const AIR_FILTRATION_DATA = {
  id: 'air-filtration-systems',
  title: 'Air Filtration Systems',
  slug: 'air-filtration-systems',
  heroImage: images.services.airFiltration.banner || images.services.airFiltration.card,
  overviewLead:
    'Professional air filtration solutions for cleaner air, improved ventilation, and healthier indoor environments.',
  servicesOfferedTitle: 'Services Offered:',
  servicesOffered: [
    {
      id: 'residential',
      label: 'Residential:',
      text: 'Expert air filtration solutions for homes, providing cleaner air and improved indoor comfort.',
    },
    {
      id: 'commercial',
      label: 'Commercial:',
      text: 'High-performance air filtration systems for offices, retail stores, restaurants, and commercial buildings, promoting a healthier workspace.',
    },
    {
      id: 'industrial',
      label: 'Industrial:',
      text: 'Advanced air filtration solutions for factories, warehouses, and industrial facilities, ensuring efficient contaminant control and reliable system performance.',
    },
  ],
  relatedServicesTitle: 'Related Services',
  relatedServicesSubtitle:
    'Explore our range of complementary services designed to meet your project needs.',
  relatedServices: [
    {
      id: 'false-ceiling-installation',
      title: 'False Ceiling Installation',
      slug: 'false-ceiling-installation',
      description: 'Professional false ceiling installation for modern, stylish, and functional interiors.',
      image: images.services.falseCeiling.card,
    },
    {
      id: 'wall-tiling',
      title: 'Wall Tiling',
      slug: 'wall-tiling',
      description: 'Transform your walls with precision Wall Tiling solutions.',
      image: images.services.wallTiling.card,
    },
    {
      id: 'electromechanical-installation',
      title: 'Electromechanical Installation',
      slug: 'electromechanical-installation',
      description: 'Complete Electromechanical Installation services tailored to your project needs.',
      image: images.services.electromechanical.card,
    },
  ],
  viewAllHref: '/services',
};

export const SERVICE_DETAILS_DATA = {
  // Service 1: Electrical Fittings
  'electrical-fittings': ELECTRICAL_FITTINGS_DATA,
  'electrical-repair-installation': ELECTRICAL_FITTINGS_DATA,

  // Service 2: Plumbing Installation
  'plumbing-installation': PLUMBING_INSTALLATION_DATA,
  'plumbing-services-leak-repairs': PLUMBING_INSTALLATION_DATA,

  // Service 3: Wallpaper Fixing Installation
  'wallpaper-fixing-installation': WALLPAPER_FIXING_DATA,
  'wallpaper-fixing': WALLPAPER_FIXING_DATA,
  'wallpaper-sticker-installation': WALLPAPER_FIXING_DATA,

  // Service 4: Aluminum & Glass Works
  'aluminum-glass-works': ALUMINUM_GLASS_WORKS_DATA,
  'aluminum-glass-work': ALUMINUM_GLASS_WORKS_DATA,

  // Service 5: Painting Services
  'painting-services': PAINTING_SERVICES_DATA,
  'interior-exterior-painting': PAINTING_SERVICES_DATA,

  // Service 6: Air Conditioning
  'air-conditioning': AIR_CONDITIONING_DATA,
  'ac-hvac-maintenance': AIR_CONDITIONING_DATA,

  // Service 7: Carpentry Services
  'carpentry-services': CARPENTRY_SERVICES_DATA,
  'carpentry-woodwork-restoration': CARPENTRY_SERVICES_DATA,

  // Service 8: Roof Waterproofing
  'roof-waterproofing': ROOF_WATERPROOFING_DATA,
  'roof-wet-area-waterproofing': ROOF_WATERPROOFING_DATA,

  // Service 9: Floor Tiling
  'floor-tiling': FLOOR_TILING_DATA,
  'floor-tile-marble-installation': FLOOR_TILING_DATA,

  // Service 10: Wall Tiling
  'wall-tiling': WALL_TILING_DATA,
  'wall-tiling-backsplash-fixing': WALL_TILING_DATA,

  // Service 11: Welding Services
  'welding-services': WELDING_SERVICES_DATA,
  'structural-welding-fabrication': WELDING_SERVICES_DATA,

  // Service 12: Light Partitions Installation
  'light-partitions-installation': LIGHT_PARTITIONS_DATA,
  'light-partitions': LIGHT_PARTITIONS_DATA,

  // Service 13: Sanitary Installation
  'sanitary-installation': SANITARY_INSTALLATION_DATA,

  // Service 14: Ventilations Installation
  'ventilations-installation': VENTILATIONS_INSTALLATION_DATA,

  // Service 15: Electromechanical Installation
  'electromechanical-installation': ELECTROMECHANICAL_DATA,
  'electromechanical': ELECTROMECHANICAL_DATA,

  // Service 16: Interlock Installation
  'interlock-installation': INTERLOCK_INSTALLATION_DATA,

  // Service 17: False Ceiling Installation
  'false-ceiling-installation': FALSE_CEILING_DATA,
  'false-ceiling': FALSE_CEILING_DATA,
  'gypsum-false-ceiling-work': FALSE_CEILING_DATA,

  // Service 18: Fixtures Repairing
  'fixtures-repairing': FIXTURES_REPAIRING_DATA,

  // Service 19: General Maintenance
  'general-maintenance': GENERAL_MAINTENANCE_DATA,

  // Service 20: Wood Flooring
  'wood-flooring': WOOD_FLOORING_DATA,

  // Service 21: Air Filtration Systems
  'air-filtration-systems': AIR_FILTRATION_DATA,
  'air-filtration': AIR_FILTRATION_DATA,
  'building-cleaning-sanitization': AIR_FILTRATION_DATA,
};

/** Default service configuration for fallback rendering */
export const DEFAULT_SERVICE_SLUG = 'electrical-fittings';

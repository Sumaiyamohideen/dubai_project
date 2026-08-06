/* src/components/layout/Footer/constants.js */

export const LOGO_SRC = '/assets/images/logo/company-logo.svg';
export const LOGO_ALT = 'Chalachal Technical Services LLC';

/**
 * Static content and navigation structure for the Footer component.
 * Sourced directly from Figma design specs.
 */
export const FOOTER_DATA = {
  brand: {
    description:
      'Chalachal Technical Services LLC — licensed technical services and maintenance company serving all seven emirates of the UAE.',
    whatsappBtn: {
      label: 'WHATSAPP',
      href: 'https://wa.me/971554579790',
      target: '_blank',
      rel: 'noopener noreferrer',
      iconName: 'whatsapp',
    },
    callBtn: {
      label: 'CALL',
      href: 'tel:+971554579790', 
      iconName: 'phone',
    },
  },
  columns: [
    {
      id: 'services',
      title: 'Services',
      links: [
        { label: 'Electrical Works', href: '/services/electrical-fittings' },
        { label: 'Plumbing Services', href: '/services/plumbing-installation' },
        { label: 'Painting Services', href: '/services/painting-services' },
        { label: 'Wall Sticker Installation', href: '/services/wallpaper-fixing-installation' },
        { label: 'Aluminum & Glass Works', href: '/services/aluminum-glass-works' },
        { label: 'Welding Services', href: '/services/welding-services' },
        { label: 'Carpentry Services', href: '/services/carpentry-services' },
        { label: 'Floor Tiling', href: '/services/floor-tiling' },
        { label: 'All services', href: '/services', showArrow: true },
      ],
    },
    {
      id: 'service-areas',
      title: 'Service Areas',
      links: [
        { label: 'Dubai', href: '/contact' },
        { label: 'Sharjah', href: '/contact' },
        { label: 'Ras Al Khaimah', href: '/contact' },
        { label: 'Umm Al Quwain', href: '/contact' },
        { label: 'Abu Dhabi', href: '/contact' },
        { label: 'Ajman', href: '/contact' },
        { label: 'Fujairah', href: '/contact' },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      items: [
        { icon: 'phone', text: '+971 55 457 9790', href: 'tel:+971554579790' },
        { icon: 'mail', text: 'chalachaltechnical@gmail.com', href: 'mailto:chalachaltechnical@gmail.com' },
        { icon: 'map-pin', text: 'United Arab Emirates' },
        { icon: 'clock', text: 'Sat – Thu, 24/7' },
      ],
    },
  ],
  bottom: {
    copyright: '2026 Chalachal Technical Services LLC',
    designer: 'Designed by Quantixmedia',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
};


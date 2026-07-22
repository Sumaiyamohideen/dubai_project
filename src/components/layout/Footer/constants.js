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
        { label: 'Electrical Works', href: '#services' },
        { label: 'Plumbing Services', href: '#services' },
        { label: 'Painting Services', href: '#services' },
        { label: 'Wall Sticker Installation', href: '#services' },
        { label: 'Aluminum & Glass Works', href: '#services' },
        { label: 'Welding Services', href: '#services' },
        { label: 'Carpentry Services', href: '#services' },
        { label: 'Floor Tiling', href: '#services' },
        { label: 'All services', href: '#services', showArrow: true },
      ],
    },
    {
      id: 'service-areas',
      title: 'Service Areas',
      links: [
        { label: 'Dubai', href: '#areas' },
        { label: 'Sharjah', href: '#areas' },
        { label: 'Ras Al Khaimah', href: '#areas' },
        { label: 'Umm Al Quwain', href: '#areas' },
        { label: 'Abu Dhabi', href: '#areas' },
        { label: 'Ajman', href: '#areas' },
        { label: 'Fujairah', href: '#areas' },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      items: [
        { icon: 'phone', text: '+971 55 457 9790', href: 'tel:+971554579790' },
        { icon: 'mail', text: 'chalachaltechnical@gmail.com', href: 'mailto:chalachaltechnical@gmail.com' },
        { icon: 'map-pin', text: 'United Arab Emirates' },
        { icon: 'clock', text: 'Sat – Thu, 8:00 AM – 8:00 PM' },
      ],
    },
  ],
};

/* src/constants/navigation.js */
import { PATHS } from '../routes/paths';

export const NAV_LINKS = [
  { label: 'HOME', path: PATHS.HOME },
  { label: 'ABOUT', path: PATHS.ABOUT },
  { label: 'SERVICES', path: PATHS.SERVICES },
  { label: 'PROJECTS', path: PATHS.PROJECTS },
  { label: 'CONTACT', path: PATHS.CONTACT }
];

export const COMPANY_CONTACT = {
  phone: '+971 50 000 0000',
  phoneRaw: '+971500000000',
  whatsappMsgHero: 'Hello Chalachal Technical Services, I would like to get a free quote for maintenance services.',
  whatsappMsgGeneral: 'Hello, I have an inquiry about your technical maintenance and renovation services.',
  email: 'info@chalachaltechnical.com',
  address: 'Office 104, Business Bay, Dubai, United Arab Emirates',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM (Closed Sunday)'
};

export const FOOTER_COLUMNS = {
  services: [
    { label: 'Electrical Repair', path: '/services/electrical-repair-installation' },
    { label: 'Plumbing Services', path: '/services/plumbing-services-leak-repairs' },
    { label: 'Painting Services', path: '/services/interior-exterior-painting' },
    { label: 'Waterproofing Works', path: '/services/roof-wet-area-waterproofing' },
    { label: 'Tiling & Flooring', path: '/services/floor-tile-marble-installation' }
  ],
  serviceAreas: [
    { label: 'Dubai Maintenance', path: '/contact' },
    { label: 'Abu Dhabi Maintenance', path: '/contact' },
    { label: 'Sharjah Services', path: '/contact' },
    { label: 'Ajman Renovations', path: '/contact' },
    { label: 'Ras Al Khaimah Repairs', path: '/contact' }
  ]
};

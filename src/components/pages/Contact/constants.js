/* src/components/pages/Contact/constants.js */

/* ─── Hero ─────────────────────────────────────────────────── */
export const CONTACT_HERO_DATA = {
  title: "Let's get your project moving",
  description:
    'Tell us what you need. We respond within minutes during business hours, across all seven emirates.',
};

/* ─── Info Cards ────────────────────────────────────────────── */
/* Exact content from Figma Nodes 731:5100–731:5128 */
export const CONTACT_INFO_CARDS = [
  {
    id: 'phone',
    title: 'Call us',
    value: '+971 55 457 9790',
    cta: { label: 'Call Now', href: 'tel:+971554579790' },
    icon: 'contact-call',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    value: '+971 55 457 9790',
    cta: { label: 'Open WhatsApp', href: 'https://wa.me/971554579790' },
    icon: 'whatsapp',
  },
  {
    id: 'email',
    title: 'Email',
    value: 'chalachaltechnical@gmail.com',
    cta: { label: 'Send email', href: 'mailto:chalachaltechnical@gmail.com' },
    icon: 'mail',
  },
  {
    id: 'hours',
    title: 'Business hours',
    value: 'Sat \u2013 Thu, 8:00 AM \u2013 8:00 PM',
    cta: null,
    icon: 'clock',
  },
  {
    id: 'areas',
    title: 'Service Areas',
    value:
      'Dubai \u00b7 Abu Dhabi \u00b7 Sharjah \u00b7 Ajman \u00b7 Ras Al Khaimah \u00b7 Fujairah \u00b7 Umm Al Quwain',
    cta: null,
    icon: 'map-pin',
  },
];

/* ─── Form ──────────────────────────────────────────────────── */
/* Exact labels and placeholders from Figma Nodes 731:5088–731:5113 */
export const CONTACT_FORM_FIELDS = [
  {
    id: 'fullName',
    label: 'Full Name',
    placeholder: 'Your name',
    type: 'text',
    required: true,
    width: 'half',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    placeholder: '+971 5XXXXXXXX',
    type: 'tel',
    required: true,
    width: 'half',
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    required: true,
    width: 'full',
  },
  {
    id: 'service',
    label: 'Service Required',
    placeholder: 'Select a service',
    type: 'select',
    required: false,
    width: 'half',
    options: [
      'Electrical Fittings',
      'Plumbing Installation',
      'Painting Services',
      'Wallpaper Fixing Installation',
      'Aluminum & Glass Works',
      'Welding Services',
      'Carpentry Services',
      'Floor Tiling',
      'Wood Flooring',
      'Air-Conditioning',
      'Roof Waterproofing',
      'General Maintenance',
      'Interlock Installation',
      'Air Filtration Systems',
      'False Ceiling Installation',
      'Wall Tiling',
      'Electromechanical Installation',
      'Fixtures Repairing',
      'Sanitary Installation',
      'Ventilations Installation',
      'Light Partitions Installation',
    ],
  },
  {
    id: 'location',
    label: 'Location',
    placeholder: 'Select emirate',
    type: 'select',
    required: false,
    width: 'half',
    options: [
      'Dubai',
      'Abu Dhabi',
      'Sharjah',
      'Ajman',
      'Ras Al Khaimah',
      'Fujairah',
      'Umm Al Quwain',
    ],
  },
  {
    id: 'message',
    label: 'Message',
    placeholder: 'Tell about us the work...',
    type: 'textarea',
    required: false,
    width: 'full',
  },
];

/* Submit button label — Figma Node 731:5113 */
export const CONTACT_FORM_SUBMIT_LABEL = 'SEND MESSAGE';

/* ─── Map Location Data ─────────────────────────────────────── */
export const CONTACT_MAP_DATA = {
  url: 'https://maps.app.goo.gl/GT87anqgeNKjzYT86?g_st=ic',
  embedUrl:
    'https://maps.google.com/maps?q=United+Arab+Emirates&ftid=0x3e5e48dfb1ab12bd:0x33d32f56c0080aa7&z=12&output=embed',
  title: 'Google Maps location of Chalachal Technical Services LLC',
  buttonLabel: 'Open in Google Maps',
};


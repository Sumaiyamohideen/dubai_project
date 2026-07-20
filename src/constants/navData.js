/* src/constants/navData.js
 * All navigation data sourced from Figma desktop Navbar (node 731:1828).
 * Nav links confirmed from text nodes 731:1831 – 731:1835.
 * Phone number confirmed from text node 731:1838.
 */

/** @type {{ label: string, path: string }[]} */
export const NAV_LINKS = [
  { label: 'HOME',     path: '/'         },
  { label: 'ABOUT',   path: '/about'     },
  { label: 'SERVICES',path: '/services'  },
  { label: 'PROJECTS',path: '/projects'  },
  { label: 'CONTACT', path: '/contact'   },
];

/** Phone number as shown in Figma node 731:1838 */
export const PHONE_NUMBER = '+971 55 457 9790';

/** tel: href for the phone number */
export const PHONE_HREF = 'tel:+971554579790';

/** Primary CTA label as shown in Figma node 731:1837 */
export const CTA_LABEL = 'FREE QUOTE';

/** WhatsApp CTA href */
export const WHATSAPP_HREF = 'https://wa.me/971554579790';

/* src/components/layout/Navbar/constants.js
 * Component-level constants for Navbar behaviour and configuration.
 * Figma source: Desktop navbar rectangle 19 (731:1828), 1920×151px.
 * Logo image area: 123×100px at x=94, y=25.
 */

/** Scroll distance in px before the navbar gains its scrolled background */
export const SCROLL_THRESHOLD = 20;

/** ARIA IDs for hamburger → mobile menu linkage */
export const MOBILE_MENU_ID = 'mobile-nav-menu';
export const HAMBURGER_ID   = 'hamburger-button';

/**
 * Logo dimensions (ratio preserved from Figma logo area: 123w × 100h).
 * Actual rendered size is controlled via CSS; these serve as aspect-ratio
 * reference only.
 */
export const LOGO_ASPECT_W = 123;
export const LOGO_ASPECT_H = 100;

import { images } from '../../../assets/images';

export const LOGO_SRC = images.logo;
export const LOGO_ALT = 'Chalachal Technical Services LLC';


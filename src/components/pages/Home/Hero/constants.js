/* src/components/sections/Hero/constants.js */
import { images } from '@/assets/images';

/**
 * Badge configuration for the hero trust indicator pill.
 * Figma node: 731:1444 (background), 731:1445 (text), 731:1446 (icon)
 */
export const HERO_BADGE = {
  icon: 'shield-check',
  label: 'Licensed UAE Technical Services',
};

/**
 * Hero headline text segments.
 * The last segment uses the brand-green accent color.
 * Figma node: 731:1427
 */
export const HERO_HEADLINE = {
  main: 'Professional Technical Services & Maintenance Solutions ',
  accent: 'Across UAE',
};

/**
 * Hero subheadline description text.
 * Figma node: 731:1432
 */
export const HERO_DESCRIPTION =
  'Reliable maintenance and technical solutions for homes and businesses across the UAE.';

/**
 * Primary CTA button configuration.
 * Figma node: 731:1447 (bg), 731:1449 (text)
 */
export const HERO_CTA = {
  label: 'GET FREE QUOTE',
  href: '/contact',
  icon: 'arrow-up-right',
};

/**
 * Social proof inline stat displayed next to the avatar row.
 * Figma nodes: 731:1441 (value), 731:1442 (label)
 */
export const HERO_SOCIAL_PROOF = {
  value: '2,000+',
  label: 'Satisfied Client',
  avatars: images.hero.clientAvatars,
  extraAvatar: images.hero.extraAvatar,
};

/**
 * Number of avatar placeholders in the social proof row.
 * Figma nodes: 731:1451 through 731:1455
 */
export const HERO_AVATAR_COUNT = 4;

/**
 * Image keys used in Column 1 of the hero decorative marquee.
 * Sourced from the active service card assets in src/assets/images/services/.
 * Order matches the Figma hero left marquee column composition.
 *
 * Figma component: 731:1428 (Component 1)
 * Images mapped from: image 58, Rectangle12, image 34, rooftoping 3 1, image 56, image 60, image 62, image 64
 * Closest production equivalents from the mapped service cards:
 */
export const HERO_COLUMN_1_IMAGES = [
  { key: 'client01',         alt: 'Technical Client Showcase 1' },
  { key: 'client02',         alt: 'Technical Client Showcase 2' },
  { key: 'client03',         alt: 'Technical Client Showcase 3' },
  { key: 'projectUnused01',  alt: 'Technical Project Showcase' },
];

/**
 * Image keys used in Column 2 of the hero decorative marquee.
 * Sourced from the unused assets folder.
 */
export const HERO_COLUMN_2_IMAGES = [
  { key: 'client04',         alt: 'Technical Client Showcase 4' },
  { key: 'client05',         alt: 'Technical Client Showcase 5' },
  { key: 'client06',         alt: 'Technical Client Showcase 6' },
  { key: 'client01',         alt: 'Technical Client Showcase 1' },
];

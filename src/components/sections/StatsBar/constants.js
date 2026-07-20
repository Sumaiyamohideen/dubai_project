/* src/sections/StatsBar/constants.js */

/**
 * @typedef {Object} StatItem
 * @property {string} id - Unique identifier for the stat item
 * @property {string} value - Statistical numerical string (e.g., "10+", "24/7")
 * @property {string} label - Descriptive title for the statistic
 */

/**
 * Array of key performance statistics displayed in the StatsBar section.
 * Sourced directly from Figma design node 731:1457.
 * @type {StatItem[]}
 */
export const STATS_DATA = [
  {
    id: 'stat-years',
    value: '10+',
    label: 'Years Experience',
  },
  {
    id: 'stat-technicians',
    value: '100+',
    label: 'Experience Technicians',
  },
  {
    id: 'stat-projects',
    value: '2,000+',
    label: 'Projects Done',
  },
  {
    id: 'stat-support',
    value: '24/7',
    label: 'Technical Support',
  },
];

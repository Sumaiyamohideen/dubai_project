/* src/utils/cn.js */

/**
 * Conditional class name helper
 * @param {...(string|Object|boolean|null|undefined)} classes - class names or conditional configurations
 * @returns {string} - Cleaned space-separated class name string
 */
export default function cn(...classes) {
  const result = [];

  for (let i = 0; i < classes.length; i++) {
    const value = classes[i];
    if (!value) continue;

    if (typeof value === 'string') {
      result.push(value);
    } else if (Array.isArray(value)) {
      result.push(cn(...value));
    } else if (typeof value === 'object') {
      for (const key in value) {
        if (value[key]) {
          result.push(key);
        }
      }
    }
  }

  return result.join(' ');
}

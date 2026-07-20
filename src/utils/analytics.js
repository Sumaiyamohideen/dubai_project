/* src/utils/analytics.js */

/**
 * Custom analytics logger for user conversions (WhatsApp clicks, Call clicks, form submissions)
 * @param {string} eventName - Name of the action
 * @param {Object} [details] - Optional event metadata properties
 */
export function trackEvent(eventName, details = {}) {
  // Production-ready mock logging, easily swappable with GA4, Mixpanel, or custom backend analytics
  if (import.meta.env.DEV) {
    console.log(`[Analytics Tracked]: ${eventName}`, details);
  } else {
    // Inject pixel / script calls here in production
  }
}

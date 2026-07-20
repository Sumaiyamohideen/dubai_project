/* src/services/waRedirect.js */

import { trackEvent } from '../utils/analytics';

/**
 * Service to direct users to WhatsApp with a pre-populated message
 * @param {string} message - Pre-populated message text
 * @param {string} [phoneNumber='971500000000'] - Target WhatsApp number (defaults to company hotline)
 */
export function redirectToWhatsApp(message, phoneNumber = '971500000000') {
  trackEvent('whatsapp_redirect_initiated', { message, targetNumber: phoneNumber });
  
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
  
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Service to initiate a standard telephone call link
 * @param {string} [phoneNumber='+971500000000'] - Target phone number
 */
export function initiatePhoneCall(phoneNumber = '+971500000000') {
  trackEvent('phone_call_initiated', { targetNumber: phoneNumber });
  window.location.href = `tel:${phoneNumber}`;
}

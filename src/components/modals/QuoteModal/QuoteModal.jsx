/* src/components/modals/QuoteModal/QuoteModal.jsx
 * Figma node 731:2254 — "Request a Free Quote" popup dialog.
 */
import { memo, useState, useEffect } from 'react';
import { useQuoteModal } from '../../../context/QuoteModalContext';
import Icon from '../../ui/Icon';
import images from '../../../assets/images';
import { CONTACT_FORM_FIELDS } from '../../pages/Contact/constants';
import { redirectToWhatsApp } from '../../../services/waRedirect';
import styles from './QuoteModal.module.css';

const SERVICES_LIST = CONTACT_FORM_FIELDS.find((f) => f.id === 'service')?.options || [];
const EMIRATES_LIST = CONTACT_FORM_FIELDS.find((f) => f.id === 'location')?.options || [];

const QuoteModal = memo(function QuoteModal() {
  const { isOpen, selectedService, closeQuoteModal } = useQuoteModal();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync selectedService prop, lock body scroll, and set inert/aria-hidden on page background when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: selectedService || '',
        location: '',
        message: '',
      });
      setSubmitted(false);

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Set aria-hidden on root main layout container so background elements are excluded from focus
      const mainLayout = document.querySelector('[data-testid="main-layout"]');
      if (mainLayout) {
        mainLayout.setAttribute('aria-hidden', 'true');
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        if (mainLayout) {
          mainLayout.removeAttribute('aria-hidden');
        }
      };
    }
  }, [isOpen, selectedService]);

  // Handle ESC key press and focus trapping (Tab key wrap)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeQuoteModal();
        return;
      }

      if (e.key === 'Tab') {
        const modalCard = document.querySelector(`.${styles.modalCard}`);
        if (!modalCard) return;

        const focusables = modalCard.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Restrict phone input strictly to numbers, +, -, and spaces
      const sanitizedPhone = value.replace(/[^0-9+\-\s]/g, '');
      setFormData((prev) => ({ ...prev, phone: sanitizedPhone }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Build structured WhatsApp message
    const messageLines = [
      '📋 *NEW FREE QUOTE REQUEST*',
      '',
      `👤 *Name:* ${formData.fullName.trim()}`,
      `📞 *Phone:* ${formData.phone.trim()}`,
      `✉️ *Email:* ${formData.email.trim()}`,
      `🛠️ *Service:* ${formData.service || 'General Inquiry'}`,
      `📍 *Location:* ${formData.location || 'UAE'}`,
    ];

    // Only append Message section if user typed a message
    const trimmedUserMsg = formData.message.trim();
    if (trimmedUserMsg) {
      messageLines.push('', '💬 *Message:*', trimmedUserMsg);
    }

    const formattedMessage = messageLines.join('\n');

    // 2. Redirect to WhatsApp with company hotline
    redirectToWhatsApp(formattedMessage, '971554579790');

    // 3. Show visual confirmation alert inside modal
    setSubmitted(true);

    // 4. Reset form & close modal after 1.5 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        message: '',
      });
      setSubmitted(false);
      closeQuoteModal();
    }, 1500);
  };

  return (
    <div
      className={styles.backdrop}
      onClick={closeQuoteModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
    >
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={closeQuoteModal}
          aria-label="Close quote modal"
        >
          <Icon name="x" size={22} decorative={true} />
        </button>

        {/* Left Form Area */}
        <div className={styles.formArea}>
          <div className={styles.header}>
            <h2 id="modal-quote-title" className={styles.title}>
              Request a Free Quote
            </h2>
            <p className={styles.subtitle}>
              Tell us what you need — we respond within minutes during business hours.
            </p>
          </div>

          {submitted ? (
            <div className={styles.successAlert}>
              <Icon name="check-circle" size={22} color="#035a2d" decorative />
              <span>Opening WhatsApp... Redirecting your quote details to our customer service team.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="modal-fullName" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="modal-fullName"
                    name="fullName"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="modal-phone" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    placeholder="+971 5XXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="modal-service" className={styles.label}>
                    Service Required
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="modal-location" className={styles.label}>
                    Location
                  </label>
                  <select
                    id="modal-location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Select emirate
                    </option>
                    {EMIRATES_LIST.map((em) => (
                      <option key={em} value={em}>
                        {em}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about the work..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>SEND MESSAGE</span>
                <span className={styles.submitIconChip} aria-hidden="true">
                  <Icon name="arrow-up-right" size={16} color="#035a2d" decorative />
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Right Image Area */}
        <div className={styles.imageArea}>
          <img
            src={images.popupImage}
            alt="Chalachal Technical Service LLC technician"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
});

export default QuoteModal;

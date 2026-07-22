/* src/components/pages/Contact/ContactForm/ContactForm.jsx */

import { memo, useState, useCallback, useId } from 'react';
import Icon from '@/components/ui/Icon';
import { CONTACT_FORM_FIELDS, CONTACT_FORM_SUBMIT_LABEL } from '../constants';
import styles from './ContactForm.module.css';

/**
 * ContactForm — the enquiry form inside the left white card.
 * Matches Figma Nodes 731:5082 (card), 731:5088 (heading), 731:5089–731:5113 (fields + submit).
 *
 * - 6 fields: Full Name, Phone, Email, Service, Location, Message
 * - Fields are arranged in rows: half/half, full, half/half, full
 * - Submit button: green, Poppins SemiBold, with arrow chip icon
 *
 * @component ContactForm
 */
const ContactForm = memo(() => {
  const baseId = useId();

  const initialValues = Object.fromEntries(
    CONTACT_FORM_FIELDS.map((f) => [f.id, ''])
  );

  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      /* TODO: connect to backend / email service */
      setSubmitted(true);
    },
    []
  );

  if (submitted) {
    return (
      <div className={styles.formCard} role="region" aria-live="polite">
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <Icon name="check-circle" size="lg" color="#035a2d" decorative />
          </div>
          <p className={styles.successTitle}>Message sent!</p>
          <p className={styles.successBody}>
            We&rsquo;ll get back to you within minutes during business hours.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setValues(initialValues);
              setSubmitted(false);
            }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      {/* Heading — Figma Node 731:5088 */}
      <h2 className={styles.formHeading} id={`${baseId}-form-heading`}>
        Send us a message
      </h2>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        aria-labelledby={`${baseId}-form-heading`}
        noValidate
      >
        {/* Build the two rows of field pairs then individual full-width fields */}
        <div className={styles.fieldsGrid}>
          {CONTACT_FORM_FIELDS.map((field) => {
            const fieldId = `${baseId}-${field.id}`;

            return (
              <div
                key={field.id}
                className={`${styles.fieldWrapper} ${field.width === 'half' ? styles.half : styles.full}`}
              >
                <label htmlFor={fieldId} className={styles.label}>
                  {field.label}
                  {field.required && (
                    <span className={styles.required} aria-hidden="true">
                      {' '}*
                    </span>
                  )}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    id={fieldId}
                    name={field.id}
                    className={styles.textarea}
                    placeholder={field.placeholder}
                    value={values[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    rows={4}
                    aria-required={field.required}
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={fieldId}
                    name={field.id}
                    className={styles.select}
                    value={values[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    aria-required={field.required}
                  >
                    <option value="" disabled>
                      {field.placeholder}
                    </option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={fieldId}
                    name={field.id}
                    type={field.type}
                    className={styles.input}
                    placeholder={field.placeholder}
                    value={values[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    aria-required={field.required}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Submit button — Figma Node 731:5112–5113 */}
        <button type="submit" className={styles.submitBtn}>
          <span className={styles.submitLabel}>{CONTACT_FORM_SUBMIT_LABEL}</span>
          <span className={styles.submitChip} aria-hidden="true">
            <Icon name="arrow-up-right" size="sm" color="#035a2d" decorative />
          </span>
        </button>
      </form>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;

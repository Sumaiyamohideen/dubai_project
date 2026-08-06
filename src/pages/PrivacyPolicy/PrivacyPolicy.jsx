import React from "react";
import "./PrivacyPolicy.css";
import SEO from '@/components/common/SEO/SEO';

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">
      <SEO
  title="Privacy Policy"
  description="Read the Privacy Policy of Chalachal Technical Services LLC and learn how we collect, use and protect information submitted through our website."
  canonical=""
  image=""
/>

      <section className="privacy-hero">
        <div className="privacy-container">
          <span className="privacy-label">LEGAL</span>

          <h1>Privacy Policy</h1>

          <p>Last updated: August 2026</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-container">

          <p>
            Chalachal Technical Services LLC respects your privacy and is
            committed to protecting the personal information you provide when
            using our website or contacting us regarding our technical and
            maintenance services.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            We may collect personal information when you contact us, request
            a quotation, communicate through WhatsApp, phone, email, or submit
            information through our website.
          </p>

          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Location or service address</li>
            <li>Details about the service you require</li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <p>We may use your information to:</p>

          <ul>
            <li>Respond to enquiries and quotation requests</li>
            <li>Provide technical and maintenance services</li>
            <li>Schedule service appointments</li>
            <li>Communicate regarding ongoing services</li>
            <li>Improve our website and customer experience</li>
          </ul>

          <h2>3. Sharing of Information</h2>

          <p>
            Chalachal Technical Services LLC does not sell or rent your
            personal information. Information may only be shared when
            necessary to provide requested services or comply with legal
            requirements.
          </p>

          <h2>4. Cookies and Website Data</h2>

          <p>
            Our website may use cookies or similar technologies to understand
            website usage and improve the browsing experience. You may disable
            cookies through your browser settings.
          </p>

          <h2>5. Third-Party Services</h2>

          <p>
            Our website may contain links to services such as WhatsApp,
            Google Maps, or other third-party platforms. These services
            operate according to their own privacy policies.
          </p>

          <h2>6. Data Security</h2>

          <p>
            We take reasonable measures to protect personal information from
            unauthorized access, misuse, loss, or disclosure.
          </p>

          <h2>7. Your Rights</h2>

          <p>
            You may contact us to request access to, correction of, or
            deletion of personal information we hold about you, subject to
            applicable legal requirements.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy periodically. Changes will be
            published on this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>

          <div className="privacy-contact">
            <h3>Chalachal Technical Services LLC</h3>

            <p>United Arab Emirates</p>

            <p>
              Email:{" "}
              <a href="mailto:chalachaltechnical@gmail.com">
                chalachaltechnical@gmail.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a href="tel:+971554579790">
                +971 55 457 9790
              </a>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;
import React from "react";
import "./TermsOfUse.css";
import SEO from '@/components/common/SEO/SEO';

const TermsOfUse = () => {
  return (
    <main className="terms-page">
      <SEO
  title="Terms of Use"
  description="Read the terms and conditions governing the use of the Chalachal Technical Services LLC website and our technical and maintenance services."
  canonical=""
  image=""
/>

      <section className="terms-hero">
        <div className="terms-container">
          <span className="terms-label">LEGAL</span>
          <h1>Terms of Use</h1>
          <p>Last updated: August 2026</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="terms-container">

          <p>
            Welcome to the website of Chalachal Technical Services LLC.
            By accessing or using this website, you agree to these Terms
            of Use. If you do not agree with these terms, please do not
            use this website.
          </p>

          <h2>1. About Our Services</h2>

          <p>
            Chalachal Technical Services LLC provides technical,
            maintenance, repair, installation, and related services
            across the United Arab Emirates.
          </p>

          <p>
            Information displayed on this website is provided for general
            informational purposes. The exact scope, price, availability,
            and timeframe of a service may depend on the customer's
            requirements and location.
          </p>

          <h2>2. Service Requests and Quotations</h2>

          <p>
            Customers may request quotations through our website, phone,
            WhatsApp, email, or other available communication channels.
          </p>

          <p>
            A quotation or enquiry submitted through the website does not
            automatically create a binding service agreement. Final pricing,
            scope of work, materials, and schedules may need to be confirmed
            separately.
          </p>

          <h2>3. Pricing and Payments</h2>

          <p>
            Prices may vary depending on the type of service, materials,
            labour requirements, location, complexity, and other relevant
            factors.
          </p>

          <p>
            Any applicable payment terms will be communicated to the customer
            before or during confirmation of the service.
          </p>

          <h2>4. Customer Responsibilities</h2>

          <p>Customers are responsible for providing accurate information about:</p>

          <ul>
            <li>The required service</li>
            <li>Property or service location</li>
            <li>Access requirements</li>
            <li>Existing technical problems or conditions</li>
            <li>Any relevant safety concerns</li>
          </ul>

          <h2>5. Website Content</h2>

          <p>
            We make reasonable efforts to keep the information on this
            website accurate and updated. However, we do not guarantee that
            every description, price, image, availability statement, or
            other piece of information will always be complete or current.
          </p>

          <h2>6. Intellectual Property</h2>

          <p>
            Unless otherwise stated, website content including text,
            branding, graphics, design elements, images, and other materials
            belongs to Chalachal Technical Services LLC or is used with
            appropriate permission.
          </p>

          <p>
            Website content may not be copied, reproduced, distributed,
            or commercially used without prior permission.
          </p>

          <h2>7. Third-Party Links</h2>

          <p>
            Our website may contain links to third-party websites and
            services such as WhatsApp, Google Maps, or social media
            platforms.
          </p>

          <p>
            We are not responsible for the content, availability, security,
            or privacy practices of third-party services.
          </p>

          <h2>8. Limitation of Liability</h2>

          <p>
            To the extent permitted by applicable law, Chalachal Technical
            Services LLC will not be responsible for indirect or
            consequential losses resulting solely from the use or inability
            to use this website.
          </p>

          <h2>9. Privacy</h2>

          <p>
            Personal information submitted through this website is handled
            according to our Privacy Policy.
          </p>

          <h2>10. Changes to These Terms</h2>

          <p>
            We may update these Terms of Use periodically. Updated terms
            will be published on this page with the latest revision date.
          </p>

          <h2>11. Governing Law</h2>

          <p>
            These Terms of Use are governed by the applicable laws and
            regulations of the United Arab Emirates.
          </p>

          <h2>12. Contact Us</h2>

          <div className="terms-contact">
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

export default TermsOfUse;
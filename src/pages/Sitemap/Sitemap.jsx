import React from "react";
import { Link } from "react-router-dom";
import "./Sitemap.css";
import SEO from '@/components/common/SEO/SEO';

const Sitemap = () => {
  return (
    <main className="sitemap-page">
      <SEO
  title="Sitemap"
  description="Browse the Chalachal Technical Services LLC website sitemap to find our technical services, projects, company information and contact pages."
  canonical=""
  image=""
/>

      <section className="sitemap-hero">
        <div className="sitemap-container">
          <span className="sitemap-label">NAVIGATION</span>
          <h1>Sitemap</h1>
          <p>Explore Chalachal Technical Services</p>
        </div>
      </section>

      <section className="sitemap-content">
        <div className="sitemap-container">

          <div className="sitemap-grid">

            <div className="sitemap-group">
              <h2>Main Pages</h2>

              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="sitemap-group">
              <h2>Services</h2>

              <Link to="/services">Electrical Works</Link>
              <Link to="/services">Plumbing Services</Link>
              <Link to="/services">Painting Services</Link>
              <Link to="/services">Wall Sticker Installation</Link>
              <Link to="/services">Aluminum & Glass Works</Link>
              <Link to="/services">Welding Services</Link>
              <Link to="/services">Carpentry Services</Link>
              <Link to="/services">Floor Tiling</Link>
            </div>

            <div className="sitemap-group">
              <h2>Legal</h2>

              <Link to="/privacy-policy">
                Privacy Policy
              </Link>

              <Link to="/terms-of-use">
                Terms of Use
              </Link>
            </div>

            <div className="sitemap-group">
              <h2>Service Areas</h2>

              <span>Dubai</span>
              <span>Sharjah</span>
              <span>Abu Dhabi</span>
              <span>Ajman</span>
              <span>Ras Al Khaimah</span>
              <span>Umm Al Quwain</span>
              <span>Fujairah</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Sitemap;
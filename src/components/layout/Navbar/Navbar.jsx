/* src/components/layout/Navbar/Navbar.jsx
 *
 * Reusable sticky Navbar layout component.
 *
 * Figma source nodes:
 *   Desktop bar  → 731:1828  (Rectangle 19, 1920×151px)
 *   Logo area    → 731:1829  (123×100px at x=94, y=25)
 *   Links pill   → 731:1830  (788×63px, centred, 5 nav links)
 *   Phone icon   → 731:1839  (vector, x=1378)
 *   Phone text   → 731:1838  "+971 55 457 9790"
 *   CTA button   → 731:1836  (181×59px, x=1629)
 *   Mobile comp  → Component 27 — Frame 17 (collapsed) / Frame 18 (expanded)
 *
 * Logo asset:
 *   Expected at /assets/images/logo/company-logo.svg
 *   Asset NOT yet available — awaiting designer export.
 *   Component renders the <img> referencing that path; a broken-image
 *   state is handled via onError, displaying the company name as text
 *   fallback so the navbar is never blank.
 */

import { memo, useState, useEffect, useCallback, useRef } from 'react';
import { NavLink, Link, useNavigate }                     from 'react-router-dom';
import PropTypes                                          from 'prop-types';

import { NAV_LINKS, PHONE_NUMBER, PHONE_HREF, CTA_LABEL } from '../../../constants/navData';
import {
  SCROLL_THRESHOLD,
  MOBILE_MENU_ID,
  HAMBURGER_ID,
  LOGO_SRC,
  LOGO_ALT,
}                                                         from './constants';

import Container                                          from '../../ui/Container';
import Button                                             from '../../ui/Button';
import Icon                                               from '../../ui/Icon';

import styles from './Navbar.module.css';

/* ─── Sub-component: Logo ─────────────────────────────────────────── */
/**
 * Logo element. References the expected asset path.
 * Falls back to brand text if the image is not yet available.
 */
const Logo = memo(function Logo() {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className={styles.logoLink} aria-label="Chalachal Technical Services — go to home">
      {imgError ? (
        /* Text fallback — only shown until real asset is dropped in */
        <span className={styles.logoFallback} aria-hidden="false">
          Chalachal
        </span>
      ) : (
        <img
          src={LOGO_SRC}
          alt={LOGO_ALT}
          className={styles.logoImage}
          onError={() => setImgError(true)}
          width={123}
          height={100}
          loading="eager"
        />
      )}
    </Link>
  );
});

/* ─── Sub-component: DesktopNav ───────────────────────────────────── */
/**
 * Horizontal pill nav links — desktop only.
 * Figma: Rectangle 17 pill background, 5 link labels, Poppins SemiBold uppercase.
 */
const DesktopNav = memo(function DesktopNav() {
  return (
    <nav className={styles.desktopNav} aria-label="Primary navigation">
      <ul className={styles.navList} role="list">
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path} className={styles.navItem}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});

/* ─── Sub-component: PhoneLink ────────────────────────────────────── */
/** Phone number with icon — desktop only. Figma node 731:1838 / 731:1839. */
const PhoneLink = memo(function PhoneLink() {
  return (
    <a href={PHONE_HREF} className={styles.phoneLink} aria-label={`Call us: ${PHONE_NUMBER}`}>
      <Icon
        name="phone"
        className={styles.phoneIcon}
        size={17}
        aria-hidden="true"
        decorative={true}
      />
      <span>{PHONE_NUMBER}</span>
    </a>
  );
});

/* ─── Sub-component: CtaButton ────────────────────────────────────── */
/**
 * Primary CTA pill button — "FREE QUOTE".
 * Figma: Rectangle 17, x=1629 y=49, 181×59px, brand-green bg, white text.
 */
const CtaButton = memo(function CtaButton({ className }) {
  const navigate = useNavigate();

  const handleCtaClick = useCallback((e) => {
    e.preventDefault();
    navigate('/contact');
  }, [navigate]);

  return (
    <Button
      variant="primary"
      size="md"
      href="/contact"
      onClick={handleCtaClick}
      className={`${styles.ctaButton} ${className || ''}`.trim()}
      aria-label="Get a free quote"
    >
      {CTA_LABEL}
    </Button>
  );
});

CtaButton.propTypes = {
  className: PropTypes.string,
};

/* ─── Sub-component: HamburgerButton ─────────────────────────────── */
/** Hamburger toggle button for mobile nav. */
const HamburgerButton = memo(function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      id={HAMBURGER_ID}
      className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={MOBILE_MENU_ID}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      type="button"
    >
      <span className={styles.hamburgerBar} />
      <span className={styles.hamburgerBar} />
      <span className={styles.hamburgerBar} />
    </button>
  );
});

HamburgerButton.propTypes = {
  isOpen:   PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

/* ─── Sub-component: MobileMenu ──────────────────────────────────── */
/**
 * Full-screen overlay mobile menu.
 * Figma Component 27 Frame 18 (expanded state).
 * Closes on nav link click or Escape key.
 */
const MobileMenu = memo(function MobileMenu({ isOpen, onClose }) {
  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      id={MOBILE_MENU_ID}
      className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <nav aria-label="Mobile primary navigation">
        <ul className={styles.mobileNavList} role="list">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path} className={styles.mobileNavItem}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                }
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.mobileMenuFooter}>
          <a
            href={PHONE_HREF}
            className={styles.mobilePhoneLink}
            aria-label={`Call us: ${PHONE_NUMBER}`}
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
          >
            {PHONE_NUMBER}
          </a>
          <CtaButton className={styles.mobileCtaButton} />
        </div>
      </nav>
    </div>
  );
});

MobileMenu.propTypes = {
  isOpen:  PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

/* ─── Main Component: Navbar ──────────────────────────────────────── */
/**
 * Sticky site-wide navigation bar.
 *
 * @param {Object}  props
 * @param {string}  [props.className] - Additional class for external overrides.
 *
 * @example
 * <Navbar />
 */
function Navbar({ className }) {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [isMobileOpen,  setIsMobileOpen]  = useState(false);
  const navRef                             = useRef(null);

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const navClass = [
    styles.navbar,
    isScrolled   ? styles.navbarScrolled : '',
    isMobileOpen ? styles.navbarMenuOpen : '',
    className    || '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={navClass} ref={navRef} data-testid="navbar">
        <Container className={styles.inner}>
          {/* Logo */}
          <Logo />

          {/* Desktop links pill */}
          <DesktopNav />

          {/* Right-side cluster: phone + CTA */}
          <div className={styles.desktopActions}>
            <PhoneLink />
            <CtaButton />
          </div>

          {/* Mobile hamburger */}
          <HamburgerButton isOpen={isMobileOpen} onToggle={handleToggle} />
        </Container>
      </header>

      {/* Mobile overlay menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={handleClose} />

      {/* Backdrop — closes menu on outside click */}
      {isMobileOpen && (
        <div
          className={styles.backdrop}
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

export default memo(Navbar);

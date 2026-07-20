/* src/sandbox-main.jsx */
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/layout/Navbar';
import Container, { CONTAINER_WIDTHS } from './components/ui/Container';
import Typography from './components/ui/Typography';
import Button, { BUTTON_VARIANTS, BUTTON_SIZES } from './components/ui/Button';
import Icon, { ICON_SIZES } from './components/ui/Icon';
import Card, { CARD_PADDINGS, CARD_SHADOWS, CARD_RADIUS, CARD_BORDERS } from './components/ui/Card';
import StatCard, { STAT_CARD_ORIENTATIONS, STAT_CARD_ALIGNMENTS, STAT_CARD_HIGHLIGHTS } from './components/features/StatCard';
import Hero from './components/sections/Hero';


// A simple arrow icon for button layout testing
export const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const Sandbox = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '40px 0', paddingTop: '11rem' }}>
        <Container maxWidth={CONTAINER_WIDTHS.STANDARD}>
        <div style={{ background: 'var(--color-white)', padding: '40px', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)' }}>
          
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '20px', marginBottom: '40px' }}>
            <Typography variant="h2" style={{ color: 'var(--color-brand-primary)' }}>
              Chalachal Design System Sandbox
            </Typography>
            <Typography variant="body" style={{ color: 'var(--color-text-medium)', marginTop: '8px' }}>
              Interact with real-time state changes, loading animations, hover effects, and responsive breakpoints.
            </Typography>
          </div>

          {/* Typography Grid */}
          <section style={{ marginBottom: '50px' }}>
            <Typography variant="h3" style={{ marginBottom: '20px', color: 'var(--color-brand-primary)' }}>
              1. Typography Variants
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Typography variant="hero">Hero Title Text</Typography>
              <Typography variant="h2">H2 Section Heading</Typography>
              <Typography variant="h3">H3 Component Subheading</Typography>
              <Typography variant="bodyLarge">Body Large (Poppins Medium)</Typography>
              <Typography variant="body">Body Standard (Poppins Regular)</Typography>
              <Typography variant="caption">Caption (Poppins Small)</Typography>
            </div>
          </section>

          {/* Button Interactive Showcase */}
          <section style={{ marginBottom: '20px' }}>
            <Typography variant="h3" style={{ marginBottom: '30px', color: 'var(--color-brand-primary)' }}>
              2. Reusable Button Component Showcase
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Sizing options */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '10px' }}>Sizes (Primary variant):</Typography>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.SM}>Small Button</Button>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.MD}>Medium Button</Button>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.LG}>Large Button</Button>
                </div>
              </div>

              {/* Style Variants */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '10px' }}>Variants (Large size):</Typography>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.LG}>Primary CTA</Button>
                  <Button variant={BUTTON_VARIANTS.SECONDARY} size={BUTTON_SIZES.LG}>Secondary CTA</Button>
                  <Button variant={BUTTON_VARIANTS.OUTLINE} size={BUTTON_SIZES.LG}>Outline Button</Button>
                  <Button variant={BUTTON_VARIANTS.TEXT} size={BUTTON_SIZES.LG}>Text Link</Button>
                </div>
              </div>

              {/* Icon integrations */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '10px' }}>Icon Layouts & Positions:</Typography>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} icon={<ArrowRight />} iconPosition="left">Icon Left</Button>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} icon={<ArrowRight />} iconPosition="right">Icon Right</Button>
                  <Button variant={BUTTON_VARIANTS.ICON} icon={<ArrowRight />} size={BUTTON_SIZES.MD} aria-label="Icon only nav" />
                </div>
              </div>

              {/* Action states */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '10px' }}>State modifiers:</Typography>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} disabled>Disabled Style</Button>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} loading>Loading Indicator</Button>
                  <Button variant={BUTTON_VARIANTS.PRIMARY} href="https://wa.me/971500000000" target="_blank">Rendered Link (Anchor Tag)</Button>
                </div>
              </div>

              {/* Contact Floating style */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '10px' }}>Floating FABs (WhatsApp/Phone style):</Typography>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Button variant={BUTTON_VARIANTS.FLOATING} icon={<ArrowRight />} size={BUTTON_SIZES.LG} aria-label="WhatsApp Floating Trigger" />
                </div>
              </div>

            </div>
          </section>

          {/* Icon Component Showcase */}
          <section style={{ marginBottom: '50px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
            <Typography variant="h3" style={{ marginBottom: '20px', color: 'var(--color-brand-primary)' }}>
              3. Unified Icon Component Showcase
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Custom Brand Icons */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '15px' }}>Custom Brand Icons (Local SVG Assets):</Typography>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="shield-check" size={ICON_SIZES.LG} color="var(--color-brand-primary)" />
                    <Typography variant="caption">shield-check</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="award-medal" size={ICON_SIZES.LG} color="var(--color-brand-primary)" />
                    <Typography variant="caption">award-medal</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="user-support" size={ICON_SIZES.LG} color="var(--color-brand-primary)" />
                    <Typography variant="caption">user-support</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="office-building" size={ICON_SIZES.LG} color="var(--color-brand-primary)" />
                    <Typography variant="caption">office-building</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="whatsapp" size={ICON_SIZES.LG} color="#25D366" />
                    <Typography variant="caption">whatsapp</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="technician" size={ICON_SIZES.LG} color="var(--color-brand-primary)" />
                    <Typography variant="caption">technician</Typography>
                  </div>
                </div>
              </div>

              {/* Lucide Standard UI Icons */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '15px' }}>Lucide Standard Icons (Auto-resolved):</Typography>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="phone" size={ICON_SIZES.LG} />
                    <Typography variant="caption">Phone</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="chevron-down" size={ICON_SIZES.LG} />
                    <Typography variant="caption">chevron-down</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="arrow-right" size={ICON_SIZES.LG} />
                    <Typography variant="caption">arrow-right</Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon name="Calendar" size={ICON_SIZES.LG} />
                    <Typography variant="caption">Calendar</Typography>
                  </div>
                </div>
              </div>

              {/* Sizes and custom dimensions */}
              <div>
                <Typography variant="label" style={{ display: 'block', marginBottom: '15px' }}>Icon Sizes (sm, md, lg, xl, custom):</Typography>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <Icon name="shield-check" size={ICON_SIZES.SM} color="var(--color-brand-primary)" />
                  <Icon name="shield-check" size={ICON_SIZES.MD} color="var(--color-brand-primary)" />
                  <Icon name="shield-check" size={ICON_SIZES.LG} color="var(--color-brand-primary)" />
                  <Icon name="shield-check" size={ICON_SIZES.XL} color="var(--color-brand-primary)" />
                  <Icon name="shield-check" size={64} color="var(--color-brand-accent)" />
                </div>
              </div>
            </div>
          </section>

          {/* Card Component Showcase */}
          <section style={{ marginBottom: '20px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
            <Typography variant="h3" style={{ marginBottom: '30px', color: 'var(--color-brand-primary)' }}>
              4. Reusable Generic Card Showcase
            </Typography>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              
              {/* Static standard border card */}
              <Card radius={CARD_RADIUS.LG} border={CARD_BORDERS.STANDARD} padding={CARD_PADDINGS.MD}>
                <Typography variant="h3" style={{ color: 'var(--color-brand-primary)', marginBottom: '10px' }}>
                  Standard Border Card
                </Typography>
                <Typography variant="body" style={{ color: 'var(--color-text-medium)' }}>
                  This card uses <code>border="standard"</code>, <code>radius="lg"</code> (32px), and <code>padding="md"</code>. It is a clean static layout wrapper.
                </Typography>
              </Card>

              {/* Clickable elevated card */}
              <Card
                radius={CARD_RADIUS.LG}
                shadow={CARD_SHADOWS.MD}
                hoverable={true}
                onClick={() => alert('Card Clicked!')}
                padding={CARD_PADDINGS.MD}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Icon name="award-medal" size={ICON_SIZES.LG} color="var(--color-brand-accent)" />
                  <Typography variant="h3" style={{ color: 'var(--color-brand-primary)', margin: 0 }}>
                    Clickable Card
                  </Typography>
                </div>
                <Typography variant="body" style={{ color: 'var(--color-text-medium)' }}>
                  Hover over this card to see translation lift and elevation. Click to trigger interaction. Supports keyboard Enter/Space focus.
                </Typography>
              </Card>

              {/* Brand highlights card */}
              <Card
                radius={CARD_RADIUS.MD}
                border={CARD_BORDERS.PRIMARY}
                padding={CARD_PADDINGS.LG}
                style={{ backgroundColor: 'var(--color-bg-gray)' }}
              >
                <Typography variant="h3" style={{ color: 'var(--color-brand-secondary)', marginBottom: '10px' }}>
                  Brand Primary Accent Card
                </Typography>
                <Typography variant="body" style={{ color: 'var(--color-text-high)' }}>
                  Features a colored background (gray-green token) with a primary green border and <code>radius="md"</code>. Perfect for callout badges.
                </Typography>
              </Card>

            </div>
          </section>

          {/* StatCard Component Showcase */}
          <section style={{ marginBottom: '20px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
            <Typography variant="h3" style={{ marginBottom: '30px', color: 'var(--color-brand-primary)' }}>
              5. Reusable StatCard Showcase
            </Typography>

            <Typography variant="h4" style={{ marginBottom: '15px', color: 'var(--color-brand-secondary)' }}>
              A. Default Stats Bar (Vertical, Center Align, Highlight Primary)
            </Typography>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              padding: '20px',
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: 'var(--radius-card)',
              marginBottom: '45px',
              border: '1px solid var(--color-border)'
            }}>
              <StatCard value="10+" label="Years Experience" />
              <StatCard value="500+" label="Experienced Technicians" highlight={STAT_CARD_HIGHLIGHTS.DARK} />
              <StatCard value="2,000+" label="Projects Done" />
              <StatCard value="24/7" label="Technical Support" highlight={STAT_CARD_HIGHLIGHTS.TEXT} />
            </div>

            <Typography variant="h4" style={{ marginBottom: '15px', color: 'var(--color-brand-secondary)' }}>
              B. Horizontal Card Layouts with Custom Brand Icons
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '45px' }}>
              <StatCard
                value="2,000+"
                label="Satisfied Clients"
                icon="user-star"
                orientation={STAT_CARD_ORIENTATIONS.HORIZONTAL}
                variant="card"
                hoverable
              />
              <StatCard
                value="24/7"
                label="Emergency Support"
                icon="user-support"
                orientation={STAT_CARD_ORIENTATIONS.HORIZONTAL}
                highlight={STAT_CARD_HIGHLIGHTS.DARK}
                variant="card"
                hoverable
              />
              <StatCard
                value="100%"
                label="UAE Wide Coverage"
                icon="office-building"
                orientation={STAT_CARD_ORIENTATIONS.HORIZONTAL}
                variant="card"
                hoverable
              />
            </div>

            <Typography variant="h4" style={{ marginBottom: '15px', color: 'var(--color-brand-secondary)' }}>
              C. Custom Alignments & Plain Layouts
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              <div style={{ padding: '20px', border: '1px dashed var(--color-border)' }}>
                <Typography variant="bodySmall" style={{ color: 'var(--color-text-low)', marginBottom: '10px' }}>Left-Aligned Vertical</Typography>
                <StatCard
                  value="120+"
                  label="Completed Projects"
                  align={STAT_CARD_ALIGNMENTS.LEFT}
                  orientation={STAT_CARD_ORIENTATIONS.VERTICAL}
                  icon="shield-check"
                />
              </div>

              <div style={{ padding: '20px', border: '1px dashed var(--color-border)' }}>
                <Typography variant="bodySmall" style={{ color: 'var(--color-text-low)', marginBottom: '10px' }}>Right-Aligned Vertical</Typography>
                <StatCard
                  value="15"
                  label="Years of Service"
                  align={STAT_CARD_ALIGNMENTS.RIGHT}
                  orientation={STAT_CARD_ORIENTATIONS.VERTICAL}
                  icon="award-medal"
                />
              </div>

              <div style={{ padding: '20px', border: '1px dashed var(--color-border)' }}>
                <Typography variant="bodySmall" style={{ color: 'var(--color-text-low)', marginBottom: '10px' }}>Center-Aligned Horizontal Card</Typography>
                <StatCard
                  value="100+"
                  label="Experts Working"
                  align={STAT_CARD_ALIGNMENTS.CENTER}
                  orientation={STAT_CARD_ORIENTATIONS.HORIZONTAL}
                  variant="card"
                  hoverable
                />
              </div>
            </div>
          </section>

          {/* Hero Section Showcase */}
          <section style={{ marginBottom: '20px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
            <Typography variant="h3" style={{ marginBottom: '30px', color: 'var(--color-brand-primary)' }}>
              6. Hero Section Showcase
            </Typography>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', overflow: 'hidden', backgroundColor: 'var(--color-white)' }}>
              <Hero />
            </div>
          </section>

        </div>
      </Container>
    </div>
  </div>

);
};

createRoot(document.getElementById('sandbox-root')).render(
  <BrowserRouter>
    <Sandbox />
  </BrowserRouter>
);

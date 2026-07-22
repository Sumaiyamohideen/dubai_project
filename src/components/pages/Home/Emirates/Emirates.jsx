/* src/components/sections/Emirates/Emirates.jsx */

import { memo } from 'react';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import EmirateCard from './EmirateCard';
import { EMIRATES_HEADER, EMIRATES_LIST } from './constants';
import { images } from '@/assets/images';
import styles from './Emirates.module.css';

/**
 * Emirates section component rendering "Serving Every Corner of the 7 Emirates".
 * Features a split 2-column layout on Desktop top-aligned with premium framed UAE Map card on left.
 *
 * @component Emirates
 */
const Emirates = memo(() => {
  return (
    <section className={styles.emiratesSection} id="emirates" aria-label="Service Areas Across 7 Emirates">
      <Container>
        <div className={styles.splitLayout}>
          {/* Left Column: Premium Framed White Map Card Container */}
          <div className={styles.mapCard}>
            <img
              src={images.emirates.map}
              alt="Interactive map highlighting Chalachal Technical Services coverage across all 7 emirates of the UAE"
              className={styles.mapImage}
            />
          </div>

          {/* Right Column: Heading, Description & Emirate Cards Grid */}
          <div className={styles.contentColumn}>
            <div className={styles.headerArea}>
              <Typography variant="h2" className={styles.title}>
                {EMIRATES_HEADER.title}
              </Typography>
              <Typography variant="bodyLarge" className={styles.description}>
                {EMIRATES_HEADER.description}
              </Typography>
            </div>

            <ul className={styles.gridContainer}>
              {EMIRATES_LIST.map((emirate) => (
                <EmirateCard key={emirate.id} name={emirate.name} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
});

Emirates.displayName = 'Emirates';

export default Emirates;

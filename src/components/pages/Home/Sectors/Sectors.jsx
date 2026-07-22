/* src/components/sections/Sectors/Sectors.jsx */
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import SectorCard from './SectorCard';
import { SECTORS_HEADER, SECTORS_ITEMS } from './constants';
import styles from './Sectors.module.css';

/**
 * Sectors Section Component
 * Renders "From villas to flagship stores" section with a 6-sector grid banner.
 */
const Sectors = () => {
  return (
    <section className={styles.sectorsSection} aria-label="Sectors Served">
      <Container>
        <div className={styles.headerArea}>
          <Typography variant="h2" className={styles.title}>
            {SECTORS_HEADER.title}
          </Typography>
          <Typography variant="body" className={styles.description}>
            {SECTORS_HEADER.description}
          </Typography>
        </div>

        <div className={styles.banner}>
          <ul className={styles.grid}>
            {SECTORS_ITEMS.map((item) => (
              <SectorCard
                key={item.id}
                label={item.label}
                iconName={item.iconName}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Sectors;

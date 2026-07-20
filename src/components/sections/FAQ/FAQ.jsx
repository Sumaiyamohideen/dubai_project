/* src/components/sections/FAQ/FAQ.jsx */

import { memo, useState, useCallback } from 'react';
import Container from '../../ui/Container';
import Typography from '../../ui/Typography';
import FAQItem from './FAQItem';
import { FAQ_HEADER, FAQ_LIST } from './constants';
import styles from './FAQ.module.css';

/**
 * FAQ section component rendering "Frequently Asked Questions".
 * Manages accordion toggle state with item 1 open by default matching Figma design.
 *
 * @component FAQ
 */
const FAQ = memo(() => {
  // Item 1 (faq-1) is expanded by default matching Figma design node 731:1783
  const [expandedId, setExpandedId] = useState('faq-1');

  const handleToggle = useCallback((id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <section className={styles.faqSection} id="faq" aria-label="Frequently Asked Questions">
      <Container>
        <div className={styles.headerArea}>
          <Typography variant="h2" className={styles.title}>
            {FAQ_HEADER.title}
          </Typography>
          <Typography variant="bodyLarge" className={styles.description}>
            {FAQ_HEADER.description}
          </Typography>
        </div>

        <ul className={styles.accordionList}>
          {FAQ_LIST.map((item) => (
            <FAQItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isExpanded={expandedId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;

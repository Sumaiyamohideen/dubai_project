/* src/components/sections/FAQ/FAQItem.jsx */

import { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/ui/Icon';
import styles from './FAQItem.module.css';

/**
 * Reusable FAQ Item component representing a single accessible accordion row.
 * Handles click interactions, keyboard navigation, and aria-expanded state.
 *
 * @component FAQItem
 * @param {Object} props
 * @param {string} props.id - Unique ID of the FAQ item
 * @param {string} props.question - FAQ question text
 * @param {string} props.answer - FAQ answer text
 * @param {boolean} props.isExpanded - Whether this accordion item is open
 * @param {function} props.onToggle - Handler function invoked when toggled
 */
const FAQItem = memo(({ id, question, answer, isExpanded, onToggle }) => {
  const answerId = `faq-answer-${id}`;
  const questionId = `faq-question-${id}`;

  return (
    <li className={styles.item}>
      <button
        type="button"
        id={questionId}
        aria-expanded={isExpanded}
        aria-controls={answerId}
        className={styles.questionButton}
        onClick={onToggle}
      >
        <span className={styles.questionText}>{question}</span>
        <Icon
          name="plus"
          className={isExpanded ? styles.iconExpanded : styles.icon}
          aria-hidden="true"
        />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={isExpanded ? styles.answerWrapperOpen : styles.answerWrapperClosed}
      >
        <div className={styles.answerInner}>
          <p className={styles.answerText}>{answer}</p>
        </div>
      </div>
    </li>
  );
});

FAQItem.displayName = 'FAQItem';

FAQItem.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FAQItem;

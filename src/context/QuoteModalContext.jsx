/* src/context/QuoteModalContext.jsx */
import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const QuoteModalContext = createContext({
  isOpen: false,
  selectedService: '',
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openQuoteModal = useCallback((serviceName = '') => {
    setSelectedService(serviceName || '');
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
    setSelectedService('');
  }, []);

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        selectedService,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

QuoteModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}

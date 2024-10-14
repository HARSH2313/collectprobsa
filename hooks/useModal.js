// hooks/useModal.js
import { useState, useCallback } from 'react';

/**
 * Custom hook to manage modal visibility and content.
 * @returns {Array} - [isOpen, openModal, closeModal, setContent]
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = useCallback((modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return [isOpen, openModal, closeModal, content];
};

export default useModal;

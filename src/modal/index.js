import React, { useEffect } from 'react';
import './index.css';

export const Modal = ({ title, content, isVisible, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  });

  const keydownHandler = ({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  return !isVisible ? null : (
    <div className='modal' onClick={onClose}>
      <div className='modal-dialog' onClick={(e) => e.stopPropagation}>
        <div className='modal-header'>{title}</div>
        <div className='modal-body'>{content}</div>
      </div>
    </div>
  );
};

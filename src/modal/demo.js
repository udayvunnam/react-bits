import React, { useState } from 'react';
import { Modal } from './index';

export const ModalDemo = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className='modal-demo'>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Show Modal
      </button>
      <Modal
        title='Modal title'
        content='Modal content'
        isVisible={modal}
        onClose={() => {
          setModal(false);
        }}
      />
    </div>
  );
};

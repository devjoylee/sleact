import React, { FC } from 'react';
import { ModalOverlay } from './styles';
import { MdClose } from 'react-icons/md';

interface Props {
  handleClose: () => void;
}

const Modal: FC<Props> = ({ children, handleClose }) => {
  return (
    <ModalOverlay className='modal-overlay' onClick={handleClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <MdClose onClick={handleClose} />
        {children}
      </div>
    </ModalOverlay>
  );
};

export default Modal;

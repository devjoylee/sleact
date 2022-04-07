import React, { FC } from 'react';
import { DropdownOverlay, Dropdown } from './styles';
import { MdClose } from 'react-icons/md';

interface Props {
  handleClose: () => void;
  style: React.CSSProperties;
}

export const DropdownLayout: FC<Props> = ({ children, handleClose, style }) => {
  return (
    <>
      <DropdownOverlay className='dropdown-overlay' onClick={handleClose} />
      <Dropdown className='dropdown' onClick={(e) => e.stopPropagation()} style={style}>
        {children}
      </Dropdown>
    </>
  );
};

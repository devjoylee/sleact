import React from 'react';
import { DropdownLayout } from 'components';

interface DropdownProp {
  handleClose: () => void;
}

export const Dropdown = ({ handleClose }: DropdownProp) => {
  return (
    <DropdownLayout handleClose={handleClose} style={{ top: 55, left: 10 }}>
      <li>채널 만들기</li>
      <li>로그아웃</li>
    </DropdownLayout>
  );
};

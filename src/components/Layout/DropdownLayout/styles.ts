import styled from '@emotion/styled';
import { COLOR } from 'styles/variables';

export const DropdownOverlay = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1000;
`;

export const Dropdown = styled.ul`
  width: 300px;
  max-width: 300px;
  background: ${COLOR.MODAL_BG};
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid #ddd;
  border-radius: 6px;
  z-index: 1010;
  position: absolute;
  li {
    margin: 5px 0;
    padding: 5px 20px;
    font-size: 14px;
    cursor: pointer;
    & + li {
      border-top: 1px solid ${COLOR.BORDER_GRAY};
    }
    &:hover {
      background: ${COLOR.FOCUS};
      color: #fff;
    }
  }
`;

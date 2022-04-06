import styled from '@emotion/styled';
import { COLOR } from 'styles/variables';

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1000;

  .center {
  }

  .modal {
    width: 440px;
    max-width: 440px;
    background: ${COLOR.MODAL_BG};
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 30px 40px;
    z-index: 1010;
    position: relative;
  }
  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 20px;
    color: #333;
    cursor: pointer;
  }
`;

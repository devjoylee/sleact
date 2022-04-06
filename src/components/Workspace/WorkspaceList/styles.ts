import styled from '@emotion/styled';
import { COLOR } from 'styles/variables';

export const ListContainer = styled.div`
  width: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLOR.MAIN_LIGHT};
  border-top: 1px solid ${COLOR.BORDER_PURPLE};
  border-right: 1px solid ${COLOR.BORDER_PURPLE};
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;

  & > svg {
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
  }
`;

export const WspaceList = styled.ul`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    border: 4px solid ${COLOR.MAIN_LIGHT};
    background: ${COLOR.MODAL_BG};
    color: ${COLOR.TEXT};
    line-height: 1;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    & + li {
      margin-top: 15px;
    }
    &:hover {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
    }
    &:first-of-type {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 1);
    }
  }
`;

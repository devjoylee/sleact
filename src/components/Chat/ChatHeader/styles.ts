import styled from '@emotion/styled';
import { COLOR, STYLE } from 'styles/variables';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${STYLE.WSNAME_HEIGHT};
  min-height: ${STYLE.WSNAME_HEIGHT};
  padding: 0 23px;
  box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 10%);
  font-size: 20px;
  font-weight: bold;

  & > svg {
    font-size: 18px;
    color: #777;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 6px;
  &:hover {
    background-color: #eee;
  }
  img {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    border-radius: 3px;
  }
  svg {
    margin-left: 5px;
    font-size: 14px;
  }
`;

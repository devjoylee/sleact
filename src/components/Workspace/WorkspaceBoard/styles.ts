import styled from '@emotion/styled';
import { COLOR, STYLE } from 'styles/variables';

export const BoardContainer = styled.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: ${COLOR.MAIN_LIGHT};
  vertical-align: top;
  position: relative;
`;

export const WorkspaceName = styled.h2`
  height: ${STYLE.WSNAME_HEIGHT};
  line-height: ${STYLE.WSNAME_HEIGHT};
  padding-left: 16px;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
  border-top: 1px solid ${COLOR.BORDER_PURPLE};
  border-bottom: 1px solid ${COLOR.BORDER_PURPLE};
  cursor: pointer;
  &:hover {
    background: ${COLOR.MAIN_DARK};
  }
`;

export const ListBoard = styled.div`
  padding: 10px 0;
  height: calc(100vh - 102px);
  overflow-y: auto;
  color: ${COLOR.TEXT_GRAY};
  p {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    padding: 0 15px;
    cursor: pointer;
    svg {
      margin-right: 5px;
    }
  }
  ul {
    li {
      padding: 3px 0;
      padding-left: 35px;
      cursor: pointer;
      &:hover {
        background: ${COLOR.MAIN_DARK};
      }
      &.active {
        background: ${COLOR.FOCUS};
      }
    }
  }
`;

export const ChannelListContainer = styled.div``;
export const DMListContainer = styled.div`
  margin-top: 15px;
`;

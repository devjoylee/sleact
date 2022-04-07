import styled from '@emotion/styled';
import { COLOR } from 'styles/variables';

export const ListContainer = styled.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: ${COLOR.MAIN_LIGHT};
  vertical-align: top;
  position: relative;
`;

export const WorkspaceName = styled.h2`
  height: 64px;
  line-height: 64px;
  padding-left: 16px;
  font-weight: 900;
  font-size: 24px;
  color: #fff;
  border-top: 1px solid ${COLOR.BORDER_PURPLE};
  border-bottom: 1px solid ${COLOR.BORDER_PURPLE};
  cursor: pointer;
  &:hover {
    background: ${COLOR.MAIN_DARK};
  }
`;

export const ListBoard = styled.div`
  padding: 10px 15px;
  height: calc(100vh - 102px);
  overflow-y: auto;
  color: ${COLOR.TEXT_GRAY};
  p {
    margin-bottom: 7px;
  }
  ul {
    padding-left: 15px;
  }
`;

export const ChannelBoard = styled.div``;
export const DMBoard = styled.div`
  margin-top: 15px;
`;
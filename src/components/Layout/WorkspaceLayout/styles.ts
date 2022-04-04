import styled from '@emotion/styled';
import { COLOR, STYLE } from 'styles/variables';

export const WorkspaceContents = styled.main`
  display: flex;
  height: calc(100vh - ${STYLE.WSHEADER_HEIGHT});
`;

export const WorkspaceBar = styled.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: ${COLOR.MAIN_LIGHT};
  border-top: 1px solid ${COLOR.BORDER_PURPLE};
  border-right: 1px solid ${COLOR.BORDER_PURPLE};
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
`;

export const ChannelBar = styled.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: ${COLOR.MAIN_LIGHT};
  color: ${COLOR.TEXT_GRAY};
  vertical-align: top;
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
`;

export const List = styled.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`;

export const Chats = styled.div`
  flex: 1;
`;

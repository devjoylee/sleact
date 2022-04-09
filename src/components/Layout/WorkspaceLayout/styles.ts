import styled from '@emotion/styled';
import { STYLE } from 'styles/variables';

export const WorkspaceContents = styled.main`
  display: flex;
  height: calc(100vh - ${STYLE.WSHEADER_HEIGHT});
`;

export const Chats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

import styled from '@emotion/styled';

export const WorkspaceHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  background: #350d36;
  color: #ffffff;
  padding: 0 15px;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const WorkspaceContents = styled.main`
  display: flex;
`;

export const WorkspaceBar = styled.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
  border-right: 1px solid rgb(82, 38, 83);
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
`;

export const ChannelBar = styled.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;
`;

export const WorkspaceName = styled.h2`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 100%;
  text-align: left;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 900;
  font-size: 24px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  padding-left: 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`;

export const List = styled.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`;

export const Chats = styled.div`
  flex: 1;
`;

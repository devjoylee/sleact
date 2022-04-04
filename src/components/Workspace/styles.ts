import styled from '@emotion/styled';
import { COLOR, STYLE } from 'styles/variables';

export const WorkspaceHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${STYLE.WSHEADER_HEIGHT};
  background: ${COLOR.MAIN_DARK};
  padding: 0 15px;
  position: relative;
`;

export const UserProfile = styled.div`
  img {
    width: 28px;
    height: 28px;
    display: block;
    cursor: pointer;
  }
`;

export const UserSettingContainer = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  min-width: 360px;

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.TEXT};
  padding: 20px;
  border-bottom: 1px solid #eee;

  img {
    width: 42px;
    height: 42px;
    margin-right: 10px;
    cursor: pointer;
  }
  .user-name {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 3px;
  }
  .user-active {
    font-size: 13px;
  }
`;

export const LogOutButton = styled.button`
  width: 100%;
  display: block;
  padding: 7px 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

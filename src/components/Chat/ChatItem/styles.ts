import styled from '@emotion/styled';
import { COLOR } from 'styles/variables';

export const ChatItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    background: #eee;
  }
`;

export const ChatProfile = styled.div`
  width: 36px;
  margin-right: 8px;
`;

export const ChatContent = styled.div`
  .user-data {
    display: flex;
    align-items: center;
    .name {
      font-weight: bold;
      margin-right: 8px;
      letter-spacing: -0.5px;
    }
    .date {
      font-size: 12px;
      color: #555;
      vertical-align: middle;
    }
  }
`;

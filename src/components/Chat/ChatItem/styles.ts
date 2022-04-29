import styled from '@emotion/styled';

export const ChatItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;

  &:hover {
    background: #eee;
  }
`;

export const ChatProfile = styled.div`
  display: flex;
  width: 36px;
`;

export const ChatContent = styled.div`
  padding: 0 8px;
  .user-data {
    display: flex;
    align-items: center;
    .name {
      font-size: 15px;
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
  .text {
    font-size: 15px;
  }
`;

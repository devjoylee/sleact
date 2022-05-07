import styled from '@emotion/styled';

export const ChatListContainer = styled.div`
  flex: 1;
  & > div > div {
    display: flex;
    flex-direction: column;
  }
`;

export const DateSection = styled.ul`
  position: relative;
  margin-top: 20px;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #eee;
    position: absolute;
    top: 13px;
  }
  .date {
    display: inline-block;
    position: sticky;
    top: 15px;
    left: 50%;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    font-weight: bold;
    font-size: 13px;
    transform: translateX(-50%);
    box-shadow: 0 0 0 1px #e1e1e1, 0 1px 3px 0 #e1e1e1;
    border-radius: 24px;
    background: #fff;
    cursor: pointer;
    z-index: 2;
  }
`;

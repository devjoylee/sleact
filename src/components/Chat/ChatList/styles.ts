import styled from '@emotion/styled';

export const ChatListContainer = styled.ul`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #777;
  }
`;

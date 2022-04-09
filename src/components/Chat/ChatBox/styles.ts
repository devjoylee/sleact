import styled from '@emotion/styled';
import { COLOR } from 'styles/variables';

export const ChatBoxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`;

export const Form = styled.form`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${COLOR.TEXT_GRAY};
`;

export const ChatInput = styled.div`
  font-family: Slack-Lato, appleLogo, sans-serif;
  padding: 18px 20px;
  textarea {
    width: 100%;
    height: 44px;
    font-size: 15px;
    line-height: 22px;
    resize: none;
    &::placeholder {
      color: ${COLOR.TEXT_GRAY};
    }
  }
`;

export const Toolbox = styled.div`
  position: relative;
  background: ${COLOR.MODAL_BG};
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button`
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;
  svg {
    font-size: 18px;
    color: ${COLOR.TEXT_GRAY};
  }
`;

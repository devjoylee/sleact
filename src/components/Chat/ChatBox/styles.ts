import styled from '@emotion/styled';
import { COLOR, STYLE } from 'styles/variables';

export const ChatBoxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 5px;
`;

export const Form = styled.form`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${COLOR.TEXT_GRAY};
`;

export const ChatTextArea = styled.textarea`
  display: block;
  /* font-family: Slack-Lato, appleLogo, sans-serif; */
  margin: 18px 20px;
  width: 100%;
  height: ${STYLE.CHAT_INPUT_HEIGHT};
  font-size: 15px;
  line-height: 22px;
  resize: none;
  overflow: hidden;
  &::placeholder {
    color: ${COLOR.TEXT_GRAY};
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

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 7px;
  border-radius: 4px;
  padding: 5px 0;

  &.active {
    background: ${COLOR.ACTIVE};
    svg {
      color: #fff;
    }
    .send-later::before {
      background: #fff;
    }
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 7px;
  position: relative;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${COLOR.TEXT_GRAY};
  }

  &.send-later {
    padding-left: 7px;
    svg {
      font-size: 13px;
    }
    &::before {
      position: absolute;
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${COLOR.TEXT_GRAY};
      opacity: 0.5;
      left: 0;
    }
  }
`;

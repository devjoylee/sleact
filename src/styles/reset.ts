import { css } from '@emotion/react';

export const reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;800&display=swap');
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  h1,
  h2,
  h3 {
    font-size: 100%;
    font: inherit;
  }
  ul,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    line-height: inherit;
    border: none;
  }
  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    background: none;
    line-height: 1;
    font: inherit;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;

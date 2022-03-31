import { css } from '@emotion/react';

export const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body,
  body > div {
    height: 100%;
  }
  body {
    background: $black-primary;
    color: $text-color;
    font-family: 'Roboto', sans-serif;
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

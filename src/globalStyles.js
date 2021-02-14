import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 16px;
  }

  body {
    background-color: #1e1e1e;
  }
`;

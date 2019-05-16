import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #e5e5e5;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.166666;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
  }

  #root {
    max-width: 100%;
    padding: 10px;
  }

  label {
    font-weight: 400;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }
`;

export default GlobalStyles;

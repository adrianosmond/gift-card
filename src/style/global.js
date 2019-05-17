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
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.166666;
    min-height: 100vh;
    color: #333333;
  }

  label {
    font-weight: 400;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }

  /* Animations */
  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    opacity: 1;
    transition: opacity 350ms;
  }

  .appear-exit {
    opacity: 1;
  }

  .appear-exit-active {
    opacity: 0;
    transition: opacity 350ms;
  }
`;

export default GlobalStyles;

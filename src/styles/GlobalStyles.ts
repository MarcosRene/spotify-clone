import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  *, button, input {
    border: 0;

    font-family: 'Roboto', sans-serif;
  }
`;
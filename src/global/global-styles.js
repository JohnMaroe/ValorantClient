import {createGlobalStyle}  from 'styled-components';

export const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  html, body, :root {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }
`;
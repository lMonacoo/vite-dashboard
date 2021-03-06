import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    margin-block-start: 0;
    margin-block-end: 0;

    transition: 0.2s;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 70%;
    }
  }

  img {
    display: block;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  label {
    cursor: inherit;
  }

  button {
    border: 0;
  }

  html, body {
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body, input, button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #fff;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --player-background: #232323; 

    --red-button: #EB5757;
    --red-track: #F67372;
    --red-track-indicator: #F3504F;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-50);
    font-family: Montserrat, sans-serif;
  }

  body, input, textarea, button {
    font: 500 1rem sans-serif;
    color: var(--gray-500);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--gray-800);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  /* a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    transition: 180ms ease-in-out;
  } */
`;

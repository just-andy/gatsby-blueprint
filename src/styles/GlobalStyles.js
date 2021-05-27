import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/** Root */
:root {
    --primary: #FF4949;
    --secondary: blue;
    --accent: aqua;
    --black: #000104;
    --success: #ffc600;
    --error: #ff4400;
    --white: #ffffff;
    --grey: #efefef;
  }


/** Body */
  body {
    background-color:#e5e5e5;
  }
  
  /** Container */
  .container {
    max-width: 1024px;
    margin: var(--space-24) auto;
    background-color:var(--white);
    padding: var(--space-24);
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }


`;

export default GlobalStyles;

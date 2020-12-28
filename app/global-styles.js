import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', Helvetica, Arial, serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  .content {
    width: 100%;
    margin: auto;
    min-height: 100%;
    padding: 0 8px;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;

export default GlobalStyle;

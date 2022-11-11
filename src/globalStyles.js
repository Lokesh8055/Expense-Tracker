import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

*,
*::after
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #3f3f3f;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

.heading {
    font-size: 2.2rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

`

export default GlobalStyle
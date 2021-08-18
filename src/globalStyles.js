import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary:#000000;
        --colorHover:#565656;
    }   
    *{
        box-sizing:border-box;
    }
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto Slab', serif;
    font-size:18px;
    color:var(--primary);
    font-weight:700;
  }
  a{
      color:var(--primary);
      text-decoration:none;
      &:hover{
        text-decoration:none;
        color:var(--colorHover)
      }
  }
`;
 
export default GlobalStyle;
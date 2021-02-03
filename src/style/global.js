import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'
import Fonts from "./fonts"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${Fonts};
  
/*============================
    Base
============================*/
  *, *::after, *::before {
      box-sizing: border-box;
  }
  
  :root {
    --font-display: 'GT-Display',serif;
    --font-mono: 'Inter', 'Roboto Mono', san-serif, monospace;
    --font-outline: 'HunnyStrawSansOutline', sans-serif;
    --font-size: 18px;
    --line-height: calc(var(--font-size)*1.5);
    --baseline: calc(var(--line-height)/2)
    --h1: 2.8rem;
    --h2: 2.2rem;
    --h3: 1.4rem;
    --h4: 1.1rem;
    --size-title: 9.2vw;
    
    --color-complement: #727272;
    --color-complement: #9b9b9b;
    --left-margin: 17.2rem;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  html, body {
    font-size: 18px;
    // ${media.lg`
    //   font-size: 16px;
    // `}
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    display: block;
    background-color: ${colors.black};
    font-family: 'Poppins', sans-serif;
    backface-visibility: hidden;
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      color: ${colors.yellow500};
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }
  
  ::selection {
    color: ${colors.yellow500};
    background: transparent;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  .app{
    min-height: 100vh;
    display; grid;
    grid-auto-flow: column;
    justify-content: start;
  }
`;


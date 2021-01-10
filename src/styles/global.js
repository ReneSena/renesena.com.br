import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        line-height: 1;
        font-size: 100%;
        color: #222;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }
    
body.dark {
    --borders: #38444d;
    --texts: #c1c1c1;
    --postColor: #f3f3f3;
    --highlight: #0FFF73;
    --mediumBackground: #121212;
    --background: #171717;
    --white: #fff;
    --black: #333;

    --postTime: #c1c1c1;
    --postTitle: #F3F3F3;
    --postDescription: #c1c1c1;
    --postTimeRead: #c1c1c1; 
    --postBackground: #222;
    --postBorder: #333;
    --postCardBorder: #222;
  }

  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #171717;
    --highlight: #003516;
    --mediumBackground: #fff;
    --background: #f3f3f3;
    --white: #fff;
    --black: #222;

    --postTime: #555;
    --postTitle: #222;
    --postDescription: #555;
    --postTimeRead: #555; 
    --postBackground: #FFF;
    --postBorder: #E4E4E4;
    --postCardBorder: #c1c1c1;
  }
`

export default GlobalStyles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* reset.css */
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
        vertical-align: baseline;
        font-weight: normal;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    a {
    text-decoration: none; /* 언더바 제거 */
    color: inherit; /* 부모 요소의 색을 상속 받음 */
    }
    input:focus {
      outline: none;
    }
    input {
      border: 0;
    }
    img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
}
  *:focus {
    outline: none !important;
  }
    * {
      box-sizing: border-box;
    @font-face {
      font-family: 'IBMPlexSansKR-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'BMJUA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
      font-family: 'GangwonEdu_OTFBoldA';
    }

    //반드시 overflow: overlay해야 -webkit-scrollbar-track 투명도를 설정할 수 있다.
    body {
      overflow: overlay;
      font-family: 'IBMPlexSansKR-Regular';
    }
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border: 0 solid transparent;
      border-radius: 10px;
      background-color: #0000008e;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }


`;

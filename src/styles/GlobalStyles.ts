import { createGlobalStyle, css } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`

@font-face{
  src: url("/Roboto-Regular.ttf");
  font-family: "Roboto";
}

:root{
  /* #4f5150 */
  --primary-color:${(props) =>
    props.mode === "dark" ? "rgba(79,80,81,.9)" : "rgba(244,244,244,.985)"};
  --primary-color-text:${(props) =>
    props.mode === "light" ? "#111" : "#F0F0F0"};
  --primary-color2:${(props) =>
    props.mode === "dark" ? "#3f3f3d" : "#F4F4F4"};
  --max-width:450px;
}

  body{
    overflow-x:hidden;
  }
  .show_short_and_view_more{
    text-overflow:ellipsis;
    overflow: hidden;
    max-width:320px;
    white-space: nowrap;
    display:inline-block;
  }

    .bg-container{
      width:100vw;
      min-height: 100vh;
      position:absolute;
      z-index:1;
      background: url("./img/bg-afrika.jpg");
      /* background-position: 100% 100%; */
      background-position: center center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-attachment:fixed;
    }
    .bg-container2{
      
      ${(props) =>
        props.mode === "light"
          ? css`
              /* background-color: rgba(255, 255, 255, 0.9); */
              /* background-color: rgba(255, 255, 255, 0.8); */
            `
          : css`
              /* background-color: rgba(255, 255, 255, 0.5); */
              background-color: rgba(0, 0, 0, 0.8);
            `};
    }
    .super-container{
      max-width:var(--max-width);
      position: relative;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:space-between;

      @media(min-height:600px){
        justify-content: flex-start;
      }
    }

    .animate{
      transition:all .5s linear;
    }
    .animate-to-bottom{ 
      opacity:0;
      pointer-events: none;
      display:none;
    }

    .MuiListItem-root .MuiListItemAvatar-root svg{
      fill:#111;
    }
`;

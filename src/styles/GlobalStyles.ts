import { createGlobalStyle, css } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`

  :root{
    --primary-color:#4f5150;
    --max-width:450px;
  }

  body{
    overflow-x:hidden;
  }

    .bg-container{
      width:100vw;
      min-height: 100vh;
      position:absolute;
      z-index:1;
      background: url("/img/bg-afrika.jpg");
      /* background-position: 100% 100%; */
      background-position: center center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
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
    }

    .animate{
      transition:all .5s linear;
    }
    .animate-to-bottom{ 
      opacity:0;
      pointer-events: none;
      display:none;
    }
`;

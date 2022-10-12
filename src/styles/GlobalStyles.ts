import { createGlobalStyle, css } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`

  :root{
    --primary-color:#4f5150;
  }

    .bg-container{
      width:100vw;
      height: 100vh;
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
      max-width:450px;
    }
`;

import { Typography, Box } from "@mui/material";
import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
`;

export const BoxColumnCenter = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
` as typeof Box;

export const Text = styled(Typography)`` as typeof Typography;

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 10;
  height: calc(100vh - 250px);
  min-height: 300px;
  transition: height 0.5s linear;
  &.full {
    height: 95vh;
  }

  overflow-y: auto;
  width: 100%;
  background-color: var(--primary-color);

  padding-bottom: 40px;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  .ornament {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;

    div {
      width: 80px;
      height: 3px;
      background: white;
      border-radius: 4px;
    }
  }
`;

export const InputArea = styled.div`
  textarea,
  input {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* border: none; */
    outline: none;
    width: 100%;
    padding: 8px 10px;
    color: white;
    font-size: 18px;
    font-family: "Roboto", sans-serif;

    ::placeholder {
      /* color: white; */
      padding-left: 3px;
      font-size: inherit;
      font-family: inherit;
      font-weight: 500;
    }
  }
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: var(--max-width);
  padding: 10px 0px;

  @media (max-height: 500px) {
    padding: 0px;
    position: relative;
    bottom: initial;
    z-index: initial;
  }
`;

export const PageHeaderContainer = styled.div`
  height: 95vh;
  background: var(--primary-color);

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  color: #f0f0f0;
`;

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
` as typeof Box;

export const Text = styled(Typography)`` as typeof Typography;

export const HeaderContainer = styled.div`
  height: calc(100vh - 190px);
  overflow-y: auto;
  width: 100%;
  background-color: var(--primary-color);

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  position: relative;

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
  textarea {
    background: transparent;
    /* border: 1px solid #fff; */
    border: none;
    outline: none;
    width: 100%;
    height: 100px;
    padding: 8px 5px;
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
  width: 100%;
  max-width: var(--max-width);
  padding: 10px 0px;
`;

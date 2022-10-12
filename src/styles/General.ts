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
  height: calc(100vh - 160px);
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

export const InputArea = styled.div``;

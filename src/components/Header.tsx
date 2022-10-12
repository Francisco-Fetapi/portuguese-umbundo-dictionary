import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { HeaderContainer, Text } from "../styles/General";
import { MdStar, MdMenu } from "react-icons/md";

export default function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <Box pt={2} px={0.8}>
        <Stack direction="row" alignItems="center">
          <IconButton>
            <MdStar color={theme.palette.primary.light} />
          </IconButton>
          <Stack
            flexGrow={1}
            direction="row"
            gap={0.5}
            alignItems="center"
            justifyContent="center"
            style={{ zoom: 0.95 }}
          >
            <Text variant="h6" fontWeight="bold" color="white">
              Tradutor
            </Text>
            <Text variant="h6" color="white" fontWeight={300}>
              Umbundo
            </Text>
          </Stack>
          <IconButton>
            <MdMenu color={theme.palette.primary.light} />
          </IconButton>
        </Stack>
      </Box>

      <div className="ornament">
        <div />
      </div>
    </HeaderContainer>
  );
}

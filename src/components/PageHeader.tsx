import { IconButton, Stack, useTheme, Box } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
// import { use } from "react-router-dom";
import { PageHeaderContainer, Text } from "../styles/General";

interface PageHeaderProps {
  children: React.ReactNode;
  pageName: string;
  noInitialMargin?: boolean;
}

export default function PageHeader({
  children,
  pageName,
  noInitialMargin,
}: PageHeaderProps) {
  return (
    <PageHeaderContainer>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          py={0.5}
          px={1}
          sx={{
            bgcolor: "primary.dark",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <IconButton onClick={() => window.history.back()}>
            <MdArrowBack size={30} color="#F0F0F0" />
          </IconButton>
          <Stack
            flexGrow={1}
            direction="row"
            gap={0.5}
            alignItems="center"
            style={{ zoom: 0.95 }}
            ml={2.5}
          >
            <Text
              variant="h6"
              fontWeight="300"
              color="white"
              //   sx={{ zoom: 0.9 }}
            >
              {pageName.toUpperCase()}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Box
        pt={noInitialMargin ? 0 : 1}
        display="flex"
        flexDirection="column"
        height="85%"
        mt="54px"
      >
        {children}
      </Box>
    </PageHeaderContainer>
  );
}

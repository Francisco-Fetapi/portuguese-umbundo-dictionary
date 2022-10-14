import { IconButton, Stack, useTheme, Box } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
// import { use } from "react-router-dom";
import { PageHeaderContainer, Text } from "../styles/General";

interface PageHeaderProps {
  children: React.ReactNode;
  pageName: string;
}

export default function PageHeader({ children, pageName }: PageHeaderProps) {
  return (
    <PageHeaderContainer>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          py={0.5}
          px={1}
          sx={{
            bgcolor: "primary.light",
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
            {/* <Text variant="h6" color="white" fontWeight={300}>
              Umbundo
            </Text> */}
          </Stack>
        </Stack>
      </Box>
      <Box pt={1}>{children}</Box>
    </PageHeaderContainer>
  );
}

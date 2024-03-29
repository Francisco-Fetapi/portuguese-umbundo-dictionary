import { IconButton, Stack, useTheme, Box } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { PageHeaderContainer, Text } from "../styles/General";

interface PageHeaderProps {
  children: React.ReactNode;
  pageName: string;
  noInitialMargin?: boolean;
  secondaryAction?: React.ReactNode;
  containerProps?: object;
}

export default function PageHeader({
  children,
  pageName,
  noInitialMargin,
  secondaryAction,
  containerProps,
}: PageHeaderProps) {
  return (
    <PageHeaderContainer id="page-header-container">
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
            // left: 0,
            // right: 0,
            width: "100%",
            maxWidth: "var(--max-width)",
            zIndex: 9,
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

          {secondaryAction}
        </Stack>
      </Box>
      <Box
        pt={noInitialMargin ? 0 : 1}
        display="flex"
        flexDirection="column"
        height="85%"
        mt="54px"
        id="modal-body"
        {...containerProps}
      >
        {children}
      </Box>
    </PageHeaderContainer>
  );
}

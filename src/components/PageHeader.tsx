import { IconButton, Stack, useTheme, Box } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { PageHeaderContainer, Text } from "../styles/General";

interface PageHeaderProps {
  children: React.ReactNode;
  pageName: string;
}

export default function PageHeader({ children, pageName }: PageHeaderProps) {
  const theme = useTheme();
  return (
    <PageHeaderContainer>
      <Box py={1} px={1}>
        <Stack direction="row" alignItems="center">
          <IconButton>
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
            <Text variant="h6" fontWeight="bold" color="white">
              {pageName}
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

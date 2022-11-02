import { List, ListItem, ListItemText, Stack } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import conversations from "../database/conversations.json";

export default function Conversation() {
  const params = useParams();
  const conversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation.slug === params.slug
    );
  }, []);

  return (
    <PageHeader pageName={conversation?.topic || "Conversação"} noInitialMargin>
      <List
        sx={{
          width: "100%",
          padding: 0,
          zoom: "0.96",
        }}
      >
        {conversation?.phrases.map((phrase, key) => (
          <ListItem key={key} divider>
            <ListItemText
              primary={
                <Stack direction="row" gap={1.5} alignItems="center">
                  <LogoLanguageShort logo="logo-portugal" />
                  {phrase.pt}
                </Stack>
              }
              //   secondary={phrase.um}
              secondary={
                <Stack direction="row" gap={1.5} alignItems="center">
                  <LogoLanguageShort logo="logo-angola" />
                  {phrase.um}
                </Stack>
              }
            />
          </ListItem>
        ))}
      </List>
    </PageHeader>
  );
}

interface LogoLanguageShortProps {
  logo: string;
}

function LogoLanguageShort({ logo }: LogoLanguageShortProps) {
  return (
    <img
      src={`/img/${logo}.jpg`}
      width={18}
      height={18}
      style={{
        borderRadius: "50%",
        zoom: "0.98",
      }}
    />
  );
}

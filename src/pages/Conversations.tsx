import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import conversations from "../database/conversations.json";

export default function Conversations() {
  const navigate = useNavigate();
  return (
    <PageHeader pageName="Conversação">
      <List
        sx={{
          width: "100%",
          padding: 0,
          zoom: "0.95",
        }}
      >
        {conversations.map((conversation) => (
          <ListItem
            key={conversation.slug}
            button
            onClick={() => navigate(`/conversacao/${conversation.slug}`)}
          >
            <ListItemAvatar
              sx={{
                zoom: 0.8,
              }}
            >
              <Avatar>{conversation.topic[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={conversation.topic}
              secondary={conversation.description || "Nenhuma descrição."}
            />
          </ListItem>
        ))}
      </List>
    </PageHeader>
  );
}

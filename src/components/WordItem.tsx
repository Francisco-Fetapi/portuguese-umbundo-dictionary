import { ListItem, ListItemText } from "@mui/material";

interface WordItemProps {
  primary: string;
  secondary: string;
}

export default function WordItem({ ...props }: WordItemProps) {
  return (
    <ListItem button divider>
      <ListItemText {...props} />
    </ListItem>
  );
}

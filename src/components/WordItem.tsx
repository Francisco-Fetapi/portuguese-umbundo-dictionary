import { ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface WordItemProps {
  primary: string;
  secondary: string[];
}

export default function WordItem({ secondary, ...props }: WordItemProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/palavra/" + props.primary.toLowerCase());
  }

  return (
    <ListItem button divider onClick={handleClick}>
      <ListItemText
        {...props}
        secondary={
          <span className="show_short_and_view_more">
            {secondary.slice(0, 3).join(", ")}
          </span>
        }
      />
    </ListItem>
  );
}

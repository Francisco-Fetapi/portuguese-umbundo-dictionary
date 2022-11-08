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

  if (!secondary) {
    return <div />;
  }

  return (
    <ListItem button divider onClick={handleClick}>
      <ListItemText
        {...props}
        secondary={
          (secondary?.length || 0) !== 0 ? (
            <span className="show_short_and_view_more">
              {secondary.slice(0, 3).join(", ")}
            </span>
          ) : null
        }
      />
    </ListItem>
  );
}

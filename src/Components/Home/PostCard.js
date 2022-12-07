import React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton edge="end" {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt="mangashelfil"
            src="https://res.cloudinary.com/dj0lobeyp/image/upload/c_scale,h_150/v1670143731/Branding/Logo_cfqrbr.webp"
          />
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <div>
            mangashelfil
            <LocalPoliceIcon />
          </div>
        }
        subheader={"24 בנוב׳ \u2022 זמן קריאה 1 דקות"}
      />
      <CardContent>
        <Typography variant="h4" color="text.primary">
          מנגה שלף חוגגת שנתיים לחידוש עם חבילת צ'אפטרים!!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>and the expanded content</CardContent>
      </Collapse>
    </Card>
  );
};

export default PostCard;

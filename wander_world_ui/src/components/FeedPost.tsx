import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface FeedPostProps {
  image: string;
  title: string;
  desc: string;
  onLikeClick: () => void;
  onSaveClick: () => void;
}

function FeedPost({ image, title, desc, onLikeClick, onSaveClick }: FeedPostProps): JSX.Element {
  return (
    <Card>
      <CardMedia
        component="img"
        height="360"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onLikeClick}>Like</Button>
        <Button size="small" onClick={onSaveClick}>Save</Button>
      </CardActions>
    </Card>
  );
}

export default FeedPost;

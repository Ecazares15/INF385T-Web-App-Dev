import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface FeedPostProps {
  image: string;
  title: string;
  desc: string;
  onLikeClick: () => void;
  onSaveClick: () => void;
}

function FeedPost({
  image,
  title,
  desc,
  onLikeClick,
  onSaveClick,
}: FeedPostProps): JSX.Element {
  return (
    <Card>
      <CardMedia
        component="img"
        height="450"
        image={image}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <div style={{ display: "flex" }}>
          <div className="w-100 h-100">
            <div className="w-100 h-100 d-flex justify-content-between">
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </div>
              <div>
                <Button size="medium" onClick={onLikeClick}>
                  <ThumbUpIcon fontSize="medium" />
                </Button>
                <Button size="medium" onClick={onSaveClick}>
                  <FavoriteIcon fontSize="medium" />
                </Button>
              </div>
            </div>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is question 1 answer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is question 2 answer
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeedPost;

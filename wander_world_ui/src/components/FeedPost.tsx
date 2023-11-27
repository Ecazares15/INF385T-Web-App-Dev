import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

interface FeedPostProps {
  image: string;
  author: string;
  description: string;
  favoriteFood: string;
  favoriteActivity: string;
  numLikes: number;
  onLikeClick: () => void;
  onSaveClick: () => void;
}

function FeedPost({
  image,
  author,
  description,
  favoriteFood,
  favoriteActivity,
  numLikes,
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
                  {author}
                </Typography>
              </div>
              <div>
                <Button size="medium" onClick={onLikeClick}>
                  <FavoriteBorderOutlinedIcon fontSize="medium" />
                </Button>
                <Button size="medium" onClick={onSaveClick}>
                  <BookmarkBorderOutlinedIcon fontSize="medium" />
                </Button>
              </div>
            </div>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {favoriteFood}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {favoriteActivity}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeedPost;

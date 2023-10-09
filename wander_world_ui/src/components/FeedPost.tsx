import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function FeedPost() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Post Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Post Content
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}

export default FeedPost;
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const onLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <Button size="medium" onClick={onLikeClick} color="secondary">
      {liked ? <FavoriteIcon fontSize="medium" /> : <FavoriteBorderOutlinedIcon fontSize="medium" />}
    </Button>
  );
}

export default LikeButton;
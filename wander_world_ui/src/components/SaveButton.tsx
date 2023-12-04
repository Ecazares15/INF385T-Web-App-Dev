import React, { useState } from 'react';
import Button from '@mui/material/Button';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function SaveButton() {
  const [saved, setSaved] = useState(false);

  const onSaveClick = () => {
    setSaved(!saved); // Toggle the saved state
  };

  return (
    <Button size="medium" onClick={onSaveClick}>
      {saved ? <BookmarkIcon fontSize="medium" color="success" /> : <BookmarkBorderOutlinedIcon fontSize="medium" color="success" />}
    </Button>
  );
}

export default SaveButton;
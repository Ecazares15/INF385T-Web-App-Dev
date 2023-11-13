import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function CreatePost() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    // await fetch("YOUR_URL", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // });
  };

  return (
    <Container
      className="mt-5"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper className="w-50 h-50" elevation={1}>
        <div className="m-5">
          <div className="pb-3">
            <h1>Post Something...</h1>
          </div>
          <div className="pb-3 text-center">
            <label htmlFor="upload-button">
              {image.preview ? (
                <img
                  src={image.preview}
                  alt="image prview"
                  width={400}
                  height={450}
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <>
                  <PhotoCamera />
                  <span>Upload Image</span>
                </>
              )}
            </label>
            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleChange}
            />
          </div>
          <div className="pb-3">
            <div>
              <strong>Description</strong>
            </div>
            <TextField
              required
              fullWidth
              multiline
              variant="standard"
              type="text"
            />
          </div>
          <div className="pb-3">
            <div>
              <strong>Favorite thing you ate</strong>
            </div>
            <TextField
              required
              fullWidth
              multiline
              variant="standard"
              type="text"
            />
          </div>
          <div className="pb-3">
            <div>
              <strong>Favorite thing you did</strong>
            </div>
            <TextField
              required
              fullWidth
              multiline
              variant="standard"
              type="text"
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="contained">Post</Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default CreatePost;

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

function CreatePost() {
  const [imageUpload, setImageUpload] = useState(null);
  const [description, setDescription] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");
  const [favoriteActivity, setFavoriteActivity] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: 'author'
  });

  const hostname = "https://wander-world-api.vercel.app";
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
        fetchUserDetails(currentUser.uid);
    }
  }, []);

  const fetchUserDetails = async (uid) => {
      try {
          const response = await axios.get(`${hostname}/users/${uid}`);
          setUserDetails(response.data);
      } catch (error) {
          console.error("Error fetching user details:", error);
      }
  };

  const uploadPost = () => {
    if (imageUpload == null) {
      alert("Please upload an image");
      return;
    }
    if (description === "" || favoriteFood === "" || favoriteActivity === "") {
      alert("Please fill in all fields");
      return;
    }

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        axios
          .post(`${hostname}/posts`, {
            author: userDetails.name,
            description: description,
            favoriteFood: favoriteFood,
            favoriteActivity: favoriteActivity,
            image: url,
            numLikes: 0,
          })
          .then((res) => {
            navigate("/feed");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
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
              {imageUpload ? (
                <img
                  src={imageUpload && URL.createObjectURL(imageUpload)}
                  alt="image preview"
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
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
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
              onChangeCapture={(e) => {
                setDescription(e.target.value);
              }}
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
              onChangeCapture={(e) => {
                setFavoriteFood(e.target.value);
              }}
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
              onChangeCapture={(e) => {
                setFavoriteActivity(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button className="me-5" variant="contained" onClick={uploadPost}>
              Post
            </Button>
            <Button variant="contained">
              <Link
                to="/feed"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Cancel
              </Link>
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default CreatePost;

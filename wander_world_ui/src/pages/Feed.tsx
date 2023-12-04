import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Button from "@mui/material/Button";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "./styles/Feed.css";

import { EffectCoverflow } from "swiper/modules";
import FeedPost from "../components/FeedPost";
import { Link } from "react-router-dom";

interface Post {
  image: string;
  author: string;
  description: string;
  favoriteFood: string;
  favoriteActivity: string;
  numLikes: number;
}

function onLikeClick(): void {
  console.log("Like clicked");
}

function onSaveClick(): void {
  console.log("Save clicked");
}

function Feed(): JSX.Element {
  const [posts, setPosts] = useState([]);

  const hostname =
    "https://wander-world-api-ecazares15-eddie-cazares-projects.vercel.app";

  useEffect(() => {
    axios
      .get(`${hostname}/posts`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const listItems = posts.map((post: Post) => (
    <SwiperSlide>
      {" "}
      <FeedPost
        image={post.image}
        author={post.author}
        description={post.description}
        favoriteFood={post.favoriteFood}
        favoriteActivity={post.favoriteActivity}
        numLikes={post.numLikes}
        onLikeClick={onLikeClick}
        onSaveClick={onSaveClick}
      ></FeedPost>
    </SwiperSlide>
  ));
  return (
    <div className="feed-swiper-container">
      <div>
        <Button className="mb-3" variant="contained" color="secondary">
          <Link
            to="/feed/create"
            style={{ textDecoration: "none", color: "white" }}
          >
            Create Post
          </Link>{" "}
        </Button>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          {listItems}
        </Swiper>
      </div>
    </div>
  );
}

export default Feed;

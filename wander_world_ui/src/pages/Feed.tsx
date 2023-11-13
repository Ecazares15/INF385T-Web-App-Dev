import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/Feed.css";

import { EffectCoverflow } from "swiper/modules";
import FeedPost from "../components/FeedPost";

interface Post {
  image: string;
  author: string;
  caption: string;
  numLikes: number;
}

function onLikeClick(): void {
  console.log("Like clicked");
}

function onSaveClick(): void {
  console.log("Save clicked");
}

function App(): JSX.Element {
  const [posts, setPosts] = useState([]);

  const hostname = "http://127.0.0.1:5000";

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
        caption={post.caption}
        numLikes={post.numLikes}
        onLikeClick={onLikeClick}
        onSaveClick={onSaveClick}
      ></FeedPost>
    </SwiperSlide>
  ));
  return (
    <div className="feed-swiper-container">
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
  );
}

export default App;

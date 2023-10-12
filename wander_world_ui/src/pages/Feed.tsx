import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/Feed.css";

import { EffectCoverflow } from "swiper/modules";
import FeedPost from "../components/FeedPost";

function onLikeClick(): void {
  console.log("Like clicked");
}

function onSaveClick(): void {
  console.log("Save clicked");
}

function App(): JSX.Element {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <SwiperSlide>
      {" "}
      <FeedPost
        image="https://swiperjs.com/demos/images/nature-1.jpg"
        title="Post Title"
        desc="This is the description"
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

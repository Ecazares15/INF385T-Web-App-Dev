// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/Feed.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import FeedPost from "../components/FeedPost";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <SwiperSlide>
      {" "}
      <FeedPost />{" "}
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
        { listItems }
      </Swiper>
    </div>
  );
}

export default App;

import React  from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';import "swiper/css";
import Sidebar from "../../img/pic4.png";
import Ecommerce from "../../img/pic3.png";
import MusicApp from "../../img/pic1.png";



const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>


      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://github.com/mohamedinfath99/hotel-booking-app.git' target="_blank" rel="noopener noreferrer">
            <img src={Sidebar} alt="" />
          </a>

        </SwiperSlide>

        <SwiperSlide>
          <a href='https://github.com/mohamedinfath99/keep-react.git' target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="" />
          </a>

        </SwiperSlide>

        <SwiperSlide>
          <a href='https://github.com/mohamedinfath99/online-shopping-app.git' target="_blank" rel="noopener noreferrer">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/swiper.min.css'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Cardiff-Met.jpg";
import profilePic2 from "../../img/unnamed.jpg";


const Education = () => {
  const clients = [
    {
      img: profilePic1,
      university : "University of Cardiff Metropolitan",
      degree : "BSc (Hons) Software Engineering",
      Date : "May 2022 - May 2023 (R)",
      rank : "Loading..."
    },
    {
      img: profilePic2,
      university : "ICBT Colombo Campus",
      degree : "Higher Diploma in Computing",
      Date : "May 2019 - May 2021",
      rank : "Upper Second-Class Honours "
    }
  ];

  return (
    <div className="t-wrapper" id="Education">
      <div className="t-heading">
        <span>My Academic</span>
        <br />
        <span>History </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.university}</span>
                <span>{client.degree}</span>
                <span>{client.Date}</span>
                <span>{client.rank}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Education;

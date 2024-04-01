import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Upcoming = () => {
    return (
        <>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper  w-[80%] h-[550px] border-t-8 border-sky-400"
          >
            <SwiperSlide><img src="https://www.movieposters.com/cdn/shop/files/tarot_nxigdvu5_480x.progressive.jpg?v=1708723278" alt="" /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      );
};

export default Upcoming;
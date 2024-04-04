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
            className="mySwiper  w-[80%] h-[600px] border-t-8 border-sky-400"
          >
            <SwiperSlide><img src="https://www.movieposters.com/cdn/shop/files/tarot_nxigdvu5_480x.progressive.jpg?v=1708723278" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.movieposters.com/cdn/shop/files/inside_out_two_ver2_480x.progressive.jpg?v=1711998871" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.movieposters.com/cdn/shop/files/la-chimera_66zmhpiv_480x.progressive.jpg?v=1710337039" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.movieposters.com/cdn/shop/files/immaculate_p7zu5lnq_480x.progressive.jpg?v=1710335575" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.movieposters.com/cdn/shop/files/kraven-the-hunter_fjppr61l_480x.progressive.jpg?v=1700498044" alt="" /></SwiperSlide>
          
            
          </Swiper>
        </>
      );
};

export default Upcoming;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Featured = () => {
    return (
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img className='h-60' src="https://www.movieposters.com/cdn/shop/files/fall_guy_ver2_480x.progressive.jpg?v=1710786989" alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-60' src="https://www.movieposters.com/cdn/shop/files/kingdom-of-the-planet-of-the-apes_kokzpb3e_480x.progressive.jpg?v=1710515526" alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-60' src="https://www.movieposters.com/cdn/shop/files/french-girl_m52kjdld_480x.progressive.jpg?v=1710337331" alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-60' src="https://www.movieposters.com/cdn/shop/files/fall_guy_ver2_480x.progressive.jpg?v=1710786989" alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-60' src="https://www.movieposters.com/cdn/shop/files/fall_guy_ver2_480x.progressive.jpg?v=1710786989" alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-60' src="https://www.movieposters.com/cdn/shop/files/fall_guy_ver2_480x.progressive.jpg?v=1710786989" alt="" /></SwiperSlide>
         
        </Swiper>
      </>
    );
};

export default Featured;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import './swiper.css'
import 'swiper/css/navigation';


const Featured = () => {
    return (
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true} // Enable navigation
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='border-r-2 shadow-2xl'><img className='h-60 mx-auto' src="https://www.movieposters.com/cdn/shop/files/fall_guy_ver2_480x.progressive.jpg?v=1710786989" alt="" /></SwiperSlide>
          <SwiperSlide className='border-r-2 shadow-2xl'><img className='h-60 mx-auto' src="https://www.movieposters.com/cdn/shop/files/kingdom-of-the-planet-of-the-apes_kokzpb3e_480x.progressive.jpg?v=1710515526" alt="" /></SwiperSlide>
          <SwiperSlide className='border-r-2 shadow-2xl'><img className='h-60 mx-auto' src="https://www.movieposters.com/cdn/shop/files/french-girl_m52kjdld_480x.progressive.jpg?v=1710337331" alt="" /></SwiperSlide>
          <SwiperSlide className='border-r-2 shadow-2xl'><img className='h-60 mx-auto' src="https://www.movieposters.com/cdn/shop/files/inside_out_two_ver2_480x.progressive.jpg?v=1711998871" alt="" /></SwiperSlide>
          <SwiperSlide className='border-r-2 shadow-2xl'><img className='h-60 mx-auto' src="https://www.movieposters.com/cdn/shop/files/la-chimera_66zmhpiv_480x.progressive.jpg?v=1710337039" alt="" /></SwiperSlide>
          <SwiperSlide className='border-r-2 shadow-2xl'><img className='h-60 mx-auto' src="https://www.movieposters.com/cdn/shop/files/kraven-the-hunter_fjppr61l_480x.progressive.jpg?v=1700498044" alt="" /></SwiperSlide>
         
        </Swiper>
      </>
    );
};

export default Featured;
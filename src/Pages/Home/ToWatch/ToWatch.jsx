import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoIosPlay } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";


const ToWatch = () => {

    const [toWatch, setToWatch] = useState();

    useEffect(()=> {
        fetch(`https://reel-radar-server.vercel.app/towatch`)
        .then(res=> res.json())
        .then(data=> setToWatch(data))
    },[])

    return (
        <>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className=''>
            
          {
                toWatch?.map(watch=> <SwiperSlide className='bg-gray-900 py-4 px-2' key={watch._id} watch={watch}><img className='mx-auto h-60 w-30 mb-6' src={watch?.picture} alt="" />
                
                <div className='text-center space-y-8'>
                <div className='flex items-center justify-around gap-4 mb-6'>
                <div className='flex gap-2 items-center'>
                <FaStar size={20} color='yellow'></FaStar>
                <p className='text-xl'>{watch?.rating}</p>
                </div>
                <CiStar size={30} color='skyblue'  className='ml-10'></CiStar>
                </div>
                <h1 className='text-start h-6'>{watch?.title}</h1>
                <button className='btn btn-ghost rounded-none bg-gray-800 text-sky-400'><AiOutlinePlusSquare size={20}></AiOutlinePlusSquare>Add to Watchlist</button>
                <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                <IoIosPlay size={20}></IoIosPlay>
                <p className='cursor-pointer'>Trailer</p>
                </div>
                <FaInfoCircle className='cursor-pointer'></FaInfoCircle>
                </div>
                </div>
                
                </SwiperSlide>)
            }
          
          </div>
        </Swiper>
      </>
    );
};

export default ToWatch;
import React from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';
import { FaInfoCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { IoIosPlay } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';

const Series = () => {
    const contents = useLoaderData();
    const movies = contents?.filter(content=> content?.type === 'Series');
    console.log(movies);
    return (
        <div className='my-10'>
        <h1 className="mx-auto  text-xl mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60">
          Series
       </h1>
       <Swiper
         slidesPerView={6}
         spaceBetween={30}
         breakpoints={{
           320: {
             slidesPerView: 1,
           },
           425: {
             slidesPerView: 1,
           },
           768: {
             slidesPerView: 4,
           },
           1024: {
             slidesPerView: 6,
           },
         }}
         navigation={true} // Enable navigation
         pagination={{
           clickable: true,
         }}
         modules={[Pagination, Navigation]}
         className="mySwiper"
         
       >
         <div className=''>
           
         {
               movies?.map(watch=> 
               

                 <SwiperSlide className='bg-gray-900 py-4 px-2 ' key={watch._id} watch={watch}>
                   
                   
                   <Link to={`/filmDetails/${watch?._id}`}>
                   <img className='mx-auto h-96 lg:h-60 lg:w-30 mb-6' src={watch?.picture} alt="" />
                   </Link>
                 
                 <div className='text-center space-y-8'>
                 <div className='flex items-center justify-around gap-4 mb-6'>
                 <div className='flex gap-2 items-center'>
                 <FaStar size={20} color='yellow'></FaStar>
                 <p className='text-xl'>{watch?.rating}</p>
                 </div>
                 <CiStar size={30} color='skyblue'  className='ml-10'></CiStar>
                 </div>
                 <h1 className='text-center text-3xl lg:text-base lg:text-start h-6'>{watch?.title}</h1>
                 <button className='btn btn-ghost rounded-none bg-gray-800 text-sky-400'><AiOutlinePlusSquare size={20}></AiOutlinePlusSquare>Add to Watchlist</button>
                 <div className='flex items-center justify-between'>
                 <div className='flex gap-2 items-center'>
                 <IoIosPlay size={20}></IoIosPlay>
                 <p className='cursor-pointer'>Trailer</p>
                 </div>
                 <Link to={`/filmDetails/${watch?._id}`}>
                 <FaInfoCircle className='cursor-pointer'></FaInfoCircle>
                 </Link>
                 </div>
                 </div>
                
                 
                 </SwiperSlide>

               )
           }
         
         </div>
       </Swiper>
     </div>
    );
};

export default Series;
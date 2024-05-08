import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoIosPlay } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { AuthContext } from '../../../Providers/AuthProvider';

const ToWatch = () => {

  const {goToTop} = useContext(AuthContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    const [toWatch, setToWatch] = useState();

    useEffect(()=> {
        fetch(`https://reel-radar-server.vercel.app/towatch`)
        .then(res=> res.json())
        .then(data=> setToWatch(data))
    },[]);

    return (
        <>
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

          data-aos="fade-up"
                  data-aos-duration="2000"
          
          
        >
          <div className=''>
            
          {
                toWatch?.map(watch=> 
                

                  <SwiperSlide className='bg-gray-900 py-4 px-2 ' key={watch._id} watch={watch} >
                    
                    
                    <Link to={`/filmDetails/${watch?._id}`} onClick={goToTop}>
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
                  <button className='btn btn-ghost rounded-none bg-gray-800 text-sky-400'><AiOutlinePlusSquare size={20}></AiOutlinePlusSquare>{watch?.duration}</button>
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
      </>
    );
};

export default ToWatch;
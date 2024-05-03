import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

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

import './watchlist.css'
import UseWatchlist from '../../CustomHooks/UseWatchlist';
import UseAxiosSecure from '../../CustomHooks/UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';


const Watchlist = () => {
  const {user} = useContext(AuthContext);
    const watchlist = useLoaderData();
    const myWatchList = watchlist.filter(myList=> myList?.email === user?.email)
    const [watchList, refetch] = UseWatchlist();
    const axiosSecure = UseAxiosSecure();

    const handleDelete = _id => {
      swal({
          title: "Please Confirm!",
          text: "Are you sure to delete?",
          icon: "warning",
          dangerMode: true,
        })
        .then(isConfirmed => {
          if (isConfirmed) {
              axiosSecure.delete(`/watchlist/${_id}`)
              .then(res=> {
                  if(res.data.deletedCount > 0){
                      refetch();
                      swal('Removed Successfully')
                  }
              })
           console.log('deleted')
          } else{
            swal("Not deleted");
  
          }
        });
    }
    
    return (
        <div className='m-10'>
            
          {
            myWatchList?.length > 0 ? 
            <Swiper
            slidesPerView={6}
            spaceBetween={30}
            breakpoints={{
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
            <div className='grid grid-cols-6'>
              
            {
                  myWatchList?.map(watch=> 
                  
  
                    <SwiperSlide className='bg-gray-900 py-4 px-2 ' key={watch._id} watch={watch}>
                      
                      
                      <Link to={`/filmDetails/${watch?.id}`}>
                      <img className='mx-auto h-48 lg:h-48 lg:w-30 mb-2' src={watch?.picture} alt="" />
                      </Link>
                    <div className='text-center space-y-8'>
                    <div className='flex items-center justify-around gap-4 mb-6'>
                    <div className='flex gap-2 items-center'>
                    <FaStar size={20} color='yellow'></FaStar>
                    <p className='text-xl'>{watch?.rating}</p>
                    </div>
                    <CiStar size={30} color='skyblue'  className='ml-10'></CiStar>
                    </div>
                    <h1 className='text-center text-3xl lg:text-base lg:text-start h-8'>{watch?.title}</h1>
                    <button onClick={()=> handleDelete(watch?._id)} className='btn btn-ghost rounded-none bg-gray-800 text-sky-400'><AiOutlinePlusSquare size={20}></AiOutlinePlusSquare>Remove</button>
                    <div className='flex items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                    <IoIosPlay size={20}></IoIosPlay>
                    <p className='cursor-pointer'>Trailer</p>
                    </div>
                    <FaInfoCircle className='cursor-pointer'></FaInfoCircle>
                    </div>
                    </div>
                    
                    
                    </SwiperSlide>
  
                  )
              }
            
            </div>
          </Swiper> :
            <p className='text-center min-h-screen flex items-center justify-center'>
              Nothing Added Yet
            </p>
          }
        </div>
    );
};

export default Watchlist;
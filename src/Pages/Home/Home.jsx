import React from 'react';
import Banner from './Banner/Banner';
import ToWatch from './ToWatch/ToWatch';
import Updates from './Updates/Updates';
import TopList from './TopList/TopList';
import Recommended from './Recommended/Recommended';

const Home = () => {
    return (
       <div>
         <div className='min-h-screen'>
            <Banner></Banner>
        </div>
        <div className='divider'></div>
        <div>
            <h1 className="text-5xl my-10 text-center">What to Watch</h1>
            <ToWatch></ToWatch>
        </div>
        <div className='divider'></div>
        <div className='py-10'>
        <h1 className="text-5xl my-10 text-center">News & Updates</h1>
        <Updates></Updates>
        </div>
        <div className='divider'></div>
        <div>
        <h1 className="text-5xl my-10 text-center lg:text-start">Top Listed Films</h1>
            <TopList></TopList>
        </div>
        <div className='divider'></div>
        <div>
        <div className='flex justify-center items-center gap-6'>
        <h1 className="text-5xl my-10 text-center lg:text-start">Recommended</h1>  <small className="  my-auto  text-xl px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60">For You</small>
        </div>
            <Recommended></Recommended>
        </div>
       </div>
    );
};

export default Home;
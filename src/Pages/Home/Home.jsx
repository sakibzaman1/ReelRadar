import React from 'react';
import Banner from './Banner/Banner';
import ToWatch from './ToWatch/ToWatch';
import Updates from './Updates/Updates';

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
       </div>
    );
};

export default Home;
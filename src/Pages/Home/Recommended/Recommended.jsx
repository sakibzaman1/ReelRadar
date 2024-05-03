import React, { useEffect, useState } from 'react';
import RecList from './RecList';

const Recommended = () => {
    const [recommended, setRecommended] = useState();

    useEffect(()=> {
        fetch(`https://reel-radar-server.vercel.app/towatch`)
        .then(res=> res.json())
        .then(data=> setRecommended(data))
    },[]);

    console.log(recommended)

        // Function to get 6 random items from the array
        const getRandomItems = (array, count) => {
            const shuffled = array.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        };
            // Render random 6 items
    const renderRandomItems = () => {
        const randomItems = getRandomItems(recommended, 4);
        return randomItems.map(item => (
            <div key={item?._id}>
                {/* Render each item here */}
                <RecList item={item}></RecList>
            </div>
        ));
    };

    return (
        <div className='lg:flex lg:h-60 justify-center items-center'>
           
            <div>
            </div>
            {/* Render random 6 items */}
            {recommended && renderRandomItems()}
        </div>

    );
};

export default Recommended;
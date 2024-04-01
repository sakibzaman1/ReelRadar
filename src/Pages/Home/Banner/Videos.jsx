import React from 'react';
import YoutubeSlider from './YoutubeSlider';

const videos = [
    { url: 'https://youtu.be/qqrpMRDuPfc?si=S6T1jt-ewfGhaTMa' },
    { url: 'https://youtu.be/uJMCNJP2ipI?si=a9y0l3IjLWg69HVI' },
    { url: 'https://youtu.be/LHYR5HGPXxU?si=Oi5Jnakc7JwGpiLA' },
    // Add more videos as needed
  ];

const Videos = () => {
    return (
        <div className=''>
      
      <YoutubeSlider videos={videos} />
    </div>
    );
};

export default Videos;
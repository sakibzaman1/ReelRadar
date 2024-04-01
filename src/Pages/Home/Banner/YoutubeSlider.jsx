import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './container.css'



const YoutubeSlider = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 20000); // Change the interval duration as needed (in milliseconds)
      return () => clearInterval(interval);
    }, [videos.length]);
  
    return (
      <div className="youtube-carousel">
        {videos.map((video, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <div className="video-container">
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              playing={index === currentIndex}
              controls
              loop
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                  },
                },
              }}
            />
          </div>
          </div>
        ))}
      </div>
    );
  };
  

export default YoutubeSlider;
import React from "react";
import YouTubePlayer from "react-player/youtube";
import YoutubeSlider from "./YoutubeSlider";
import Videos from "./Videos";
import Featured from "./Featured/Featured";

const Banner = () => {
  return (
    <div className="flex mt-10">
      <section className="w-[60%] ">
        <div className="border-l-8 border-sky-400">
        <Videos></Videos>
        </div>
        <div>
            <h1 className="text-3xl my-6">Featured Today</h1>
            <Featured></Featured>
        </div>
      </section>
      <section className="w-[40%]">
        <h1 className="text-4xl text-center">Upcoming</h1>
      </section>
    </div>
  );
};

export default Banner;

import React from "react";
import YouTubePlayer from "react-player/youtube";
import YoutubeSlider from "./YoutubeSlider";
import Videos from "./Videos";
import Featured from "./Featured/Featured";
import Upcoming from "./Upcoming/Upcoming";
import { IoPlayForward } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="lg:flex mt-10 lg:h-[700px]">
      <section className="lg:w-[60%] w-[100%] ">
        <div className="">
        <Videos></Videos>
        </div>
        <div>
            <h1 className="text-4xl my-10 border-l-8 border-sky-600 px-4">Featured Today</h1>
            <Featured></Featured>
        </div>
      </section>
      <section className="lg:w-[40%] h-full">
        <div className="flex items-center mb-6 gap-4 mx-auto justify-center  mt-12 lg:mt-0">
        <h1 className="text-4xl text-center">Upcoming </h1>
        <IoPlayForward size={40}></IoPlayForward>
        </div>
        <Upcoming></Upcoming>
      </section>
    </div>
  );
};

export default Banner;

import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex">
      <div className="card rounded-none lg:w-[20%] flex flex-col card-side bg-base-100 shadow-xl">
        <figure className="">
          <img className="w-40 mt-10" src={user?.photoURL} alt="Movie" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl mt-4">{user?.displayName}</h2>
          <p>{user?.email}</p>
          <div className="card-actions justify-end"></div>
        </div>
        <div className="">
    <label htmlFor="" aria-label="" className=""></label>
    <ul className="menu p-4  text-base-content">
      {/* Sidebar content here */}
      <li><Link>Homepage</ Link></li>
      <li><Link>Watchlist</ Link></li>
      <li><Link>Favorites</ Link></li>
        <li><Link>Movies</Link></li>
        <li><Link>Series</    Link></li>
        <li><Link>TV Shows</    Link></li>
        <li><Link>Hollywood</    Link></li>
        <li><Link>Bollywood</    Link></li>
        <li><Link>IMDB top Rated</    Link></li>
        <li><Link>Oscar Winning</    Link></li>
        <li><Link>Bengali</    Link></li>
      
    </ul>
  </div>
      </div>
      <div className="w-[80%] flex justify-center text-center mx-auto items-center">
        <button className="btn btn-primary rounded-none ">WATCH NOW</button>
      </div>
    </div>
  );
};

export default UserProfile;

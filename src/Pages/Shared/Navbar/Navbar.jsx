import React from 'react';
import { Link } from 'react-router-dom';
import sloganLogo from '../../../assets/Reel_Radar_slogan-nobg.png'
import './navbar.css'
import { BiSolidCameraMovie } from "react-icons/bi";
import defaultProfile from '../../../assets/default-profile.jpg'

const Navbar = () => {
    const navOptions = <>
     <ul className='flex items-center justify-center gap-8 mr-4'>
       <Link> <li className='navLinks'>Watchlist</li></Link>
       <Link> <li className='navLinks'>Subscribe</li></Link>
       <Link> <li className='navLinks'>Sign in</li></Link>
    </ul>
    </>
    return (
        <div>
            <div className="navbar bg-base-300 p-0">
  <div className="navbar-start">
    <div>
        <img className='w-20 h-20' src="https://i.ibb.co/dP6N7N4/Reel-Radar-Logo.png" alt="" />
    </div>
    <div className="dropdown">
      <div className='flex items-center justify-center mr-4'>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <h1>MENU</h1>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div className="form-control">
    <div className='flex justify-center items-center'>
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto lg:w-48" />
      <button className="btn btn-ghost btn-circle -ml-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-3xl font-bold text-sky-300 font-mono">Your Reel Insights</a>
    <div>
        <BiSolidCameraMovie size={30}></BiSolidCameraMovie>
    </div>
  </div>
  <div className='navbar-end'>
   {navOptions}
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full border-2">
          <img alt="Tailwind CSS Navbar component" src={defaultProfile} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;
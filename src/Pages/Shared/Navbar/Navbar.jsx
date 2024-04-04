import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import sloganLogo from '../../../assets/Reel_Radar_slogan-nobg.png'
import './navbar.css'
import { BiSolidCameraMovie } from "react-icons/bi";
import defaultProfile from '../../../assets/default-profile.jpg'
import { FaAnglesRight } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext);

    // Sign Out Button

    const handleSignOut = () => {
      signOutUser()
          .then(() => {
            console.log('User Signed Out')
          })
          .catch(error => console.log(error.message))
  }
  

  const menuOptions = <>
  
  <div className="drawer mr-10 z-10">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="  drawer-button"><div>
    <div className='flex justify-center items-center gap-2'>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <h1>MENU</h1>
    </div>
      </div></label>
  </div> 
  <div className="drawer-side mt-20">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link>Homepage</ Link></li>
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
  
  </>

    const navOptions = <>
     <ul className='items-center justify-center gap-8 mr-4 hidden lg:flex'>
     <Link> <li className=' '>  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> </li></Link>
     <Link> <li className='navLinks '>Watchlist</li></Link>
       <Link> <li className='navLinks'>Subscribe</li></Link>
       <Link to='/signin'> <li className='navLinks '>Sign in</li></Link>
    </ul>
    </>
    const mobileNavOptions = <>
    <div className="drawer drawer-end lg:hidden">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button  flex justify-center items-center"><div className='flex items-center justify-center gap-2'><h2>Explore More</h2> <FaAnglesRight></FaAnglesRight></div> </label>
    
  </div> 
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-[200px] z-10 mt-20 bg-base-200 text-base-content gap-6">
      {/* Sidebar content here */}
      <Link> <li className='navLinks '>ReelRadar Pro</li></Link>
      <Link> <li className='navLinks '>Watchlist</li></Link>
       <Link> <li className='navLinks'>Subscribe</li></Link>
       <Link to='/signin'> <li className='navLinks '>Sign in</li></Link>
    </ul>
  </div>
</div>
    </>
    return (
        <div>
            <div className="navbar bg-slate-300 text-white bg-opacity-25  p-0">
  <div className="navbar-start">
    <div>
        <img className='w-28 h-20' src="https://i.ibb.co/dP6N7N4/Reel-Radar-Logo.png" alt="" />
    </div>
    <div className="">
    {menuOptions}
    </div>
    <div className="form-control">
    <div className='hidden lg:flex justify-center items-center'>
    <input type="text" placeholder="Search" className="input bg-transparent input-bordered w-24 md:w-auto lg:w-48 h-10 rounded-lg" />
      <button className="btn btn-ghost btn-circle -ml-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <a className="btn btn-ghost text-3xl font-bold text-sky-300 font-unbounded ">Your Reel Insights</a>
    <div>
        <BiSolidCameraMovie size={30}></BiSolidCameraMovie>
    </div>
  </div>
  <div className='navbar-end mr-6'>
   {navOptions}
   {mobileNavOptions}
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full border-2">
          <img alt="Tailwind CSS Navbar component" src={user? user.photoURL : defaultProfile} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to='/userProfile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={handleSignOut}>Sign out</button></li>
      </ul>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;
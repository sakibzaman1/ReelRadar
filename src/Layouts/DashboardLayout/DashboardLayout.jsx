import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.email?.toLowerCase() === "sakibzaman54@gmail.com";
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section>
        {isAdmin ? (
          <div className=" lg:flex">
            <div className="card rounded-none lg:w-[20%] flex flex-col card-side bg-base-100 shadow-xl">
              <figure className="rounded-full">
                <img className="w-40 mt-10 rounded-full" src={user?.photoURL} alt="Movie" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl mt-4">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <div className="card-actions justify-end"></div>
              </div>
              <div className="">
                <label htmlFor="" aria-label="" className=""></label>
                <ul className="menu p-4  text-base-content ">
                  {/* Sidebar content here */}
                  <li>
                    <NavLink to='/dashboard/adminProfile'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/manageUsers'>Manage Users</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/addFilms'>Add Films</NavLink>
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div className="w-[80%] flex justify-center text-center mx-auto items-center">
             <Outlet></Outlet>
            </div>
          </div>
        ) : (
          <div className=" lg:flex">
            <div className="card rounded-none lg:w-[20%] flex flex-col card-side bg-base-100 shadow-xl">
              <figure className="">
                <img className="w-40 mt-10 rounded-full" src={user?.photoURL} alt="Movie" />
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
                  <li>
                    <NavLink to='/dashboard/userProfile'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/watchlist'>Watchlist</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/streamNow'>Stream Now</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/favorites'>Favorites</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/payment'>Payment</NavLink>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="w-[80%] flex mx-auto   text-center mt-16 ">
              <Outlet></Outlet>
            </div>
          </div>
        )}
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default DashboardLayout;

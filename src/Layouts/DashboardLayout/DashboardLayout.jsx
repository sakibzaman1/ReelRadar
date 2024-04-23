import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.email?.toLowerCase() === "sakibzaman20@gmail.com";
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section>
        {isAdmin ? (
          <div className=" flex">
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
                    <NavLink to='/dashboard/adminProfile'>Profile</NavLink>
                  </li>
                  <li>
                    <NavLink>Manage Users</NavLink>
                  </li>
                  <li>
                    <NavLink>Add Films</NavLink>
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div className="w-[80%] flex justify-center text-center mx-auto items-center">
             <Outlet></Outlet>
            </div>
          </div>
        ) : (
          <div className=" flex">
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
                    <NavLink to='/dashboard/userProfile'>Profile</NavLink>
                  </li>
                  <li>
                    <NavLink>Homepage</NavLink>
                  </li>
                  <li>
                    <NavLink>Watchlist</NavLink>
                  </li>
                  <li>
                    <NavLink>Favorites</NavLink>
                  </li>
                  <li>
                    <NavLink>Movies</NavLink>
                  </li>
                  <li>
                    <NavLink>Series</NavLink>
                  </li>
                  <li>
                    <NavLink>TV Shows</NavLink>
                  </li>
                  <li>
                    <NavLink>Hollywood</NavLink>
                  </li>
                  <li>
                    <NavLink>Bollywood</NavLink>
                  </li>
                  <li>
                    <NavLink>IMDB top Rated</NavLink>
                  </li>
                  <li>
                    <NavLink>Oscar Winning</NavLink>
                  </li>
                  <li>
                    <NavLink>Bengali</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[80%] flex justify-center text-center mx-auto items-center">
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

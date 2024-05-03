import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import UserProfile from '../Dashboard/Profile/User/UserProfile';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import FilmDetails from '../Pages/FilmDetails/FilmDetails';
import Watchlist from '../Pages/Watchlist/Watchlist';
import AdminProfile from '../Dashboard/Profile/Admin/AdminProfile';
import Dashboard from '../Dashboard/Profile/Dashboard';
import Payment from '../Dashboard/Profile/User/Payment';
import ManageUsers from '../Dashboard/Profile/Admin/ManageUsers';
import AddFilms from '../Dashboard/Profile/Admin/AddFilms';
import UserWatchList from '../Dashboard/Profile/User/UserWatchList';
import StreamNow from '../Dashboard/Profile/User/StreamNow';
import Favorites from '../Dashboard/Profile/User/Favorites';
import Movies from '../Pages/Shared/Navbar/Menu/Movies/Movies';
import Series from '../Pages/Shared/Navbar/Menu/Series/Series';
import TvShows from '../Pages/Shared/Navbar/Menu/TvShows/TvShows';
import Hollywood from '../Pages/Shared/Navbar/Menu/Hollywood/Hollywood';
import Bollywood from '../Pages/Shared/Navbar/Menu/Bollywood/Bollywood';
import IMDBtop from '../Pages/Shared/Navbar/Menu/IMDBtop/IMDBtop';
import Oscar from '../Pages/Shared/Navbar/Menu/Oscar/Oscar';
import Bengali from '../Pages/Shared/Navbar/Menu/Bengali/Bengali';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/watchlist/:email',
          element: <PrivateRoute><Watchlist></Watchlist></PrivateRoute>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/watchlist`)
        },
        {
          path: '/filmDetails/:id',
          element: <FilmDetails></FilmDetails>,
          loader: ({params})=> fetch(`https://reel-radar-server.vercel.app/towatch/${params.id}`)
        },
        {
          path: '/movies',
          element: <Movies></Movies>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/series',
          element: <Series></Series>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/tvshows',
          element: <TvShows></TvShows>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/hollywood',
          element: <Hollywood></Hollywood>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/bollywood',
          element: <Bollywood></Bollywood>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/imdbtop',
          element: <IMDBtop></IMDBtop>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/oscar',
          element: <Oscar></Oscar>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
        {
          path: '/bengali',
          element: <Bengali></Bengali>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/towatch`)
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '', // Empty path for the default route
          element: <Navigate to="userProfile" />
        },
        {
          path: 'userProfile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: 'watchlist',
          element: <UserWatchList></UserWatchList>,
          loader: ()=> fetch(`https://reel-radar-server.vercel.app/watchlist`)
        },
        {
          path: 'streamNow',
          element: <StreamNow></StreamNow>
        },
        {
          path: 'favorites',
          element: <Favorites></Favorites>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'addFilms',
          element: <AddFilms></AddFilms>
        },

      ]
    }
   
    // {
    //   path: 'dashboard',
    //   element: <DashboardLayout></DashboardLayout>,
    //   children: [
    //     {
    //       path: 'userProfile',
    //       element: <UserProfile></UserProfile>
    //     }
    //   ]
    // }
  ]);

export default router;
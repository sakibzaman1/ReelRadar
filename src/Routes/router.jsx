import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
          loader: ()=> fetch(`http://localhost:5000/watchlist`)
        },
        {
          path: '/filmDetails/:id',
          element: <FilmDetails></FilmDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/towatch/${params.id}`)
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: 'userProfile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        }
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
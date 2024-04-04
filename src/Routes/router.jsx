import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import UserProfile from '../Dashboard/Profile/User/UserProfile';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
          path: '/userProfile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        }
      ]
    },
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
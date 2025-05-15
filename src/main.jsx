import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider.jsx'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-[1600px] mx-auto p-0 font-josefinSans text-white' style={{backgroundImage: 'url("https://i.ibb.co/WKH3bCM/blackBg.jpg")'}}>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
    </div>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

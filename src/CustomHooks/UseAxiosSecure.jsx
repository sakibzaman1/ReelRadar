import axios from 'axios';
import React from 'react';

const UseAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL : 'https://reel-radar-server.vercel.app'
    })
    return axiosSecure;
};

export default UseAxiosSecure;
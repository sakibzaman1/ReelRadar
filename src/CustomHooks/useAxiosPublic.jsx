import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: `https://reel-radar-server.vercel.app`
})


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseWatchlist = () => {
    const {user} = useContext(AuthContext);

    const axiosSecure = UseAxiosSecure();

    const {refetch, data: watchList= []} = useQuery({
        queryKey: ['watchlist', user?.email],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/watchlist?email=${user.email}`);
            return res.data;
        }
    })

    return [watchList, refetch];
};

export default UseWatchlist;
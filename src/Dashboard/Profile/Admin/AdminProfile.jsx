import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const AdminProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="admin-home-page lg:p-20">
       
        <div className="overview">
          
          <p>
            Welcome, <span className='text-2xl'>{user?.displayName}</span>, to the Admin Dashboard of <span className='text-sky-500 text-5xl font-bold'>Reel Radar</span>. This dashboard provides you with a centralized hub to manage various aspects of the website efficiently.
          </p>
        </div>
      </div>
    );
};

export default AdminProfile;
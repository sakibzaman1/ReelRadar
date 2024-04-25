import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import UseAxiosSecure from '../../../CustomHooks/UseAxiosSecure';
import UseWatchlist from '../../../CustomHooks/UseWatchlist';
import swal from 'sweetalert';
import { GiCancel } from 'react-icons/gi';
import { BiUser } from 'react-icons/bi';
import { MdAdminPanelSettings } from 'react-icons/md';

const UserWatchList = () => {
    const {user} = useContext(AuthContext);
    const watchlist = useLoaderData();
    const myWatchList = watchlist.filter(myList=> myList?.email.toLowerCase() === user?.email.toLowerCase())
    const [watchList, refetch] = UseWatchlist();
    const axiosSecure = UseAxiosSecure();

    const handleDelete = _id => {
      swal({
          title: "Please Confirm!",
          text: "Are you sure to delete?",
          icon: "warning",
          dangerMode: true,
        })
        .then(isConfirmed => {
          if (isConfirmed) {
              axiosSecure.delete(`/watchlist/${_id}`)
              .then(res=> {
                  if(res.data.deletedCount > 0){
                      refetch();
                      swal('Removed Successfully')
                  }
              })
           console.log('deleted')
          } else{
            swal("Not deleted");
  
          }
        });
    }
    
    return (
        <div className='w-full lg:px-10'> 
       {
        myWatchList?.length > 0 ? 
        <div className="overflow-x-auto ">
             <div className="mx-auto">
        <h1 className="mx-auto text-xl mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60">
           Watchlist
        </h1>
      </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Year</th>
              <th>Ratings</th>
              
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {myWatchList?.map((watch, index) => (
              <tr key={watch?._id}>
                <th>{index + 1}</th>
                <td>{watch?.title}</td>
                <td>{watch?.year}</td>
                <td>{watch?.rating}</td>
                <td>
                  <button
                    onClick={() => handleDelete(watch?._id)}
                  >
                    <GiCancel size={20} color="red"></GiCancel>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> :
      <p>
        Nothing Added Yet
      </p>
       }
      </div>
    );
};

export default UserWatchList;
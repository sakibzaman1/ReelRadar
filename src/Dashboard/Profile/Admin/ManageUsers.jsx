import React from "react";
import UseAxiosSecure from "../../../CustomHooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings, MdOutlineEmojiPeople } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import swal from "sweetalert";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa6";
import { BiUser } from "react-icons/bi";

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleDelete = id => {
    console.log(id);
    swal({
        title: "Please Confirm!",
        text: "Are you sure to delete?",
        icon: "warning",
        dangerMode: true,
      })
      .then(isConfirmed => {
        if (isConfirmed) {
           axiosSecure.delete(`/users/${id}`)
           .then(res=> {
            if(res.data.deletedCount > 0){
                refetch();
                swal('User Removed')
            }
           })
         
        } else{
          swal("Not Removed");

        }
      });
}

  return (
    <div>
       <h1 className='mx-auto text-xl mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60'>Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.email}</td>
                <td>{user?.name}</td>
                <td>
                  {user?.email === "sakibzaman54@gmail.com" ? (
                    <span className="flex items-center gap-2">
                      <MdAdminPanelSettings color="green"></MdAdminPanelSettings>
                      <p className="text-green-800 font-bold">Admin</p>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <BiUser color="blue"></BiUser>
                      <p className="text-blue-800 font-bold">User</p>
                    </span>
                  )}
                </td>

              

                <td>
                  <button
                    disabled={user?.email === "sakibzaman54@gmail.com"}
                    onClick={() => handleDelete(user?._id)}
                  >
                    <GiCancel size={20} color="red"></GiCancel>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

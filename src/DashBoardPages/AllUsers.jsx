import React, { useContext } from 'react';
import Heading from '../Components/common/Heading';
import { MdAdminPanelSettings, MdDelete, MdGroups } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AllUsers = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(localStorage.getItem('access-token'))
            return res.data
        },
        onError: (error) => {
            console.error('Error fetching cart items:', error);
        },
    })

    if(isLoading){
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    } 

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",

            confirmButtonText: "Yes, Make admin"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/dashboard/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Done!",
                                text: `${user.name} is an admin now.`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    const deleteAlert = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",

            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }


    return (
        <div className='py-10'>
            <Heading
                heading={'Manage all users'}
                subHeading={'How Many?'}>
            </Heading>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>

                <div className='flex justify-between uppercase'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total users: {users.length}</h2>
                </div>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white text-lg uppercase font-medium'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                users?.map((user, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>

                                        <td>
                                            {
                                                user.role == 'admin' ?
                                                    <button className='p-2 text-white bg-[#D1A054] text-3xl rounded-md'>
                                                        < MdAdminPanelSettings  />
                                                    </button>
                                                    :
                                                    <button onClick={() => handleMakeAdmin(user)} className='p-2 text-white bg-[#D1A054] text-3xl rounded-md'><MdGroups /></button>
                                            }
                                        </td>

                                        <td><button onClick={() => deleteAlert(user._id)}><MdDelete className='text-red-600 text-2xl mx-5' /></button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllUsers;
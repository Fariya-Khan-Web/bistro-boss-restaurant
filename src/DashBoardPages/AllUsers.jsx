import React from 'react';
import Heading from '../Components/common/Heading';
import { MdDelete, MdGroups } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",

            confirmButtonText: "Yes, Make admin"
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

            <div className='max-w-screen-xl w-[94%] mx-auto bg-white p-12 my-12 rounded'>

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
                                        <td className=''><button onClick={handleMakeAdmin} className='p-2 text-white bg-[#D1A054] text-3xl rounded-md'><MdGroups /></button></td>
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
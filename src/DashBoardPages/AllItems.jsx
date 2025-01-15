import React from 'react';
import Heading from '../Components/common/Heading';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import Swal from 'sweetalert2';

const AllItems = () => {

    const axiosSecure = useAxiosSecure()

    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu')
            return res.data
        },
        onError: (error) => {
            console.error('Error fetching menu items:', error);
        },
    })


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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This item has been deleted.",
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
                heading={'Manage all items'}
                subHeading={'Hurry up'}>
            </Heading>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>

                <div className='flex justify-between uppercase'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total users: { }</h2>
                </div>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white text-lg uppercase font-medium'>
                            <tr>
                                <th></th>
                                <th>item image</th>
                                <th>item Name</th>
                                <th>price</th>
                                <th>action</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                menu?.map((item, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td><img className='rounded-lg w-20' src={item.image} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td><button className='bg-[#D1A054] p-1 rounded-lg w-10 text-white text-2xl' onClick={() => deleteAlert(item._id)}><CiEdit className='mx-auto' /></button></td>
                                        <td><button className='bg-red-600 p-1 rounded-lg w-10 text-white text-2xl' onClick={() => deleteAlert(item._id)}><MdDelete className='mx-auto' /></button></td>
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

export default AllItems;
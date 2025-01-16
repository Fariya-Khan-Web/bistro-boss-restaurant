import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { GiWallet } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';

const AdminHome = () => {

    const axiosSecure = useAxiosSecure()

    const {data: stats = [], isLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        },
        onError: (error) => {
            console.error('Error fetching stats:', error);
        },
    })

    return (
        <div className='p-10 min-h-screen my-16'>
                    <h2 className='text-3xl font-medium my-6'>Hi, Welcome Back!</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-4 text-white'>
                        <div className="p-6 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-md flex gap-2 justify-center items-center text-center">
                            <GiWallet className='text-5xl'/>
                            <div>
                                <h3 className='text-3xl font-medium'>{stats.totalRevenue}</h3>
                                <p className='text-xl'>Revenue</p>
                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-md flex gap-2 justify-center items-center text-center">
                            <FaUsers className='text-5xl'/>
                            <div>
                                <h3 className='text-3xl font-medium'>{stats.users}</h3>
                                <p className='text-xl'>Customers</p>
                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-md flex gap-2 items-center justify-center text-center">
                            <FaBowlFood className='text-5xl'/>
                            <div>
                                <h3 className='text-3xl font-medium'>{stats.menuItems}</h3>
                                <p className='text-xl'>Products</p>
                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-md flex gap-2 items-center justify-center text-center">
                            <TbTruckDelivery className='text-5xl'/>
                            <div>
                                <h3 className='text-3xl font-medium'>{stats.orders}</h3>
                                <p className='text-xl'>Orders</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2'>
                        <div className='text-center p-10 bg-[#FFEDD5]'>
                            {/* <img className='rounded-full mx-auto border-[#D1A054] w-52 h-52' src={user.photoURL} alt="loading user image..." />
                            <h3 className='text-3xl font-medium my-3'>{user.displayName}</h3> */}
                        </div>
                        <div className=' bg-[#FEF9C3]'>
                            <h2 className='text-4xl font-medium mb-5-'>Your Activities</h2>
                            {/* <div className='flex flex-col'>
                                <div className="text-xl text-blue-500"><MdShoppingCart />Orders:{}</div>
                                <div className="text-xl"><FaStar />Reviews:</div>
                                <div className="text-xl"><BiSolidCalendar />Bookings:</div>
                                <div className="text-xl"><IoWallet />Payments:</div>
                            </div> */}
                        </div>
        
                    </div>
                </div>
    );
};

export default AdminHome;
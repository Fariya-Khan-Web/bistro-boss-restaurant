import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { MdShoppingCart } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { BiSolidCalendar } from 'react-icons/bi';
import { IoWallet } from 'react-icons/io5';

const UserHome = () => {

    const { user } = useContext(AuthContext)


    return (
        <div className='p-10 min-h-screen my-16'>
            <h2 className='text-3xl font-medium my-6'>Hi, Welcome Back!</h2>
            <div className='flex gap-8'>

            </div>
            <div className='grid grid-cols-2'>
                <div className='text-center p-10 bg-[#FFEDD5]'>
                    <img className='rounded-full mx-auto border-[#D1A054] w-52 h-52' src={user.photoURL} alt="loading user image..." />
                    <h3 className='text-3xl font-medium my-3'>{user.displayName}</h3>
                </div>
                <div className='text-center p-20 bg-[#FEF9C3]'>
                    <h2 className='text-4xl font-medium mb-5'>Your Activities</h2>
                    <div className='flex flex-col items-center space-y-2'>
                        <div className="text-xl text-[#0088FE] flex items-center"><MdShoppingCart />Orders:{}</div>
                        <div className="text-xl text-[#00C4A1] flex items-center"><FaStar />Reviews:</div>
                        <div className="text-xl text-[#FFBB28] flex items-center"><BiSolidCalendar />Bookings:</div>
                        <div className="text-xl text-[#FF8042] flex items-center"><IoWallet />Payments:</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserHome;
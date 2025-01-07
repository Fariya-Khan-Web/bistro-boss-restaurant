import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Components/common/Navbar';
import { IoMdHome } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { LuHistory } from 'react-icons/lu';
import { MdEditCalendar, MdOutlineEditCalendar, MdShoppingCart } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { GrMail } from 'react-icons/gr';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';

const Dashboard = () => {
    return (
        <div>
            {/* <div className=" min-h-screen text-white bg-[#D1A054]">
                <ul className='uppercase '>
                    <li><Navbar to='/dashboard'>User Home</Navbar></li>
                    <li><Navbar to='/dashboard'>Reservation</Navbar></li>
                    <li><Navbar to='/dashboard'>Payment history</Navbar></li>
                    <li><Navbar to='/dashboard/cart'>my cart</Navbar></li>
                    <li><Navbar to='/dashboard'>Add review</Navbar></li>
                    <li><Navbar to='/dashboard'>my booking</Navbar></li>
                </ul>
            </div>
            <Outlet/> */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F6F6F6]">
                    {/* Page content here */}
                    {/* sidewbar button */}
                    <label htmlFor="my-drawer-2" className=" drawer-button absolute left-5 top-3 lg:hidden">
                        <IoMenu className='text-2xl' />
                    </label>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#D1A054] text-black text-xl min-h-full w-80 p-4">
                        {/* Sidebar content here */}

                        <div className='uppercase mx-auto py-14'>
                            <h2 className="font-medium text-xl md:text-2xl">Bistro Boss</h2>
                            <div className='md:px-4'>restaurant</div>
                        </div>

                        <div>
                            <li><NavLink to='/dashboard/home' className={'py-3 my-1'}><IoMdHome className='text-2xl' />User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation' className={'py-3 my-1'}><FaCalendarAlt className='text-2xl' />Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/payHistory' className={'py-3 my-1'}><LuHistory className='text-2xl' />Payment history</NavLink></li>
                            <li><NavLink to='/dashboard/cart' className={'py-3 my-1'}><MdShoppingCart className='text-2xl' />my cart</NavLink></li>
                            <li><NavLink to='/dashboard/review' className={'py-3 my-1'}><VscFeedback className='text-2xl' />Add review</NavLink></li>
                            <li><NavLink to='/dashboard/booking' className={'py-3 my-1'}><MdOutlineEditCalendar className='text-2xl' />my booking</NavLink></li>
                        </div>

                        <hr className='my-10' />

                        <div className='uppercase'>
                            <li><Link to={'/'}><IoMdHome className='text-2xl' />Home</Link></li>
                            <li><Link to={'/'}><IoMenu className='text-2xl' />Menu</Link></li>
                            <li><Link to={'/'}><HiMiniShoppingBag className='text-2xl' />Shop</Link></li>
                            <li><Link to={'/'}><GrMail className='text-2xl' />Contact</Link></li>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
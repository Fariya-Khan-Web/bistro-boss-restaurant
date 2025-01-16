import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Components/common/Navbar';
import { IoMdHome } from 'react-icons/io';
import { FaBook, FaCalendarAlt, FaListUl } from 'react-icons/fa';
import { LuHistory } from 'react-icons/lu';
import { MdEditCalendar, MdGroups, MdOutlineEditCalendar, MdShoppingCart } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { GrMail } from 'react-icons/gr';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { ImSpoonKnife } from 'react-icons/im';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    // TODO- get isAdmin fron DB
    const [isAdmin] = useAdmin()
    console.log(isAdmin)

    return (
        <div>

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

                        {
                            isAdmin ?
                                <div className='uppercase'>
                                    <li><NavLink to='/dashboard/adminHome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />Admin Home</NavLink></li>
                                    <li><NavLink to='/dashboard/additem' className={'py-3 my-1'}><ImSpoonKnife className='text-2xl' />Add Items</NavLink></li>
                                    <li><NavLink to='/dashboard/manage' className={'py-3 my-1'}><FaListUl className='text-2xl' />Manage Items</NavLink></li>
                                    <li><NavLink to='/dashboard/manageBooking' className={'py-3 my-1'}><FaBook className='text-2xl' />Manage Bookings</NavLink></li>
                                    <li><NavLink to='/dashboard/allusers' className={'py-3 my-1'}><MdGroups className='text-2xl' />All Users</NavLink></li>
                                </div>
                                :
                                <div className='uppercase'>
                                    <li><NavLink to='/dashboard/userHome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservation' className={'py-3 my-1'}><FaCalendarAlt className='text-2xl' />Reservation</NavLink></li>
                                    <li><NavLink to='/dashboard/payHistory' className={'py-3 my-1'}><LuHistory className='text-2xl' />Payment history</NavLink></li>
                                    <li><NavLink to='/dashboard/cart' className={'py-3 my-1'}><MdShoppingCart className='text-2xl' />my cart</NavLink></li>
                                    <li><NavLink to='/dashboard/review' className={'py-3 my-1'}><VscFeedback className='text-2xl' />Add review</NavLink></li>
                                    <li><NavLink to='/dashboard/booking' className={'py-3 my-1'}><MdOutlineEditCalendar className='text-2xl' />my booking</NavLink></li>
                                </div>

                        }

                        <hr className='my-10' />

                        {/* shared routes */}
                        <div className='uppercase'>
                            <li><Link to={'/'}><IoMdHome className='text-2xl' />Home</Link></li>
                            <li><Link to={'/'}><IoMenu className='text-2xl' />Menu</Link></li>
                            <li><Link to={'/ourshop'}><HiMiniShoppingBag className='text-2xl' />Shop</Link></li>
                            <li><Link to={'/contact'}><GrMail className='text-2xl' />Contact</Link></li>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
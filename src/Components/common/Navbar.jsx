import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import cart from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignout = () => {
        logOut()
            .then(res => { })
            .catch(err => {
                console.log(err)
                toast.error('Failed to sign out. try again')
            })
    }

    const links =
        <div className='lg:flex items-center lg:mx-2'>
            <li><Link to={'/'} className='text-[#EEFF25]'>HOME</Link></li>
            <li><Link to={'/contact'}>CONTACT US</Link></li>
            <li><Link>DASHBOARD</Link></li>
            <li><Link to={'/ourmenu'}>OUR MENU</Link></li>
            <li><Link to={'/ourshop'}>OUR SHOP</Link></li>
            <li><img className='w-12 h-8 p-0' src={cart} alt="" /></li>
            
        </div>

    return (

        <div className="navbar lg:px-16 fixed z-20 text-white bg-black bg-opacity-35">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 -mx-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='uppercase'>
                    <h2 className="font-medium text-xl md:text-2xl">Bistro Boss</h2>
                    <div className='md:px-4'>restaurant</div>
                </div>
            </div>
            {/* <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div> */}
            <div className="lg:navbar-center navbar-end flex lg:justify-center">
                <div className="hidden lg:flex ">
                    <ul className="menu menu-horizontal pr-36">
                        {links}
                    </ul>
                </div>

                {
                    user ?
                        <div className='flex items-center lg:mr-28'>
                            <button onClick={handleSignout}>SIGNOUT</button>
                            <div className="dropdown dropdown-end ml-2">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content max-w-fit bg-black bg-opacity-35 text-lg rounded-box z-[1] mt-3 w-52 px-3 shadow">
                                    {user.displayName}
                                </div>
                            </div>
                        </div>
                        :
                        <Link to={'/auth'} className="mx-2">SIGNIN</Link>
                }


            </div>
        </div>

    );
};

export default Navbar;
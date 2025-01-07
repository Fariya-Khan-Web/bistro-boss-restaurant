import React from 'react';
import { Outlet } from 'react-router-dom';
import authbg from '../assets/others/authentication.png'

const Auth = () => {
    return (
        <div className='md:p-20  lg:h-screen flex justify-center' style={{background: `url("${authbg}")`}}>
            <Outlet/>
        </div>
    );
};

export default Auth;
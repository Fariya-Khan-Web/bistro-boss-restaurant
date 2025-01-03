import React from 'react';
import { Outlet } from 'react-router-dom';
import authbg from '../assets/others/authentication.png'

const Auth = () => {
    return (
        <div className='p-40 min-h-screen' style={{background: `url("${authbg}")`}}>
            <Outlet/>
        </div>
    );
};

export default Auth;
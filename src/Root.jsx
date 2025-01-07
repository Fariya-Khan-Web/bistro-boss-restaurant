import React from 'react';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {

  const location = useLocation()
  const noNav = location.pathname.includes('/dashboard')

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;
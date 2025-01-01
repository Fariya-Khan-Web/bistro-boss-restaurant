import React from 'react';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;
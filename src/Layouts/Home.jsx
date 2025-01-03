import React from 'react';
import Banner from '../Components/HomeComp/Banner';
import CategorySlide from '../Components/HomeComp/CategorySlide';
import PopulerMenu from '../Components/HomeComp/PopulerMenu';
import Featured from '../Components/HomeComp/Featured';
import Testimonials from '../Components/HomeComp/Testimonials';
import SmBanner from '../Components/HomeComp/SmBanner';


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <SmBanner/> */}
            <CategorySlide/>
            <PopulerMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;
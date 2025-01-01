import React from 'react';
import Banner from '../Components/HomeComp/Banner';
import CategorySlide from '../Components/HomeComp/CategorySlide';
import PopulerMenu from '../Components/HomeComp/PopulerMenu';


const Home = () => {
    return (
        <div>
            <Banner/>
            <CategorySlide/>
            <PopulerMenu/>
        </div>
    );
};

export default Home;
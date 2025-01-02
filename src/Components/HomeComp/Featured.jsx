import React from 'react';
import Heading from '../common/Heading';
import featured from '../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed'>
            <div className='py-16 bg-black/35'>
                <Heading
                    heading={'FROM OUR MENU'}
                    subHeading={'---Check it out---'}
                ></Heading>
                <div className='max-w-screen-xl mx-auto md:grid grid-cols-2 gap-10 py-14'>
                    <img src={featured} alt="" />
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
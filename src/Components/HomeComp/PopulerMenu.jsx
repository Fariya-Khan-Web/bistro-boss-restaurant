import React, { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import MenuItem from '../common/MenuItem';
import useData from '../../Hooks/useData';

const PopulerMenu = () => {

    const [items] = useData()
    const populer = items.filter(item => item.category === 'popular')

    return (
        <div className='max-w-screen-xl mx-auto'>
            <Heading
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></Heading>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    populer.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default PopulerMenu;
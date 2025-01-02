import React, { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import MenuItem from '../common/MenuItem';

const PopulerMenu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populer = data.filter(item => item.category === 'popular')
                setItems(populer)
            })
    }, [])

    console.log(items)
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Heading
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></Heading>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default PopulerMenu;
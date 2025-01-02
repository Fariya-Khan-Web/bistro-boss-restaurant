import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CategoryCover from '../Components/MenuComps/CategoryCover';
import PageCover from '../Components/common/PageCover';
import pageCoverImg from '../assets/menu/banner3.jpg'
import Heading from '../Components/common/Heading';
import MenuItem from '../Components/common/MenuItem';

import dessertCover from '../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../assets/menu/pizza-bg.jpg'
import saladCover from '../assets/menu/salad-bg.jpg'
import soupCover from '../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const offers = items.filter(item => item.category === "offered")
    const desserts = items.filter(item => item.category === "dessert")
    const pizzas =  items.filter(item => item.category === "pizza")
    const salads =  items.filter(item => item.category === "salad")
    const soups =  items.filter(item => item.category === "soup")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageCover bgimage={pageCoverImg} title={'Our menu'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />


            {/* todays offer  */}
            <div className='my-20'>
                <Heading
                    heading={'todays offer'}
                    subHeading={"---Don't miss---"}
                ></Heading>
                <div className='grid md:grid-cols-2 gap-10 my-10 max-w-screen-xl mx-auto'>
                    {
                        offers.map(item => <MenuItem key={item._id} item={item} />)
                    }
                </div>
            </div>


            {/* DESSERT */}
            <div>
                <CategoryCover img={dessertCover} category={"dessert"} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />
                <div className='grid md:grid-cols-2 gap-10 my-20 max-w-screen-xl mx-auto'>
                    {
                        desserts.map(item => <MenuItem key={item._id} item={item} />)
                    }
                </div>
            </div>


            {/* Pizza */}
            <div>
                <CategoryCover img={pizzaCover} category={"pizza"} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />
                <div className='grid md:grid-cols-2 gap-10 my-20 max-w-screen-xl mx-auto'>
                    {
                        pizzas.map(item => <MenuItem key={item._id} item={item} />)
                    }
                </div>
            </div>


            {/* salad */}
            <div>
                <CategoryCover img={saladCover} category={"salad"} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />
                <div className='grid md:grid-cols-2 gap-10 my-20 max-w-screen-xl mx-auto'>
                    {
                        salads.map(item => <MenuItem key={item._id} item={item} />)
                    }
                </div>
            </div>


            {/* soup */}
            <div>
                <CategoryCover img={soupCover} category={"soup"} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />
                <div className='grid md:grid-cols-2 gap-10 my-20 max-w-screen-xl mx-auto'>
                    {
                        soups.map(item => <MenuItem key={item._id} item={item} />)
                    }
                </div>
            </div>




        </div>
    );
};

export default Menu;
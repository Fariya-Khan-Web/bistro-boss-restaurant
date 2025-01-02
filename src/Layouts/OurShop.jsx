import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageCover from '../Components/common/PageCover';
import pageCover from '../assets/shop/banner2.jpg';
import FoodCard from '../Components/common/FoodCard';
import OrderTab from '../Components/common/OrderTab';
import useData from '../Hooks/useData';

const OurShop = () => {


    const [items] = useData()

    const desserts = items.filter(item => item.category === "dessert")
    const pizzas = items.filter(item => item.category === "pizza")
    const salads = items.filter(item => item.category === "salad")
    const soups = items.filter(item => item.category === "soup")
    const drinks = items.filter(item => item.category === "drinks")
    console.log(salads)

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <PageCover bgimage={pageCover} title={'Our shop'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />

            <Tabs className='max-w-screen-lg mx-auto my-24'>
                <TabList className='uppercase'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                {/* salad tab */}
                <TabPanel>
                    <OrderTab category={salads} />
                </TabPanel>

                {/* pizza tab */}
                <TabPanel>
                    <OrderTab category={pizzas} />
                </TabPanel>


                {/* soup tab */}
                <TabPanel>
                    <OrderTab category={soups} />
                </TabPanel>


                {/* dessert tab */}
                <TabPanel>
                    <OrderTab category={desserts} />
                </TabPanel>


                {/* drinks tab */}
                <TabPanel>
                    <OrderTab category={drinks} />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default OurShop;
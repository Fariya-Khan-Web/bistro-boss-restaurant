import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({category}) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                category.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTab;
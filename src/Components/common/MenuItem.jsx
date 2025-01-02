import React from 'react';

const MenuItem = ({ item }) => {

    return (
        <div className='flex gap-5'>
            <img className='w-24 rounded-full rounded-tl-none' src={item.image} alt="" />
            <div className=''>
                <div className='flex justify-between text-xl'>
                    <h5 className='uppercase'>{item.name}-------------</h5>
                    <h5 className='text-[#BB8506]'>{item.price}</h5>
                </div>
                <p className=''>{item.recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;
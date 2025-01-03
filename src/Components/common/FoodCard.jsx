import React from 'react';

const FoodCard = ({item}) => {

    const { _id, name, recipe, image, category, price } = item

    return (
        <div className="card rounded-none bg-[#F3F3F3]">
            <figure className='relative'>
                <img className='w-full'
                    src={image}
                    alt="food item" />
                    <div className='bg-[#111827] text-white absolute right-2 top-2 p-2 font-medium'>${price}</div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions mx-auto">
                    <button className="btn uppercase">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;
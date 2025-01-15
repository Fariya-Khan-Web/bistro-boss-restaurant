import React from 'react';
import Heading from '../Components/common/Heading';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';

const AddItems = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div className='py-10 bg-white'>
            <Heading
                heading={'Add an item'}
                subHeading={"What's new?"}>
            </Heading>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-[#F3F3F3] my-12 rounded'>


                <form className="card-body grid grid-cols-2 " onSubmit={handleSubmit((data) => console.log(data))}>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} defaultValue={'default'} className="p-3 rounded-lg border-2 border-gray-300">
                            <option disabled value="default">Select a category</option>
                            <option value="Salad">Salad</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Soup">Soup</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register('price', { required: true })} placeholder="Price" className="input input-bordered" />
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe details*</span>
                        </label>
                        <textarea type="text" {...register('recipe', { required: true })} placeholder="recipe details" className="textarea textarea-bordered h-20" />
                    </div>

                    <div >
                        <div>
                            <input type="file" {...register('image', { required: true })} className='file-input my-3 max-w-sm' />
                        </div>
                    </div>
                    <br />

                    <div className="form-control w-36">
                        <button className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">Add Item <FaUtensils className=' text-lg' /></button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddItems;
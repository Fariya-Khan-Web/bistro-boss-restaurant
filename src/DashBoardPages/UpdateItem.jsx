import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Heading from '../Components/common/Heading';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const UpdateItem = () => {

    const { id } = useParams()
    console.log(id)

    const data = useLoaderData()
    console.log(data)

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate()


    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const onSubmit = async (values) => {
        console.log(values)

            const menuItem = {
                name: values.name,
                category: values.category,
                price: parseFloat(values.price),
                recipe: values.recipe
            }

            const menuRes = await axiosSecure.put(`/menu/${id}`, menuItem)
            console.log(menuRes.data)
            if (menuRes.data.acknowledged) {
                toast.success('Updated successfully')
            }

            reset()
            navigate(-1)

    };

    return (
        <div className='py-10 bg-white'>
            <Heading
                heading={'Update item Pending'}
                subHeading={"Change details"}>
            </Heading>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-[#F3F3F3] my-12 rounded'>


                <form className="card-body grid grid-cols-2 " onSubmit={handleSubmit(onSubmit)}>


                    {/* name */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input defaultValue={data?.name} type="text" {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered" />
                    </div>


                    {/* category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} defaultValue={data?.category} className="p-3 rounded-lg border-2 border-gray-300">
                            <option value="Salad">Salad</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Soup">Soup</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input defaultValue={data?.price} type="number" {...register('price', { required: true })} placeholder="Price" className="input input-bordered" />
                    </div>


                    {/* recipe */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe details*</span>
                        </label>
                        <textarea defaultValue={data?.recipe} type="text" {...register('recipe', { required: true })} placeholder="recipe details" className="textarea textarea-bordered h-20" />
                    </div>

                    <div className="form-control mt-4 col-span-2">
                        <button className="btn w-56 mx-auto text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">Update Item <FaUtensils className=' text-lg' /></button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default UpdateItem;
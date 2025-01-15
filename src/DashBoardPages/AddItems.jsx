import React from 'react';
import Heading from '../Components/common/Heading';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
console.log(image_hosting_key)
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data.image[0])
        console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)

        if (res.data.success) {
            
            // save the data in mongodb
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url                
            }

            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                toast.success('New item added to the menu')
                reset()
            }
        }
    };

    return (
        <div className='py-10 bg-white'>
            <Heading
                heading={'Add an item'}
                subHeading={"What's new?"}>
            </Heading>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-[#F3F3F3] my-12 rounded'>


                <form className="card-body grid grid-cols-2 " onSubmit={handleSubmit(onSubmit)}>

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
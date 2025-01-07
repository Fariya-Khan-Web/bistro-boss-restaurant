import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCartData from '../../Hooks/useCartData';


const FoodCard = ({ item }) => {

    const { _id, name, recipe, image, category, price } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, ,refetch] = useCartData()

    const handleAdd = item => {
        if (user) {
            const cartItem = {
                item_id: _id,
                name,
                image,
                price,
                email: user.email
            }

            axiosSecure.post('http://localhost:2000/cartitems', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.acknowledged) {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-start",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Added to your cart"
                        });
                        refetch()
                    }
                })


        }
        else {
            Swal.fire({
                title: "Login first",
                text: "you have to login to add any item to your cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#D1A054",

                confirmButtonText: "login page >"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/auth', { state: location })
                }
            });
        }
    }

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
                    <button onClick={() => handleAdd(item)} className="btn uppercase">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;
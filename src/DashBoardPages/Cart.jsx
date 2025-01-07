import React from 'react';
import Heading from '../Components/common/Heading';
import useCartData from '../Hooks/useCartData';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const Cart = () => {

    const [cartItems] = useCartData()
    console.log(cartItems)

    // gives error in reload, says cartItems is not an array
    const totalPrice = cartItems?.reduce((total, item) => total + item.price , 0)

    const deleteAlert = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",

            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const handleDelete = (id) => {
        
        

    }

    return (
        <div className='py-10'>
            <Heading
                heading={'Wanna add more?'}
                subHeading={'My Cart'}>
            </Heading>

            <div className='max-w-screen-xl w-[94%] mx-auto bg-white p-12 my-12 rounded'>

                <div className='flex justify-between uppercase'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total orders: {cartItems.length}</h2>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total price: ${totalPrice}</h2>
                    <button className='bg-[#D1A054] text-xl text-white p-1 px-4 rounded-md'>PAY</button>
                </div>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white text-lg uppercase font-medium'>
                            <tr>
                                <th></th>
                                <th>Job</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                cartItems.map((item, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td><img className='w-20 rounded-md' src={item.image} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td><button  onClick={() => deleteAlert(item._id)}><MdDelete className='text-red-600 text-2xl mx-5' /></button></td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default Cart;
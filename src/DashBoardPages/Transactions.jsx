import React, { useContext } from 'react';
import Heading from '../Components/common/Heading';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const Transactions = () => {
    
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data: transactions = [], isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        },
        onError: (error) => {
            console.error('Error fetching cart items:', error);
        },
    })

    console.log(transactions)

    return (
        <div className='py-10'>
        <Heading
            heading={'Payment History'}
            subHeading={'At a Glance?'}>
        </Heading>

        <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>

     

            <div className="overflow-x-auto rounded-xl my-8">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white text-lg uppercase font-medium'>
                        <tr>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        {
                            transactions?.map(transaction =>
                                <tr>
                                    <th>{transaction.email}</th>
                                    <td>{transaction?.category}</td>
                                    <td>{transaction.price}</td>
                                    <td>{transaction.date}</td>

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

export default Transactions;
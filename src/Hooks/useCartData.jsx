import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const useCartData = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const { data: cart = [], isLoading, refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartitems/${user?.email}`)
            console.log(res.data)
            return res.data;
        },
        onError: (error) => {
            console.error('Error fetching cart items:', error);
        },
    })

    return [cart, isLoading, refetch]

};

export default useCartData;
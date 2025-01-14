import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const useCartData = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: cartItems = [], isLoading , refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartItems?email=${user?.email}`)
            return res.data
        }
    })

    if(isLoading)  return 'Loading...'

    return [cartItems, isLoading, refetch]

    // const [cartItems, setCartItems] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:2000/cartItems')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCartItems(data)
    //             setLoading(false)
    //         })
    // }, [])

    // return [cartItems];
};

export default useCartData;
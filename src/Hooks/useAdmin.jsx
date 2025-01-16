import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {

    const {user, loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    // tanstack
    const {data: isAdmin, isLoading, refetch} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isLoading, refetch]
};

export default useAdmin;
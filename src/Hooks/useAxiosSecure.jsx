import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:2000'
})

const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    },
        function (error) {
            // do something with request error
            return Promise.reject(error)
        })


    // intercept 401 & 403
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        function (error) {
            const status = error.response.status;
            console.log('in the intercepter', error, status)
            if (status === 401 || status === 403) {
                logOut()
                navigate('/auth')
            }
            return Promise.reject(error)
        })


    return axiosSecure
};

export default useAxiosSecure;
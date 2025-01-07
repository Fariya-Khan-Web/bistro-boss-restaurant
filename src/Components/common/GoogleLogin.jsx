import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const GoogleLogin = () => {

    const { loginWithGoogle, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogle = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user)
                toast.success('Logged in with google')
                navigate('/')
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photoUrl: res.user.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.acknowledged) {
                            setLoading(false)
                        }
                    })
                    .catch(err => { console.log(err) })
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong. try again')
            })
    }

    return (
        <div onClick={handleGoogle} className='border border-[#444444] rounded-full p-1'>
            <FaGoogle className='text-xl text-[#444444]' />
        </div>
    );
};

export default GoogleLogin;
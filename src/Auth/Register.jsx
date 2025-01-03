import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import loginbg from '../assets/others/authentication.png'
import authanim from '../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { Result } from 'postcss';

const Register = () => {

    const { user, setUser, loginWithGoogle, createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value


        if (!/[A-Z]/.test(password)) {
            return toast.warning('Password must contain at leaste one uppercase')
        }
        if (!/[a-z]/.test(password)) {
            return toast.warning('Password must contain at leaste one lowercase')
        }
        if (!/\d/.test(password)) {
            return toast.warning('Password must contain at leaste one digit')
        }
        if (!/.{6,}/.test(password)) {
            return toast.warning('Password must contain at leaste six characters')
        }

        const profileInfo = { name, photo }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(res => { })
                    .catch(err => { console.log(err) })
                toast.success('User created successfully')
                navigate('/')
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='flex flex-col lg:flex-row-reverse lg:items-center justify-evenly shadow-2xl p-8' style={{ background: `url("${loginbg}")` }}>
            <div className=''>
                <img className='' src={authanim} alt="" />
            </div>
            <div className='relative lg:w-96'>
                <h1 className='text-3xl font-bold text-center py-4'>Sign Up</h1>
                <form onSubmit={handleSubmit} className="">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name='photo' placeholder="your photo url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#D1A054B3]">Sign in</button>
                    </div>
                </form>
                <div className='text-center my-3'>
                    <Link to={'/auth'} className='text-center text-[#D1A054B3]'>Already registered? Go to log in</Link>
                    <p className='text-center my-3 text-gray-600'>Or sign in with</p>
                    <div className=' w-1/3 mx-auto flex justify-between'>
                        <div className='border border-[#444444] rounded-full p-1 '>
                            <FaFacebook className='text-xl text-[#444444]' />
                        </div>
                        <div className='border border-[#444444] rounded-full p-1'>
                            <FaGoogle className='text-xl text-[#444444]' />
                        </div>
                        <div className='border border-[#444444] rounded-full p-1'>
                            <FaGithub className='text-xl text-[#444444]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
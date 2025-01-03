import React, { useEffect, useRef, useState } from 'react';
import loginbg from '../assets/others/authentication.png'
import authanim from '../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useData from '../Hooks/useData';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const Login = () => {

    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const [captchaInpLen, setCaptchaInpLen] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log({ email, password })
    }

    const handleValidateCaptcha = e => {
        const user_captcha_value = captchaRef.current.value
        setCaptchaInpLen(user_captcha_value.length)
        // if (user_captcha_value.length === 0){
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        // }
    }



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [captchaInpLen === 0])


    return (
        <div className='flex justify-evenly shadow-2xl' style={{ background: `url("${loginbg}")` }}>
            <div className='w-1/2'>
                <img className='' src={authanim} alt="" />
            </div>
            <div className='relative'>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='password' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <LoadCanvasTemplate />
                        </label>
                        <div className='flex'>
                            <input ref={captchaRef} type="text" placeholder="type the text above" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={disable} className="btn bg-[#D1A054B3">Login</button>
                    </div>
                </form>
                <button onClick={handleValidateCaptcha} className='absolute right-10 bottom-32 text-[#D1A054B3]'>
                    {disable ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
                </button>
            </div>
        </div>
    );
};

export default Login;
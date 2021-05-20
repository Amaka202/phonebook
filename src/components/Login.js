import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {Link, useHistory} from 'react-router-dom';
// import { Alert } from 'rsuite';
import CustomHeader from './CustomHeader';

import { Button, Loader }from 'rsuite';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const onSubmit = data => {
        console.log(data);
        fetch('https://we-skillz-phonebook-task.herokuapp.com/api/v1/auth/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
            if(data.code === 401){
                setTimeout(setMessage(data.message), 3000)
            }
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    };
    

    return (
        <div>
            <CustomHeader text='Login'/>
            <div className='bg-background-color min-h-minH mt-1 flex justify-center align-center'>
            <section className="md:mt-28 md:mb-44 self-center border border-border-color rounded md:p-12 p-4 m-4 bg-white md:w-1/3 w-full">
            <p>{message}</p> 
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <p className='text-primary-color md:text-3xl text-xl font-bold text-center md:mb-14 mb-10'>Welcome to Phonebook!</p>

                <div className="mb-6">
                    <label className='block	text-primary-color font-bold mb-3'>Email Address</label>
                    <input name="email" placeholder="Enter email address"  className='border border-primary-color w-full rounded p-3 text-sm placeholder-placeholder-color focus:outline-none'
                        {...register("email", { 
                            required: 'This field is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                        }})}
                    />
                    {errors.email && <span className='text-red-600 italic text-xs'>{errors.email.message}</span>}
                </div>
                <div className="mb-6">
                <label className='block	text-primary-color font-bold mb-3'>Password</label>

                    <input name="password" placeholder="Enter password" type='password' className='border border-primary-color w-full rounded p-3 text-sm placeholder-placeholder-color focus:outline-none'
                        {...register("password", { 
                            required: 'This field is required',
                              minLength: {
                                value: 6,
                                message: 'password should be at least 6 characters' 
                        }})}
                    />
                    {errors.password && <span className='text-red-600 italic text-xs'>{errors.password.message}</span>}
                </div>
                <div className=" mt-8" >
                 <Button className='bg-primary-color w-full rounded p-3 text-sm text-white font-bold' type='submit'>
                     Login
                 </Button>
                <Loader className='bg-primary-color text-red'/>

                </div>
                
            
            </form>
            
            </section>
        </div>
        </div>
    )
}

export default Login;
import React from 'react'
import { useForm } from "react-hook-form";
import {Link, useHistory} from 'react-router-dom';
// import { Alert } from 'rsuite';
// import { Button } from 'rsuite';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
    };
    

    return (
        <div className='bg-background-color min-h-minH mt-0.5 flex justify-center align-center'>
            <section className="self-center border border-input-form-border rounded md:p-8 p-4 m-4 bg-white md:w-1/3 w-full">
                
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <p className='text-primary-color md:text-2xl text-xl font-bold text-center mb-8'>Welcome to Phonebook</p>

                <div className="mb-6">
                    <label className='block	text-primary-color font-bold mb-3'>Email Address</label>
                    <input name="email" placeholder="Email"  className='border border-primary-color w-full rounded p-3 text-sm placeholder-placeholder-color focus:outline-none'
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

                    <input name="password" placeholder="Password" type='password' className='border border-primary-color w-full rounded p-3 text-sm placeholder-placeholder-color focus:outline-none'
                        {...register("password", { 
                            required: 'This field is required',
                              minLength: {
                                value: 6,
                                message: 'password should be at least 6 characters' 
                        }})}
                    />
                    {errors.password && <span className='text-red-600 italic text-xs'>{errors.password.message}</span>}
                </div>
                <div className="mb-6 mt-8" >
                 <button className='bg-primary-color w-full rounded p-3 text-sm text-white' type='submit'>
                     Login
                 </button>

                </div>
                
            
            </form>
            
            </section>
        </div>
    )
}

export default Login;
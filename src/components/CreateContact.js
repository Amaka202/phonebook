import React from 'react';
import { useForm } from "react-hook-form";

export default function Modal({  showContactForm, setShowContactForm }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

  return (
    <>
      {showContactForm ? (
        <>
          <div
            role="dialog"
            aria-modal="true"
            aria-describedby="dialog-message"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto flex">
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="relative p-6 flex-auto md:p-12">
                <div className='bg-primary-color inline-block border rounded-round w-16 h-16 mb-6 flex justify-center align-center '>
                    <p className='text-center text-white font-bold self-center text-3xl'>J</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="mb-4 flex">
                    <div className='mr-3'>
                        <input name="firstname" placeholder="First name"  className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                            {...register("firstname", { 
                                required: 'This field is required',
                                })}
                        />
                        {errors.firstname && <span className='text-red-600 italic text-xs'>{errors.firstname.message}</span>}
                    </div>
                    <div>
                        <input name="lastname" placeholder="Last name"  className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                            {...register("lastname", { 
                                required: 'This field is required',
                                })}
                        />
                        {errors.lastname && <span className='text-red-600 italic text-xs'>{errors.lastname.message}</span>}
                    </div>
                </div>
                
                <div className="mb-4">

                    <input name="number" placeholder="Phone number" type='number' className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                        {...register("password", { 
                            required: 'This field is required',
                            })}
                    />
                    {errors.password && <span className='text-red-600 italic text-xs'>{errors.password.message}</span>}
                </div>
                <div className="mb-4">
                    <input name="email" placeholder="Email address"  className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                        {...register("email", { 
                            required: 'This field is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                        }})}
                    />
                    {errors.email && <span className='text-red-600 italic text-xs'>{errors.email.message}</span>}
                </div>
                <div className="mb-4" >
                 <button className='bg-primary-color w-full rounded p-3 text-sm text-white font-bold' type='submit'>
                     Create
                 </button>

                </div>
                <div className=" " >
                 <button className='bg-white border border-border-color w-full rounded p-3 text-sm text-cancel-color font-bold' type='submit'
                    onClick={() => {
                        setShowContactForm(false);
                    }}
                 >
                     Cancel
                 </button>

                </div>
                
            
            </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
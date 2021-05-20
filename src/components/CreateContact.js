import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {decryptToken} from './helperFnxs';

export default function Modal({  showContactForm, setShowContactForm }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState('');

    const handleCancel= () => {
      setShowContactForm(false)
      reset()
    }

    const onSubmit = data => {
      let bearerToken = decryptToken('accessToken')
        if(
          bearerToken != null &&
			    bearerToken !== "null"
        ){ 
          fetch('https://we-skillz-phonebook-task.herokuapp.com/api/v1/contacts', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${decryptToken('accessToken')}`
          },
          body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
              if(!data.code){
                reset()
                setShowContactForm(false)
              }else{
                  setMessage('Fill all required fields')  
                  setTimeout(() => setMessage(''), 3000)          
              }
          })
          .catch((error) => {
              setMessage('Error Creating contact')
          });
        }else{
          setMessage('Unauthorized') 
          setTimeout(() => setMessage(''), 3000)
        }
        
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
              <p className='text-red-600 italic text-sm text-center'>{message}</p> 
                <div className='bg-primary-color inline-block border rounded-round w-16 h-16 mb-6 flex justify-center align-center '>
                    <p className='text-center text-white font-bold self-center text-3xl'>J</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="mb-4 flex">
                    <div className='mr-3'>
                        <input name="firstName" placeholder="First name"  className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                            {...register("firstName", { 
                                required: 'This field is required',
                                })}
                        />
                        {errors.firstName && <span className='text-red-600 italic text-xs'>{errors.firstName.message}</span>}
                    </div>
                    <div>
                        <input name="lastName" placeholder="Last name"  className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                            {...register("lastName", { 
                                required: 'This field is required',
                                })}
                        />
                        {errors.lastName && <span className='text-red-600 italic text-xs'>{errors.lastName.message}</span>}
                    </div>
                </div>
                
                <div className="mb-4">

                    <input name="phoneNumber" placeholder="Phone number" type='number' className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                        {...register("password", { 
                            required: 'This field is required',
                            })}
                    />
                    {errors.phoneNumber && <span className='text-red-600 italic text-xs'>{errors.phoneNumber.message}</span>}
                </div>
                <div className="mb-4">
                    <input name="address" placeholder="Email address" type='email' className='border border-primary-color w-full rounded p-3 text-base placeholder-placeholder-color focus:outline-none'
                        {...register("email", { 
                            required: 'This field is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                        }})}
                    />
                    {errors.address && <span className='text-red-600 italic text-xs'>{errors.address.message}</span>}
                </div>
                <div className="mb-4" >
                 <button className='bg-primary-color w-full rounded p-3 text-sm text-white font-bold' type='submit'>
                     Create
                 </button>

                </div>
                <div className=" " >
                 <button className='bg-white border border-border-color w-full rounded p-3 text-sm text-cancel-color font-bold' type='submit'
                    onClick={() => {
                        handleCancel();
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
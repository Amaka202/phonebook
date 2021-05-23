import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import CustomHeader from './CustomHeader';
import { Button }from 'rsuite';
import {encryptToken} from './helperFnxs';
import {connect} from 'react-redux';
import {loginUser} from '../store/actionCreators/authAction';

function Login({loginUser, authData, loginSuccessTime, loginErrorTime}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = (loginCredentials) => {
        setLoading(true)
        loginUser(loginCredentials)
    };

    useEffect(() => {
        if(authData){
            if(!authData.code){
                encryptToken( authData.token.accessToken, 'pbAccessToken')
                encryptToken(authData.token.refreshToken, 'pbRefreshToken')
                encryptToken(authData.token.expiresIn, 'tokenExpiryDate')
                history.push('/contacts')
            }else{
                setLoading(false)
                setMessage(authData.message)  
                setTimeout(() => setMessage(''), 3000) 
            }
        }
    }, [loginSuccessTime, authData, history])

    useEffect(() => {
        if(loginErrorTime){
            setLoading(false)
            setMessage('Error logging in')  
            setTimeout(() => setMessage(''), 3000)
        }
    }, [loginErrorTime])

    const redirectToLogin = () => {
        history.push('/')
    }

    return (
        <div>
            <CustomHeader handleClick={redirectToLogin} text='Login'/>
            
            <div className='bg-background-color min-h-minH mt-1 flex justify-center align-center'>
            <section className="loginSection">
            <p className='text-red-600 italic text-sm text-center'>{message}</p> 
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <p className='text-primary-color md:text-3xl text-xl font-bold text-center md:mb-14 mb-10'>Welcome to Phonebook!</p>

                <div className="mb-6">
                    <label className='block	text-primary-color font-bold mb-3'>Email Address</label>
                    <input name="email" placeholder="Enter email address"  className='input'
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

                    <input name="password" placeholder="Enter password" type='password' className='input'
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
                    
                </div>
                {loading && <div class="loader bg-white p-5 rounded-full flex justify-center items-center space-x-3 ">
                <div class="w-3 h-3 bg-primary-color rounded-full animate-bounce"></div>
                <div class="w-3 h-3 bg-primary-color rounded-full "></div>
                <div class="w-3 h-3 bg-primary-color rounded-full animate-bounce"></div>
                </div>}
                
            
            </form>
            
            </section>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authData: state.auth.data,
        loginSuccessTime: state.auth.loginSuccessTime,
        loginErrorTime: state.auth.loginErrorTime
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (loginCredentials) => dispatch(loginUser(loginCredentials)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

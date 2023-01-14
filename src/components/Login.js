import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import amazoneLogo from "../assets/amazon-logo2.png"
import { auth } from '../firebase'

const Login = () => {

    const naviagte = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sign in function
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            naviagte('/')
        })
        .catch(error=> alert(error.message))
    }


    // Create account function
    const createAccount = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            // console.log(auth);
            if(auth){
                naviagte('/')
            }
        })
        .catch(error => alert(error.message))
        
    }



  return (
    <div className='login flex flex-col items-center max-w-[22rem] m-auto'>
        <Link to="/">
            <div className='flex items-center'>
                <img className='w-28 py-5 mx-1' src={amazoneLogo} alt='amazon-logo'/>.in
            </div>
        </Link>

        <div className='border flex flex-col p-6 max-w-[22rem] bg-white rounded-md'>
            <h2 className='text-3xl font-normal mb-5'>Sign in</h2>
            <form className='flex flex-col' autoComplete='on'>
                <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                <input onChange={e => setEmail(e.target.value)} type='email' id='email' className='border border-black mb-5 px-2 py-1 rounded-sm'></input>

                <label htmlFor="password" className='text-sm font-semibold'>Password</label>
                <input onChange={e => setPassword(e.target.value)} type='password' id='password' className='border border-black mb-5 px-2 py-1 rounded-sm'></input>
            </form>
            
            <button onClick={signIn} className='bg-[#f3ce72] border border-[#a88734] mb-5 py-1'>Sign in</button>
            <p className='mb-5 text-xs'>By continuing, you agree to Amazon's <span className='text-blue-700 cursor-pointer'>Conditions of Use</span> and <span className='text-blue-700 cursor-pointer'>Privacy Notice.</span></p>
            <span className='text-xs hover:cursor-pointer hover:underline text-blue-700'>Need help?</span>
        </div>

        <span className='text-xs my-3 text-gray-500'>New to Amazon</span>
        <button onClick={createAccount} className='bg-[#eef0f2] border rounded-sm border-[#adb1b8] hover:bg-[#dde0e5] py-1 w-[100%]'>Create your Amazon account</button>

        <hr className='w-[100vw] my-5'/>

        <div>
            <div className='space-x-3 text-center'>
                <span className='text-xs text-blue-700 cursor-pointer'>Conditions of Use</span>
                <span className='text-xs text-blue-700 cursor-pointer'>Privacy Notice</span>
                <span className='text-xs text-blue-700 cursor-pointer'>Help </span>
            </div>
                <span className='text-xs text-gray-500 text-center'>© 2022-2023, Amazon fake clone, Inc. or its affiliates</span>
        </div>
    </div>
  )
}

export default Login

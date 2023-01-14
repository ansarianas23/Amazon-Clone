import React from 'react'
import { Link } from 'react-router-dom'

const SigninRedirect = () => {
  return (
    <div className='signin__redirect flex flex-col items-center py-5'>
        <div className='border-t-[1px] border-gray-400 w-[98%]'/>

        <div className='flex flex-col items-center w-[15rem] py-5'>
            <p className='text-sm'>See personalized recommendations</p>
            <Link to="login"><button className='bg-[#ffd814] hover:bg-[#f7ca00] px-3 py-1 rounded-lg w-[15rem] my-1'>Sign in</button></Link>
            <p className='text-xs'>New customer? <span className='cursor-pointer text-green-800 hover:text-red-800'>Start here</span></p>
        </div>

        <div className='border-t-[1px] border-gray-400 w-[98%]'/>
    </div>
  )
}

export default SigninRedirect

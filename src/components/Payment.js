import { CardElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
// import {CardElements, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    // const stripe = useStripe();
    // const elements = useElements(); 

    // function to calculate order total
    let result = cart?.reduce((tot, item)=>{
        return tot + item.price
      },0)


    const handleSubmit = ()=>{

    }

  return (
    <>
        <h1 className='text-3xl text-center py-3'>Checkout ({cart?.length} items)</h1>
    <div className='payment__container bg-white px-20 py-5 mx-5 rounded-md'>

        {/* address div */}
        <div className='address flex'>
            <div className='payment__title mr-28'>
                <h3 className='font-bold semi text-lg'>Delivery Address</h3>
            </div>
            <div className='payment__address flex flex-col'>
                <span>{user?.email}</span>
                <span>Lane no 1234</span>
                <span>Dhule, Maharashtra (IN)</span>
            </div>
        </div>
        <div className='border-b-[1px] my-5'/>

        {/* Itmes div */}
        <div className='items md:flex'>
            <div className='mr-10'>
                <h3 className='font-bold text-lg'>Review items and delivery</h3>
            </div>
            <div className='payment__items'>
                {cart.map((item)=>(
                    <CheckoutProduct
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    ))}
            </div>
        </div>
        
        <div className='border-b-[1px] my-5'/>


        {/* payment div */}
        <div className='flex'>
            <div>
                <h3 className='font-bold text-lg mr-28'>Payment Method</h3>
            </div>
            <div className='flex flex-col space-y-4'> 
                <span className='font-bold'>Card Details</span>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div className='w-96'>
                        <CardElement/>
                    </div>
                    <div className='payment__priceConatiner'>
                        <h3 className='font-semibold'>Order Total : {result}</h3>
                    </div>
                    {/* <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button> */}
                    <button className='bg-[#ffd814] hover:bg-[#f7ca00] px-3 py-1 rounded-lg w-[100%]'>Buy Now</button>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Payment





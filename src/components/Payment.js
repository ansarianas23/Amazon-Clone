import React from 'react'
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
// import {CardElements, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    // const stripe = useStripe();
    // const elements = useElements(); 


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
            <div className='flex flex-col'> 
                <span className='font-bold'>Card Details</span>
                <form onSubmit={handleSubmit}>
                    {/* <CardElements/> */}
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Payment





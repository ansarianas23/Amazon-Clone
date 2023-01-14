import userEvent from '@testing-library/user-event'
import React from 'react'
import { useStateValue } from '../context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();



  return (
    <>
    <div className='checkout__container flex justify-center space-x-4 pt-8'>

        <div className='checkout__products bg-white rounded-md w-[60vw] p-5'>
            <h3 className=''>{user?.email}</h3>
            <h2 className='text-3xl font-normal'>Shopping Cart</h2>
            <hr className='mt-3'/>

            {cart.map(item=>(
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

        <Subtotal/>
    </div>
    <p className='text-xs m-5'>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br/>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
    </>
  )
}

export default Checkout
import React from 'react'
import { useStateValue } from '../context/StateProvider'

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () =>{
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }




  return (
    <>
        <div className='product__div flex py-5 px-10 space-x-8 w-full'>

            <div className='left w-48 h-48'>
                <img className='w-full h-full' src={image} alt='product-img'/>
            </div>

            <div className='right space-y-3 max-w-[35vw]'>
                <p className='text-base font-normal'>{title}</p>
                <div className='flex'>
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <span key={i}>⭐</span>
                    ))}
                </div>

                <p className='font-bold text-lg'>
                    <span className='text-sm'>₹</span>
                    <span>{price}</span>
                    </p>
                <button onClick={removeFromCart} className='bg-[#ffd814] hover:bg-[#f7ca00] px-4 py-1 rounded-lg'>Remove from Cart</button>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default CheckoutProduct

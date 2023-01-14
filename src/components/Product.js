import React from 'react'
import { useStateValue } from '../context/StateProvider'

const Product = ({title, image, price, rating, id}) => {
    const [{ cart }, dispatch] = useStateValue();
    // console.log("this is the cart", cart)

    // Function for add item into cart
    const addToCart = ()=>{
        // dispatch the item into the data layer 
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id :id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });       
    };


  return (
    <div className='product flex flex-col items-center justify-end m-3 p-5 max-h-[450px] min-w-[150px] w-[350px] rounded-md bg-white z-20 hover:scale-[1.02] transition-all ease-out'>
        <div className='product__info h-[120px]'>
            <p className='text-sm'>{title}</p>
            <p className='font-bold'>
                <span className='text-sm'>₹</span>
                <span>{price}</span>
            </p>
            <div className='flex'>
                {Array(rating).fill().map((_, i)=> (
                    <p key={i}>⭐</p>
                ))}
            </div>
        </div>

        <img className='w-[180px] h-[180px] object-contain mb-5 cursor-pointer' src={image} alt='product-img'/>

        <button onClick={addToCart} className='bg-[#ffd814] hover:bg-[#f7ca00] px-3 py-1 rounded-lg w-[100%]'>Add to Cart</button>
    </div>
  )
}

export default Product

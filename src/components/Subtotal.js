import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate()

  let result = cart?.reduce((tot, item)=>{
    return tot + item.price
  },0)
  console.log(result);
  
  return (  
    <div className='subtotal flex flex-col justify-between bg-white w-[300px] h-[150px] p-5 rounded-md'>

        <p className='text-lg font-normal'>
          <span>Subtotal ({cart?.length} items): </span>
          <strong><span className='text-sm font-bold'>₹</span>{result}</strong>
        </p>
        <small className='flex items-center'>
          <input className='mr-1' type="checkbox"/>This order contains gift
        </small>
        <button onClick={e=> navigate('/payment')} className='bg-[#ffd814] hover:bg-[#f7ca00] px-3 py-1 rounded-lg w-[100%]'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

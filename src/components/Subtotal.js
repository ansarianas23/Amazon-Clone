import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate()
  
  return (  
    <div className='subtotal flex flex-col justify-between bg-white w-[300px] h-[150px] p-5 rounded-md'>

      <CurrencyFormat 
        renderText={(value)=>(
          <>
            <p className='text-lg font-normal'>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className='flex items-center'>
              <input className='mr-1' type="checkbox"/>This order contains gift
            </small>
          </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}  
        // prefix={"₹"}
      />

        <button onClick={e=> navigate('/payment')} className='bg-[#ffd814] hover:bg-[#f7ca00] px-3 py-1 rounded-lg w-[100%]'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

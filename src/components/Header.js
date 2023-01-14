import React from 'react'
import { Link } from 'react-router-dom'
import amazonLogo from '../assets/amazon-logo.png'
import indianFlag from '../assets/Indian-flag.png'
import cartLogo from "../assets/amazon-cart-logo.png"
import { useStateValue } from '../context/StateProvider'
import { auth } from '../firebase'

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  // console.log('User from Redux/Context Store is' ,user);
  // console.log(cart);


  async function signOut() {
    try {
        await auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }

  }

  return (
    <>
    <div className='header  top-0 z-[40] flex bg-[#131921] h-[60px] w-[100%] items-center text-white px-5 md:space-x-6'>
      <Link to={'/'}>
        <div className='flex- amazone-logo flex border border-transparent hover:border-white px-1 md:p-2'>
          <img className='w-28 md:h-7' src={amazonLogo} alt="amazon_logo"/>
          <span className='text-xs pl-1'>.in</span>
        </div>
      </Link>

      <div className='address__box hidden md:inline-block'>
        <span className='location__logo'></span>
        <div className='address flex flex-col border border-transparent hover:border-white cursor-pointer px-2 py-1 '>
            <span className='text-xs pl-3'>Hello {user?.email}</span>
            <span className='font-bold text-sm'><i className="fa-solid fa-location-dot"></i> Select your address</span>
        </div>
      </div>

      {/* Middle Search Bar */}
      <div className='search__input text-black rounded-md overflow-hidden max-w-[59vw] flex items-center invisible md:visible'>
        <select className='select__input w-8 md:w-12 h-10 text-sm pl-1 bg-gray-200 hover:bg-gray-300 cursor-pointer'>
          <option>All</option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Amazon Fresh</option>
          <option>Amazon Phrmacy</option>
          <option>Appliances</option>
          <option>Apps and Games</option>
        </select>
        <input type='text' className='serach__bar h-10 pl-2 w-[50vw] min-w-[4rem]'></input>
        <span className='search__icon bg-[#febd69] hover:bg-[#f1a845] px-3 py-2 cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>

      <div className='header__langauge hidden md:flex items-center border border-transparent hover:border-white cursor-pointer px-2 py-3'>
        <img className='indian-flag h-3 pr-1' src={indianFlag} alt='indian-flag'/>
        <span className='font-bold text-sm'>EN</span>
      </div>

      <Link to={!user && '/login'}>
        <div onClick={signOut} className='header__accounts md:flex flex-col border border-transparent hover:border-white cursor-pointer px-2 py-1'>
          
          <div className='md:hidden flex flex-col justify-center items-center text-center text-white'>
            <span className='text-xm'><i className="fa-regular fa-user"></i></span>
            <span className='text-xs w-14'>{user? "Sign Out": "Sign in"}</span>
          </div>

          <div className='hidden md:inline-block accounts__upper text-xs'>
            <span>Hello, </span>
            <span>{user? "Sign Out": "Sign In"}</span>
          </div>

          <span className='hidden md:inline accounts__lower font-bold text-sm'>Account</span>
        </div>
      </Link>
      
      <div className='header__orders md:flex flex-col border border-transparent hover:border-white cursor-pointer px-2 py-1 hidden'>
        <span className='orsers__upper text-xs'>Returns</span>
        <span className='orsers__lower font-bold text-sm'>& Orders</span>
      </div>

      <Link to='checkout'>
        <div className='header__cart border border-transparent hover:border-white cursor-pointer px-2 py-2 flex flex-col space-x-1'>
          <div className='space-x-1 flex'>
            {/* <span className='cart__upper'><img className='w-12' src={cartLogo} alt="cart-logo"/></span> */}
            <span className='cart__upper'><i class="fa-solid fa-cart-shopping"></i></span>
            <span className="text-md text-[#f08804] font-bold">{cart?.length}</span>
          </div>
          <span className='cart__lower font-bold text-sm hidden md:inline'>Cart</span>
        </div>
      </Link>
    </div>

    <div className='mobile__seacrh__bar md:hidden bg-[#131921] w-full p-5 flex justify-center items-center'>
      <div className='flex justify-center items-center rounded-md overflow-hidden w-full'>
        <select className='select__input w-8 md:w-12 h-10 text-sm pl-1 bg-gray-200 hover:bg-gray-300 cursor-pointer'>
            <option>All</option>
            <option>Alexa Skills</option>
            <option>Amazon Devices</option>
            <option>Amazon Fashion</option>
            <option>Amazon Fresh</option>
            <option>Amazon Phrmacy</option>
            <option>Appliances</option>
            <option>Apps and Games</option>
        </select>
          <input type='text' className='serach__bar h-10 pl-2 w-[100%] min-w-[4rem]'></input>
          <span className='search__icon bg-[#febd69] hover:bg-[#f1a845] px-3 py-2 cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>
    </div>

    



    


    </>
  )
}

export default Header

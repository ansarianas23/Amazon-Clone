import React, { useState } from 'react'
import { useStateValue } from '../context/StateProvider';

const HeaderNav = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const links = [
    "All",
    "Sell",
    "Amazon miniTV",
    "Best Sellers",
    "Mobiles",
    "Today's Deals",
    "Customer Service",
    "Electronics",
    "Prime",
    "Fashion",
    "Amazon Pay",
    "Home & Kitchen",
    "New Releases",
    "Books",
    "Computers",
    "Beauty & Personal Care",
    "Coupons",
    "Toys & Games",
    "Gift Ideas",
  ]
  const [open, setOpen] = useState(false);
  
  const toggleNav=()=>{
    setOpen(!open)
  }




  return (
    <>
    <div className='headerNav bg-[#232f3e] py-2 text-white md:px-2 md:py-1 text-sm font-medium'>
      <span onClick={toggleNav} className={`px-3 text-xl md:hidden`}><i className={`fa-solid fa-${open? "": "bars"}`}></i></span>

      {/* <div className={`flex flex-col md:flex-row md:flex-wrap h-[100vh] md:h-auto w-[200px] md:w-auto space-y-10 md:space-y-0 overflow-y-scroll md:overflow-auto bg-white md:bg-inherit text-black md:text-white py-5 md:py-0 px-4 md:px-0 absolute md:static z-[30] top-11 md:top-0 ${open? "left-[0]":"left-[-250px]"} transition-all ease-in duration-300`}> */}
      <div className={`flex flex-col md:flex-row md:flex-wrap h-[100vh] md:h-auto w-[60vw] md:w-auto overflow-y-scroll md:overflow-auto bg-white md:bg-inherit text-black md:text-white md:px-0 fixed md:static z-[40] top-0 ${open? "left-[0]":"left-[-400px]"} transition-all ease-in duration-300`}>

      <div className='w-full md:hidden bg-[#232f3e] py-6 px-2 text-white flex justify-between'>
        <span className='text-xl'>Hello<br/>{user? user.email: "User"}</span>
        <span onClick={toggleNav} className={`text-3xl md:hidden`}>
          <i className={`fa-solid fa-${open? "xmark": ""} pr-2`}></i>
        </span>
      </div>
      {/* <span onClick={toggleNav} className={`px-3 text-xl md:hidden`}><i className={`fa-solid fa-${open? "xmark": "bars"}`}></i></span> */}

        {links.map((linkItem)=>{
          return (

            <span key={linkItem} className='border border-transparent hover:border-white cursor-pointer md:py-1 px-2 my-5 md:my-0'>{linkItem}</span>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default HeaderNav

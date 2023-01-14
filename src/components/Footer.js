import React from 'react'
import amazonLogo from '../assets/amazon-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__back__to__top'>
            <p className='bg-[#37475a] text-center py-3 text-sm font-medium text-white w-[100%] cursor-pointer hover:bg-[#48576a]'>Back to top</p>
        </div>

        <div className='footer__navs flex flex-col bg-[#232f3e] text-gray-300'>

            <div className='flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 px-5  md:space-x-28 py-10'>
                <div className='flex flex-col text-sm space-y-2'>
                    <h3 className='text-base font-semibold text-white'>Get to Know Us</h3>
                    <span className='cursor-pointer hover:underline'>About Us</span>
                    <span className='cursor-pointer hover:underline'>Careers</span>
                    <span className='cursor-pointer hover:underline'>Press Releases</span>
                    <span className='cursor-pointer hover:underline'>Amazon Science</span>
                </div>

                <div className='flex flex-col text-sm space-y-2'>
                    <h3 className='text-base font-semibold text-white'>Connect with Us</h3>
                    <span className='cursor-pointer hover:underline'>Facebook</span>
                    <span className='cursor-pointer hover:underline'>Twitter</span>
                    <span className='cursor-pointer hover:underline'>Instagram</span>
                </div>

                <div className='flex flex-col text-sm space-y-2'>
                    <h3 className='text-base font-semibold text-white'>Make Money with Us</h3>
                    <span className='cursor-pointer hover:underline'>Sell on Amazon</span>
                    <span className='cursor-pointer hover:underline'>Sell under Amazon Accelerator</span>
                    <span className='cursor-pointer hover:underline'>Protect and Build Your Brand</span>
                    <span className='cursor-pointer hover:underline'>Amazon Global Selling</span>
                    <span className='cursor-pointer hover:underline'>Become an Affiliate</span>
                    <span className='cursor-pointer hover:underline'>Fulfilment by Amazon</span>
                    <span className='cursor-pointer hover:underline'>Advertise Your Products</span>
                    <span className='cursor-pointer hover:underline'>Amazon Pay on Merchants</span>
                </div>

                <div className='flex flex-col text-sm space-y-2'>
                    <h3 className='text-base font-semibold text-white'>Let Us Help You</h3>
                    <span className='cursor-pointer hover:underline'>COVID-19 and Amazon</span>
                    <span className='cursor-pointer hover:underline'>Your Account</span>
                    <span className='cursor-pointer hover:underline'>Returns Centre</span>
                    <span className='cursor-pointer hover:underline'>100% Purchase Protection</span>
                    <span className='cursor-pointer hover:underline'>Amazon App Download</span>
                    <span className='cursor-pointer hover:underline'>Amazon Assistant Download</span>
                    <span className='cursor-pointer hover:underline'>Help</span>
                </div>
            </div>

            <div className='border-t-[1px] border-[#3a4553]'/>

            {/* Footer countries */}
            <div className='footer__country py-10 flex flex-col justify-center items-center'>

                <div className='country__upper flex items-center justify-center space-x-28 mb-6'>
                    <img className='h-6 cursor-pointer' src={amazonLogo} alt=''/>
                    <select className='bg-[#232f3e] border border-gray-500 rounded-sm py-1'>
                        <option>English</option>
                        <option>हिन्दी - HI</option>
                        <option>தமிழ் - TA</option>
                        <option>తెలుగు - TE</option>
                        <option>ಕನ್ನಡ - KN</option>
                        <option>മലയാളം - ML</option>
                        <option>বাংলা - BN</option>
                        <option>मराठी - MR</option>
                    </select>
                </div>

                <div className='country__lower text-xs font-normal space-x-3 max-w-[55rem] text-gray-300 flex justify-center flex-wrap px-3'>
                    <span className='cursor-pointer hover:underline'>Australia</span>
                    <span className='cursor-pointer hover:underline'>Brazil</span>
                    <span className='cursor-pointer hover:underline'>Canada</span>
                    <span className='cursor-pointer hover:underline'>China</span>
                    <span className='cursor-pointer hover:underline'>France</span>
                    <span className='cursor-pointer hover:underline'>Germany</span>
                    <span className='cursor-pointer hover:underline'>Italy</span>
                    <span className='cursor-pointer hover:underline'>Japan</span>
                    <span className='cursor-pointer hover:underline'>Mexico</span>
                    <span className='cursor-pointer hover:underline'>Netherlands</span>
                    <span className='cursor-pointer hover:underline'>Poland</span>
                    <span className='cursor-pointer hover:underline'>Singapore</span>
                    <span className='cursor-pointer hover:underline'>Spain</span>
                    <span className='cursor-pointer hover:underline'>Turkey</span>
                    <span className='cursor-pointer hover:underline'>United Arab Emirates</span>
                    <span className='cursor-pointer hover:underline'>United Kingdom</span>
                    <span className='cursor-pointer hover:underline'>United States</span>
                </div>
            </div>

        </div>

        {/* Footer last */}
        <div className='footer__last bg-[#131a22] text-gray-300 text-xs flex flex-col items-center py-8'>

            <div className='upper grid grid-cols-5 gap-3 max-w-[60rem] px-5'>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>AbeBooks</span>
                    <span>Books, art</span>
                    <span>& collectibles</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>Amazon Web Services</span>
                    <span>Scalable Cloud</span>
                    <span>Computing Services</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>Audible</span>
                    <span>Download</span>
                    <span>Audio Books</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>DPReview</span>
                    <span>Digital</span>
                    <span>Photography</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>IMDb</span>
                    <span>Movies, TV</span>
                    <span>& Celebrities</span>
 
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>Shopbop</span>
                    <span>Designer</span>
                    <span>Fashion Brands</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>Amazon Business</span>
                    <span>Everything For</span>
                    <span>Your Business</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>Prime Now</span>
                    <span>2-Hour Delivery</span>
                    <span>on Everyday Items</span>
                </div>
                <div className='flex flex-col cursor-pointer hover:underline'> 
                    <span className=''>Amazon Prime Music</span>
                    <span>90 million songs, ad-free</span>
                    <span>Over 15 million podcast episodes</span>
                </div>
            </div>
 
            <div className='lower text-white text-xs mt-10 flex flex-col items-center space-y-1'>
                <div className='space-x-3'>
                    <span className='cursor-pointer hover:underline'>Conditions of Use & Sale</span>
                    <span className='cursor-pointer hover:underline'>Privacy Notice</span>
                    <span className='cursor-pointer hover:underline'>Interest-Based Ads</span>
                </div>
                <span >© 2022-2023, Amazon Clone, Inc. or its affiliates</span>
            </div>
        </div>

    </div>
  )
}

export default Footer

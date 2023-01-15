import Footer from './Footer'
import Product from './Product'
import SigninRedirect from './SigninRedirect'
import bannerImg1 from '../assets/bannerImg1.jpg'
import bannerImg2 from '../assets/bannerImg2.jpg'
import bannerImg3 from '../assets/bannerImg3.jpg'
import bannerImg4 from '../assets/bannerImg4.jpg'
import { useEffect, useState } from 'react'

const Home = () => {

  const  [allImages, setAllimages] = useState([bannerImg1, bannerImg2, bannerImg3, bannerImg4])
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
    
    <div className='home max-w-[1500px] m-auto'>

      {/* Slider */}
      <div className='slider w-[100%] h-auto relative'>
        <div className='slide flex transition all ease-in-out duration-500'>
          <img className='homeimg w-[100%] -z-10 mb-[-80px] lg:mb-[-300px] bg-gradient-to-b from-gray-800 to-gray-100' src={allImages[selectedImage]} alt='slider-img'/>
        </div>

        <div className='slider__btns flex justify-between px-4 absolute top-[20%] w-full md:text-4xl text-black'>
          <span onClick={()=>{
            if(selectedImage > 0)
            setSelectedImage(selectedImage - 1)
          }} className='bg-slate-50 bg-opacity-30 px-1 py-2 md:py-3 rounded-md cursor-pointer'><i class="fa-solid fa-chevron-left"></i></span>
          <span onClick={()=>{
            if(selectedImage < allImages.length -1)
            setSelectedImage(selectedImage + 1)
          }} className='bg-slate-50 bg-opacity-30 px-1 py-2 md:py-3 rounded-md cursor-pointer'><i class="fa-solid fa-chevron-right"></i></span>
        </div>
      </div>

      {/* Product Rows */}
      <div className='home__container flex flex-col items-center'>
      
          <div className='home__row1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1'>
            <Product 
            title='HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics' 
            image='https://m.media-amazon.com/images/I/41h8nAsiOQL._SX300_SY300_QL70_FMwebp_.jpg' 
            price={38490} 
            rating={3} id="12346501"/>

            <Product 
            title="iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1 | 120Hz Refresh Rate | 5000mAh Battery | Travel Adapter to be Purchased Separately" 
            image='https://m.media-amazon.com/images/I/61VbKHdE0rL._SL1200_.jpg' 
            price={13999} 
            rating={4} id="12346502"/>

            <Product 
            title="Boult Audio Truebuds with 30H Playtime, IPX7 Waterproof, Lightning Boult™ Type C Fast Charging (10 Min=100Mins), BoomX™ Tech Rich Bass, Pro+ Calling HD Mic, Touch Controls in Ear Earbuds TWS (Grey)" 
            image='https://m.media-amazon.com/images/I/61NQZ-e9DBL._SL1500_.jpg' 
            price={1199} 
            rating={3} id="12346504"/>

            <Product 
            title="Lenovo IdeaCentre 3 Desktop (12th Gen Intel Core i3-12100/8GB/256GB SSD/Windows11/MS Office 2021/Interated UHD 730 Graphics/WiFi 6/Bluetooth 5.2/Mineral Grey), 90SM001DIN" 
            image='https://m.media-amazon.com/images/I/61QpAaHilBL._SL1500_.jpg' 
            price={34990} 
            rating={3} id="12346505"/>
          </div>

          <div className='home__row2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1'>
            <Product 
            title="Levi's Men's 512 Slim Tapered Fit Jeans" 
            image='https://m.media-amazon.com/images/I/81rUeBn4BHL._UL1500_.jpg' 
            price={1399} 
            rating={3} 
            id="12346506"/>

            <Product 
            title="LEOTUDE Regular Fit Full Sleeve Cotton Blend Men's T-Shirt" 
            image='https://m.media-amazon.com/images/I/61iWM4s4XCL._UL1500_.jpg' price={499} 
            rating={3} 
            id="12346507"/>

            <Product 
            title="Campus Mens Ignite Pro Running Shoes" 
            image='https://m.media-amazon.com/images/I/71n9xHYpaHL._UX695_.jpg' 
            price={599} 
            rating={3} 
            id="12346508"/>

            <Product 
            title='Jump Cuts Mens Printed Round Neck Full Sleeve Black and White Cotton Slim Fit T-Shirt' image='https://m.media-amazon.com/images/I/61y7eNVNEeL._UY741_.jpg' 
            price={399} 
            rating={3} 
            id="12346509"/>
          </div>
          
          <div className='home__row3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1'>
            <Product 
            title="LG 1.5 Ton 5 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter with Anti-Virus Protection, 2022 Model, PS-Q19YNZE, White)" 
            image='https://m.media-amazon.com/images/I/51hbo8yQ1EL._SL1500_.jpg' 
            price={42990} 
            rating={3} 
            id="12346510"/>
            
            <Product 
            title='Whirlpool 190 L 3 Star Direct-Cool Single Door Refrigerator (WDE 205 CLS 3S, Blue)' image='https://m.media-amazon.com/images/I/51HxYKRTfhL._SL1500_.jpg' 
            price={13990} 
            rating={3} 
            id="12346511"/>
          </div>

      </div>
      
    </div>

      {/* Signin Redirect component */}
      <SigninRedirect/>

      {/* Footer component */}
      <Footer/>
    </>
  )
}

export default Home

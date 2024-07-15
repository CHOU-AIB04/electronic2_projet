import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import cam1 from "../../assets/campany/AMD-Logo.png"
import cam2 from "../../assets/campany/asus.png"
import cam3 from "../../assets/campany/intel.png"
import cam4 from "../../assets/campany/Msi-Logo.jpg"
import cam5 from "../../assets/campany/sapphire-logo.png"
import cam6 from "../../assets/campany/zotac.png"
import case1 from '../../assets/case2.jpg'
import case2 from '../../assets/case2.png'
import case3 from '../../assets/case3.jpg'
// Import Swiper styles
import monitor1 from '../../assets/monitor.webp'
import monitor3 from '../../assets/monitor3.png'
import 'swiper/css';


import { ImPriceTags } from "react-icons/im";
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
  let [slide,setslide] = useState(()=>{
    if (window.innerWidth>=850) {
      return 3
    } else if(window.innerWidth <=550){
      return 1
    }else{
      return 2
    }
  })
  useEffect(()=>{
   addEventListener("resize",()=>{
    if (window.innerWidth>=850) {
      setslide(3)
    } else if(window.innerWidth <=550){
     setslide(1)
    }else{
      setslide(2)
    }
   })
  },[window.innerWidth])
  return (
    <>
    {/* the first section */}
    <section id="home">
        <div className="container ml-10 md:ml-20 space-y-3">
            <h5 className="white"><span>NEW </span> ARRIVALS</h5>
            <h1 className='text-[23px] md:text-[25px]'>Best Price <span> This Year</span></h1>
            <p className='w-4/5 md:w-full'>Easy and simple PC parts describtion for PC building setups & configiration<br/>
                including most of pc parts with the best price.</p>
            <button> Shop Now</button>
        </div>
    </section>
 
    {/* the section that contain the companies logo */}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <div className='w-full h-[80%] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6'>
          <div className='flex items-center justify-center'>
            <img src={cam1} alt="logo" className ="w-[120px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={cam2} alt="logo" className ="w-[120px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={cam3} alt="logo" className ="w-[120px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={cam4} alt="logo" className ="w-[120px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={cam5} alt="logo" className ="w-[120px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={cam6} alt="logo" className ="w-[120px] object-cover"/>
          </div>
      </div>
    </section>
    {/*  the latest watches section*/}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <h1 className='text-[20px] sm:text-[40px] lg:text-[60px] font-bold text-center text-black'>DISCOVER THE LATEST PRODUCT.</h1>
      <div className='h-auto grid grid-cols-1 md:grid-cols-3 mt-4 place-items-center gap-5 md:gap-0'>
        <div>
          <img src={monitor1} alt="watch" className='w-auto'/>
        </div>
        <div className='self-center flex flex-col items-center gap-3'>
          <ImPriceTags size={40} className="text-blue-900"/>
          <p className='w-[90%] font-bold text-[25px] text-center text-black'>Discover Your New Favorite Our Best Sellers Sale</p>
          <h1 className='font-bold text-[40px] text-blue-900'>50% Off</h1>
          <p className='text-[20px] text-black'>Our All New Arrivals</p>
        </div>
        <div>
          <img src={monitor3} alt="watch" />
        </div>
      </div>
    </section>
    {/* the  last section*/}
    <section className='h-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-1 w-[90%] relative left-1/2 -translate-x-1/2'>
        <div className='w-full relative'>
          <h2 className='absolute top-1/2 -translate-y-1/2 text-white font-bold w-full text-center'>Extreme Offers</h2>
          <img src={case1} alt="case1" className='w-full h-full' />
        </div>
        <div className='w-full relative'>
          <h2 className='absolute top-1/2 -translate-y-1/2 text-white font-bold w-full text-center'>Highest Quality</h2>
          <img src={case2} alt="case1" className='w-full h-full' />
        </div>
        <div className='w-full relative'>
          <h2 className='absolute top-1/2 -translate-y-1/2 text-white font-bold w-full text-center'>Up to 50% Disconts</h2>
          <img src={case3} alt="case1" className='w-full h-full' />
        </div>
    </section>
 
    </>
  )
}

export default Home
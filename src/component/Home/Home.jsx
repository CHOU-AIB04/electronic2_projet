import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// mace import
import prod1 from "../../assets/product/prod1.png"
import prod2 from "../../assets/product/prod2.jpg"
import prod3 from "../../assets/product/prod3.jpeg"
import prod4 from "../../assets/product/prod4.jpg"
import prod5 from "../../assets/product/prod5.jpg"
import apple from "../../assets/apple.png"
import airpod from "../../assets/product/airpod.webp"
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
    <div className=" h-[500px] w-full relative">

      <div className="w-full h-full">
          <img src={prod3} alt="" className='w-full h-full'/>
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 space-y-3 w-4/5 text-center'>
          <h2 className='text-[50px] font-bold '>IPhone</h2>
          <h3 className='text-[20px]'>New camera. New design. Newphoria</h3>
      </div>
    </div>
 
    <article className='w-[95%] relative left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-2 mt-10'>
        <section className='w-full h-full relative rounded-md sh overflow-hidden'>
            <img src={prod2} alt="" className='w-full h-full object-cover'/>
            <div className=' absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 text-white space-y-3 w-full text-center'>
                <h1 className=' font-bold text-[30px] text-yellow-700'>WATCH</h1>
                <p className='text-[20px]'>SERIES 9</p>
                <h6 className='text-yellow-700 text-[20px]'>Smarter. Brighter. Mightier</h6>
            </div>
        </section>
        <section className='w-full h-full relative rounded-md sh overflow-hidden'>
            <img src={prod5} alt=""  className='w-full h-full object-cover'/>
            <div className='absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 text-white space-y-3 w-full text-center'>
                <h1 className='font-bold text-[30px] text-yellow-700'>iPhone 15 Pro</h1>
                <p className='text-[20px]'>Titanium. So strong. So sectionght. So pro</p>
            </div>
        </section>
        <section className='w-full h-full relative rounded-md sh overflow-hidden'>
            <img src={prod1} alt="" className='w-full h-full object-cover' />   
            <div className='absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 text-white space-y-3 w-full text-center'>
              <h1 className='font-bold text-[30px] text-yellow-700 '>MacBook Pro</h1>
              <p className='text-[20px]'>Mind-Blowing. Head-turning.</p>
            </div>
        </section>
        <section className='w-full h-full relative rounded-md sh overflow-hidden'>
            <img src={prod4} alt="" className='w-full h-full object-cover'/>
            <div className='absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 text-white space-y-3 w-full text-center'>
              <h1 className='font-bold text-[30px] text-yellow-700'>Watch Pro</h1>
              <p className='text-[20px]'>Adaptive Audio. Now Playing</p>
              </div>
        </section>
    </article>
    {/* another section */}
    <section className="feature relative top-10">
      <div className="section__container flex justify-around items-center flex-col md:flex-row">
        <div className="feature__image">
          <img src={apple} alt="feature" className=''/>
        </div>
        <div className="feature__content">
          <h2 className="section__header text-[40px] font-bold textsh"> FEATURES</h2>
          <ul>
            <li>Warranty and Support</li>
            <li>Ecosystem Integration </li>
            <li>High-Quality Build and Design</li>
            <li>Performance and Efficiency</li>
            <li>Regular Software Updates</li>
          </ul>
        </div>
      </div>
    </section>
     {/*  the latest watches section*/}
    <section className='mt-28 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <h1 className='text-[20px] sm:text-[40px] lg:text-[60px] font-bold text-center text-black'>DISCOVER THE LATEST PRODUCT.</h1>
      <div className='h-auto grid grid-cols-1 md:grid-cols-3 mt-4 place-items-center gap-5 md:gap-0'>
        <div>
          <img src={apple} alt="watch" className='w-auto'/>
        </div>
        <div className='self-center flex flex-col items-center gap-3'>
          <ImPriceTags size={40} className="text-yellow-700"/>
          <p className='w-[90%] font-bold text-[25px] text-center text-black'>Discover Your New Favorite Our Best Sellers Sale</p>
          <h1 className='font-bold text-[40px] text-yellow-700'>50% Off</h1>
          <p className='text-[20px] text-black'>Our All New Arrivals</p>
        </div>
        <div>
          <img src={airpod} alt="watch" />
        </div>
      </div>
    </section>
 
    </>
  )
}

export default Home
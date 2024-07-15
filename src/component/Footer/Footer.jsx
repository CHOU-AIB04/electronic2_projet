import React from 'react'
import pic from "../../assets/curren1.png"
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo_kamal.png"
import mat1 from "../../assets/config/b&w1.png"
import mat2 from "../../assets/config/b&w2.png"
import mat3 from "../../assets/config/b&w3.png"
import mat4 from "../../assets/config/b&w4.png"
import mat5 from "../../assets/config/b&w5.png"
import mat6 from "../../assets/config/b&w6.png"

const Footer = () => {
  return (
    <>
      <footer id="footer" className="mt-10 py-5  sh">
      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
          <div className="footer-one  flex flex-col items-center">
            <img src={logo} alt="" className="w-[250px]" />
            <p className="text-white w-4/5 text-center">
              Pick Parts. Build Your PC.  Compare and Share. Get latest news & special sales
            </p>
          </div>
          <div className="footer-one mb-3">
            <h2 className="pb-2 font-bold text-blue-500">INFORMATION</h2>
            <ul className="list-none text-white">
              <li><a href="#">About Us</a></li>
              <li><a href="#"> Delivery Information</a></li>
              <li><a href="#"> Privacy Policy</a></li>
              <li><a href="#"> Terms & Conditions</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="footer-one mb-3">
            <h2 className="pb-2 font-bold text-blue-500">CONTACT US</h2>
            <div>
              <h6 className="uppercase text-blue-500">Address</h6>
              <p className='text-white'>CASA,OULFA.</p>
            </div>
            <div>
              <h6 className="uppercase text-blue-500">Phone</h6>
              <p className='text-white'>0611459537</p>
            </div>
            <div>
              <h6 className="uppercase text-blue-500">EMAIL</h6>
              <p className='text-white'>Kamalkachani38@gmail.com</p>
            </div>
          </div>
          <div className="footer-one">
            <h5 className="pb-2 font-bold text-blue-500">CONFIGURE</h5>
            <div className="grid grid-cols-3 gap-2">
              <img className="w-[70px] " src={mat1} alt="" />
              <img className="w-[70px] " src={mat2} alt="" />
              <img className="w-[70px] " src={mat3} alt="" />
              <img className="w-[70px] " src={mat4} alt="" />
              <img className="w-[70px] " src={mat5} alt="" />
              <img className="w-[70px] " src={mat6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center">
            <div className="text-nowrap mb-2 text-white">
              <p>Copyright &copy;2024. all rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <LuFacebook size={30} color='blue'/>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                < FaInstagram size={30} color='blue'/>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={30} color='blue'/>
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                < FaTiktok size={30} color='blue'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
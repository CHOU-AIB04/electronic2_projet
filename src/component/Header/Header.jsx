import React from 'react'
import { IoTimerSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Header = () => {
    let Active = {
        color: "rgba(139, 98, 2, 0.753)"
    };
  return (
    <>
    <header className='h-36 sm:h-24 bg-transparent sh  flex justify-start sm:justify-evenly items-center gap-0 sm:gap-20 flex-col sm:flex-row'>
        <Link to="" className='flex items-center '>
           <img src={logo} alt="logo" className='w-[140px] sm:w-[170px] object-cover'/>
        </Link>
       <ul className='flex items-center gap-10 font-bold relative bottom-6 sm:bottom-0'>
            <NavLink to="" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-yellow-800 cursor-pointer'>Home</li>
            </NavLink>
            <NavLink to="/Categorie" style={({isActive})=> isActive ? Active: null}>
                 <li className='transition-colors duration-300 hover:text-yellow-800 cursor-pointer'>Categorie</li>
            </NavLink>
            <NavLink to="/Contact" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-yellow-800 cursor-pointer'>Contact</li>
            </NavLink>
       </ul>
    </header>
    </>
  )
}

export default Header
import React, { useState } from 'react'
import goTaxi from '../assets/images/GoTaxiGlow.png'
import {SlMenu} from 'react-icons/sl';
const Header = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <nav className='h-20 sm:h-20 md:h-16 lg:h-16 xl:h-16 z-50 fixed top-0 w-screen sm:w-screen md:w-screen lg:w-full xl:w-full bg-white shadow-lg shadow-gray-300/40 pl-2 flex items-center gap-40 '>
        <img src={goTaxi} width={52} height={52} />
        <div className='gap-10 hidden sm:hidden md:flex lg:flex xl:flex '>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Home</p>
        </div>
        <SlMenu size={32} className="ml-auto mr-5 block sm:block md:hidden lg:hidden xl:hidden text-slate-400 " onClick={()=>{setIsOpen(!isOpen)}} />
        <div className={`w-full bg-slate-50 text-right pr-5 py-5 absolute top-0 left-0 mt-20   ${isOpen ? "block sm:block ":"hidden"} ease-in-out duration-1000  md:block lg:hidden xl:hidden`}>
            <p className='text-2xl font-medium'>Home</p>
            <p className='text-2xl font-medium'>About Us</p>
            <p className='text-2xl font-medium'>Services</p>
            <p className='text-2xl font-medium'>Home</p>
        </div>

    </nav>
  )
}

export default Header
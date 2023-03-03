import React from 'react'
import goTaxi from '../assets/images/GoTaxiGlow.png'
const Header = () => {
  return (
    <nav className='h-14 z-50 absolute w-full bg-white shadow-lg shadow-gray-300/40 pl-2 flex items-center gap-40 '>
        <img src={goTaxi} width={52} height={52} />
        <div className='flex gap-10 '>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Home</p>

        </div>
    </nav>
  )
}

export default Header
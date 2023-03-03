import React from 'react'
import driver from '../assets/images/Driver.png'

const ServiceCard = ({image,title}) => {
  return (
    <div className='w-fit h-32  flex flex-col justify-between'>
        <img src={image} className="w-16 mx-auto" />
        <p className='text-center text-xl p-0  font-semibold' >{title}</p>
    </div>
  )
}

export default ServiceCard
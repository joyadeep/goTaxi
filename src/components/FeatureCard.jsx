import React from 'react'
// import taxiPooling from '../assets/images/taxiPooling.png'

export const FeatureCard = ({image,description,num,title}) => {
  return (
    <div className='bg-amber-200 rounded-md text-center w-52 px-5 py-2'>
        <p className='text-6xl font-bold tracking-tighter'>{num}</p>
        <p className='text-2xl font-bold capitalize'>{title}</p>
        <p className='border-b-4 rounded-full border-green-500'></p>
        <div className='mt-2'>
        <img src={image} className="w-16 mx-auto " />
        </div>
        <p>{description}</p>
    </div>
  )
}

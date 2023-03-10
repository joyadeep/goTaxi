import React from 'react'
// import taxiPooling from '../assets/images/taxiPooling.png'

export const FeatureCard = ({image,description,num,title,delay}) => {
  return (
    <div data-aos="fade-down" data-aos-delay={delay} data-aos-anchor-placement="center-bottom" className='bg-amber-200 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0   rounded-md text-center mx-auto sm:mx-auto md:mx-0 lg:mx-0 xl:mx-0 w-11/12 sm:w-11/12 md:w-52 lg:w-52 xl:w-52 px-5 py-2'>
        <p className='text-7xl sm:text-7xl md:text-6xl lg:text-6xl  xl:text-6xl font-black tracking-tighter'>{num}</p>
        <p className='text-2xl font-semibold capitalize'>{title}</p>
        <p className='border-b-4 rounded-full border-green-500'></p>
        <div className='mt-2'>
        <img src={image} className="w-20 sm:w-20 md:w-16 xl:w-16 lg:w-16 mx-auto " />
        </div>
        <p>{description}</p>
    </div>
  )
}

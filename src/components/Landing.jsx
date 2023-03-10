import React from 'react'
import taxiRoad from '../assets/images/TaxiRoad.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
const Landing = () => {
  return (
    <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
          >
      {
        [1,2,3].map((index)=>(
          <SwiperSlide key={index} className="overflow-hidden">
      <div className='h-screen pt-20 flex flex-col ' style={{backgroundImage: `url(${taxiRoad})`,backgroundRepeat:'no-repeat',backgroundSize:'70vh'}} >
          <div className='pr-3 mt-3'>
              <p className='text-green-500 text-right text-6xl md:text-6xl xl:text-7xl font-semibold uppercase'>affordable</p>
              <p className='text-yellow-400 text-right text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold uppercase'>Reliable</p>
              <p className='text-black text-right text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold uppercase'>Equitable</p>
          </div>
              <p className='md:w-2/4 font-normal md:text-sm lg:text-lg xl:text-lg xl:w-1/2  ml-auto text-justify  mr-3 md:mt-2 lg:mt-10 xl:mt-10 '>
              Cab booking has become an essential part of modern life, 
               is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's easier than ever to book a ride from your smartphone and get to your destination quickly and safely.
                  </p>
              <div className='md:w-auto lg:w-auto xl:w-auto ml-auto mr-3 sm:mr-3 md:mr-3 lg:mr-5 xl:mr-5  flex mt-5 gap-5  '>
                  <button className='bg-green-500 shadow-lg shadow-green-200 px-5 xl:px-10 py-3 rounded-md text-white'>Download App</button>
                  <button className='bg-yellow-400 shadow-lg shadow-yellow-100 px-5 xl:px-10 py-3 rounded-md text-black' >Become a Driver</button>
              </div>
      </div>    
      </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Landing

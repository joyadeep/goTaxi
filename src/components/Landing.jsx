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
      <div className='h-screen pt-14 flex flex-col ' style={{backgroundImage: `url(${taxiRoad})`,backgroundRepeat:'no-repeat',backgroundSize:'70vh'}} >
          <div className='pr-3 mt-3'>
              <p className='text-green-500 text-right text-7xl font-semibold uppercase'>affordable</p>
              <p className='text-yellow-400 text-right text-7xl font-semibold uppercase'>Reliable</p>
              <p className='text-black text-right text-7xl font-semibold uppercase'>Equitable</p>
          </div>
              <p className='w-1/2 ml-auto text-justify  mr-3 mt-10'>
              Cab booking has become an essential part of modern life, 
               is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's easier than ever to book a ride from your smartphone and get to your destination quickly and safely.
                  </p>
              <div className='w-1/3 ml-auto mr-10 flex justify-between mt-5'>
                  <button className='bg-green-500 shadow-lg shadow-green-200 px-10 py-3 rounded-md text-white'>Download App</button>
                  <button className='bg-yellow-400 shadow-lg shadow-yellow-100 px-10 py-3 rounded-md text-black' >Become a Driver</button>
              </div>
      </div>    
      </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Landing

{/* <div className='h-screen pt-14 w-screen flex flex-col ' style={{backgroundImage: `url(${taxiRoad})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}} >
          <div className='mr-3 mt-3'>
              <p className='text-green-500 text-right text-7xl font-semibold uppercase'>affordable</p>
              <p className='text-yellow-400 text-right text-7xl font-semibold uppercase'>Reliable</p>
              <p className='text-black text-right text-7xl font-semibold uppercase'>Equitable</p>
          </div>
              <p className='w-1/2 ml-auto text-justify  mr-3 mt-10'>
              Cab booking has become an essential part of modern life, 
               is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's easier than ever to book a ride from your smartphone and get to your destination quickly and safely.
                  </p>
              <div className='w-1/3 ml-auto mr-10 flex justify-between mt-5'>
                  <button className='bg-green-500 px-6 py-2 rounded-md text-white'>Download App</button>
                  <button className='bg-yellow-400 px-6 py-2 rounded-md text-black' >Become a Driver</button>
              </div>
      </div>     */}
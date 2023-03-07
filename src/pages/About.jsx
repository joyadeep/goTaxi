import React from 'react'
import GoTaxilogo from '../assets/images/GoTaxiGlow.png'
import ServiceCard from '../components/ServiceCard'
import driver from '../assets/images/Driver.png';
import passenger from '../assets/images/Passenger.png';
import fleetmanager from '../assets/images/FleetManager.png';


const services=[
    {
        id:1,
        image:passenger,
        title:"Passenger"
    },
    {
        id:2,
        image:driver,
        title:"Driver"
    },
    {
        id:3,
        image:fleetmanager,
        title:"Fleet Manager"
    }
]

const About = () => {
  return (
    <div className='flex w-full h-screen bg-slate-50 px-10 gap-4 '>
        <div className=' w-3/4 pt-4'>
            <p className='text-4xl font-semibold text-center'>Affordable Taxi Service at the palm of your hands</p>
            <div className='flex justify-between w-2/5 mx-auto mt-5'>
                <p data-aos="fade-left"   className='text-2xl font-medium'>Book</p>
                <p data-aos="fade-down" data-aos-delay="500" className='text-2xl font-medium'>Schedule</p>
                <p data-aos="fade-right" data-aos-delay="1500" className='text-2xl font-medium'>Share</p>
            </div>
            <p className='text-justify mx-5 mt-5'>
            Cab booking has become an essential part of modern life, 
               is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's easier than ever to book a ride from your smartphone and get to your destination quickly and safely.
            </p>
            <div className='mt-10'>
                <p className='text-3xl font-semibold text-center  '>Our Services</p>
               <div className='flex justify-between w-11/12 mx-auto mt-5'>
               {
                services.map((item)=>(
                    <ServiceCard key={item.id} image={item.image} title={item.title} />
                ))
               }
                
               </div>
               <div className='text-center mt-10'>
               <button className='bg-green-500 shadow-lg text-xl shadow-green-200 px-10 py-2 rounded-md text-white ' >Learn More</button>
               </div>
            </div>

        </div>
        <div className=' w-1/4 flex align-middle justify-center '>
            <img src={GoTaxilogo} className=" object-contain" />
        </div>
    </div>
  )
}

export default About
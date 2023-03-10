import React from 'react'
import { FeatureCard } from '../components/FeatureCard'
import taxiPooling from '../assets/images/taxiPooling.png';
import booking from '../assets/images/BookingandHiring.png';
import transparentDocument from '../assets/images/TransparentDocument.png'; 
const features=[
{
    id:1,
    num:"01",
    title:"taxi pooling",
    image:taxiPooling,
    delay:"0",
    description:"Cab booking has become an essential part of modern life, is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's"
},
{
    id:2,
    num:"02",
    title:"booking and hiring",
    image:booking,
    delay:"300",
    description:"Cab booking has become an essential part of modern life, is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's"
},
{
    id:3,
    num:"03",
    title:"Transparent document",
    image:transparentDocument,
    delay:"600",
    description:"Cab booking has become an essential part of modern life, is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's"
}
]

const Features = () => {
  return (
    <div className=' h-fit md:h-screen lg:h-screen xl:h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row lg:gap-2 xl:gap-10 items-center lg:px-2 xl:px-5 ' >
        <div className='pb-7 w-full sm:w-full lg:w-1/4 xl:w-2/5  text-center '>
            <p className='text-5xl font-semibold'>Our Key Features</p>
            <p className='text-center text-lg px-4 sm:px-4 md:px-0 lg:px-0 xl:px-4 mt-5'>Cab booking has become an essential part of modern life, 
               is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's easier than ever to book a ride from your smartphone and get to your destination quickly and safely.</p>
               <div className='text-center mt-4 sm:mt-4 md:mt-5 lg:mt-10 xl:mt-10'>
               <button className='bg-green-500 shadow-lg text-xl shadow-green-200 px-10 py-2 rounded-md text-white ' >Learn More</button>
               </div>
        </div>
        <div className='w-full sm:w-full sm:mt-10 mb-10  lg:w-3/4 xl:w-3/5 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-start sm:justify-start md:justify-around lg:justify-around xl:justify-around'>
{
    features.map((item)=>(
        <FeatureCard key={item.id} num={item.num} title={item.title} image={item.image} delay={item.delay} description={item.description} />
    ))
}            
        </div>
    </div>
  )
}

export default Features
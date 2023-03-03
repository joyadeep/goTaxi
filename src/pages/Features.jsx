import React from 'react'
import { FeatureCard } from '../components/FeatureCard'
import taxiPooling from '/assets/images/taxiPooling.png';
import booking from '/assets/images/BookingandHiring.png';
import transparentDocument from '/assets/images/TransparentDocument.png'; 
const features=[
{
    id:1,
    num:"01",
    title:"taxi pooling",
    image:taxiPooling,
    description:"Cab booking has become an essential part of modern life, is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's"
},
{
    id:2,
    num:"02",
    title:"booking and hiring",
    image:booking,
    description:"Cab booking has become an essential part of modern life, is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's"
},
{
    id:3,
    num:"03",
    title:"Transparent document",
    image:transparentDocument,
    description:"Cab booking has become an essential part of modern life, is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's"
}
]

const Features = () => {
  return (
    <div className=' flex gap-10 items-center px-5 h-screen ' >
        <div className='w-2/5  text-center'>
            <p className='text-5xl font-semibold'>Our Key Features</p>
            <p className='text-lg mt-5'>Cab booking has become an essential part of modern life, 
               is often overcrowded or inconvenient. With the rise of ride-sharing apps like Uber, Lyft, and Grab, it's easier than ever to book a ride from your smartphone and get to your destination quickly and safely.</p>
               <div className='text-center mt-10'>
               <button className='bg-green-500 shadow-lg text-xl shadow-green-200 px-10 py-2 rounded-md text-white ' >Learn More</button>
               </div>
        </div>
        <div className='w-3/5 flex  justify-around'>
{
    features.map((item)=>(
        <FeatureCard key={item.id} num={item.num} title={item.title} image={item.image} description={item.description} />
    ))
}            
        </div>
    </div>
  )
}

export default Features
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'


const Carousel = () => {
  return (
    <div className='font-pro mb-20'>
        <img className='object-cover h-full w-full  md:w-full md:h-[480px]' src="https://www.somoselcafe.com.ar/img/novedades/14.webp" alt="" />
        <div className='mt-[-150px] md:mt-[-300px] md:ml-[200px] text-white font-thun pl-5'>
        <p className='text-[#C8A178]'>Cafe delicioso</p>
        <p className='text-2xl md:text-5xl md:mt-2'>Cafe Fresco Tostado</p>
        <RouterLink to='/signin'>
        <button className='absolute md:mt-5 bg-[#C8A178] text-white  p-2 rounded-full w-36 h-8 mt-3 font-thin flex items-center justify-center'>Comprar Ahora</button>
        </RouterLink>
        
        </div>
    </div>
  )
}

export default Carousel
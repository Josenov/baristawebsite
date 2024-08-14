import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
useSelector


const Carousel = () => {

  let user = useSelector(store=>store.userReducer.user);

  return (
    <div className='font-pro mb-20'>
        <img className='object-cover h-full w-full  md:w-full md:h-[480px]' src="https://www.somoselcafe.com.ar/img/novedades/14.webp" alt="" />
        <div className='mt-[-150px] md:mt-[-300px] md:ml-[100px] text-white font-thun pl-5'>
        <p className='text-[#C8A178]'>Cafe delicioso</p>
        <p className='text-2xl md:text-5xl md:mt-2'>Cafe Fresco Tostado</p>
        <RouterLink to={user?'/specialProducts':'signin'}>
        <button className='absolute md:mt-5 bg-[#C8A178] text-white  p-2 rounded-full w-36 h-8 mt-3 font-thin flex items-center justify-center'>Comprar Ahora</button>
        </RouterLink>
        
        </div>
    </div>
  )
}

export default Carousel
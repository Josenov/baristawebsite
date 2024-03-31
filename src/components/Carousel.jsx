import React from 'react'

const Carousel = () => {
  return (
    <div className=''>
        <img className='object-cover w-full md:h-[480px]' src="public/14.png" alt="" />
        <div className='mt-[-150px] md:mt-[-300px] md:ml-[200px] text-white font-semibold pl-5'>
        <p className='text-[#C8A178]'>Cafe delicioso</p>
        <p className='text-4xl'>HOLA CARLITA</p>
        <button className='absolute bg-[#C8A178] text-white  p-2 rounded-full w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Comprar Ahora</button>
        </div>
    </div>
  )
}

export default Carousel
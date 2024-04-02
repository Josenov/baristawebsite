import React from 'react'
import {AiFillStar} from "react-icons/ai"

const SpecialProductCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center rounded-lg mb-24">
            
            <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
            {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                <div className='flex items-center justify-center flex-col rounded-lg'>
                <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-10-800x800.png" alt="" />
                <div className='flex mt-2 p-2'>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                </div>
                <p className='text-lg'>Cafe Corretto</p>
                <div className='flex items-center'>
                <p className='text-lg font-bold'>$10000</p>
                {/* <del className='text-sm text-slate-500'>$6500</del> */}
                </div>
                
                </div>
               
            </div>
        </div>
  )
}

export default SpecialProductCard
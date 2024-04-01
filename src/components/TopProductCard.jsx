import React from 'react'
import {AiFillStar} from "react-icons/ai"

const TopProductCard = () => {
    return (
        <div className="flex flex-wrap items-center justify-center rounded-lg mb-24">
            
            <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
            <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p>
                <div className='flex items-center justify-center flex-col rounded-lg'>
                <img className='object-cover h-1/2' src="https://e7.pngegg.com/pngimages/583/473/png-clipart-caffe-mocha-latte-cream-irish-coffee-coffee-cream-recipe-thumbnail.png" alt="" />
                <div className='flex mt-2 p-2'>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                    <AiFillStar className='h-3 text-[#C8A178]'/>
                </div>
                <p className='text-lg'>Cafe Irlandes</p>
                <div className='flex items-center'>
                <p className='text-lg'>$5000</p>
                <del className='text-sm text-slate-500'>$6500</del>
                </div>
                
                </div>
               
            </div>
        </div>
    )
}

export default TopProductCard
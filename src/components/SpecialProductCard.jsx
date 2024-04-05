import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SpecialProductCard = () => {
  return (

    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
        dynamicBullets: true


      }}
      modules={[Pagination, Navigation]}
      className="mySwiper rounded-md  w-screen text-center flex items-center justify-center   md:hidden " >
    
    
    
      <div className="flex items-center justify-center text-center ">

        <SwiperSlide className=" w-[200px] h-[350px] flex items-center justify-center rounded-lg mb-5">
          {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
          <div className='flex items-center justify-center flex-col rounded-lg'>
            <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-10-800x800.png" alt="" />
            <div className='flex mt-2 p-2'>
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
            </div>
            <p className='text-lg'>Cafe Corretto Indonesia</p>
            <div className='flex items-center'>
              <p className='text-lg font-bold'>$10000</p>
              {/* <del className='text-sm text-slate-500'>$6500</del> */}
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
          {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
          <div className='flex items-center justify-center flex-col rounded-lg'>
            <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-11.png" alt="" />
            <div className='flex mt-2 p-2'>
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
            </div>
            <p className='text-lg'>Cafe Corretto Brazil</p>
            <div className='flex items-center'>
              <p className='text-lg font-bold'>$12000</p>
              {/* <del className='text-sm text-slate-500'>$6500</del> */}
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
          {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
          <div className='flex items-center justify-center flex-col rounded-lg'>
            <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png" alt="" />
            <div className='flex mt-2 p-2'>
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
            </div>
            <p className='text-lg'>Cafe Corretto Colombia</p>
            <div className='flex items-center'>
              <p className='text-lg font-bold'>$10000</p>
              {/* <del className='text-sm text-slate-500'>$6500</del> */}
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
          {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
          <div className='flex items-center justify-center flex-col rounded-lg'>
            <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png" alt="" />
            <div className='flex mt-2 p-2'>
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
              <AiFillStar className='h-3 text-[#C8A178]' />
            </div>
            <p className='text-lg'>Cafe Corretto Ethiopia</p>
            <div className='flex items-center'>
              <p className='text-lg font-bold'>$20000</p>
              {/* <del className='text-sm text-slate-500'>$6500</del> */}
            </div>

          </div>
        </SwiperSlide>
      </div>
    </Swiper>

  )
}

export default SpecialProductCard
import React, { useEffect, useState } from 'react'
import axios from "axios"

import { AiFillStar } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SpecialProductCard = () => {

  const [specialProducts, setSpecialProducts] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/api/specialProducts')
      .then(response => setSpecialProducts(response.data.specialProductsList))
      .catch(err => console.log(err))
  }, [])

  console.log(specialProducts)

  return (

    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        768:{
            slidesPerView:4,
            centeredSlides:true,
            loop:true,
            

        }
    }}  
      pagination={{
        clickable: true,
        dynamicBullets: true


      }}
      modules={[Pagination, Navigation]}
      className="mySwiper rounded-md  w-screen text-center flex items-center justify-center    " >

<div className="flex items-center justify-center text-center ">
        {
          specialProducts?.map((specialProduct) => {
            return (

              <SwiperSlide key={specialProduct._id} className=" w-[200px] h-[450px] flex items-center justify-center rounded-lg mb-5">
                {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                <div className='flex items-center justify-center flex-col rounded-lg'>
                  <img className='object-cover h-64' src={specialProduct.image} alt="" />
                  <div className='flex mt-2 p-2'>
                    <AiFillStar className='h-3 text-[#C8A178]' />
                    <AiFillStar className='h-3 text-[#C8A178]' />
                    <AiFillStar className='h-3 text-[#C8A178]' />
                    <AiFillStar className='h-3 text-[#C8A178]' />
                    <AiFillStar className='h-3 text-[#C8A178]' />
                  </div>
                  <p className='text-lg'>{specialProduct.title}</p>
                  <button className='p-3 rounded-full md:w-36 h-8 mt-3  flex items-center justify-center text-sm bg-[#C8A178] text-white'>Mas Info</button>
                  <div className='flex items-center'>
                    <p className='text-2xl font-bold mt-2'>$ {specialProduct.price}</p>
                    {/* <del className='text-sm text-slate-500'>$6500</del> */}
                  </div>

                </div>
              </SwiperSlide>

            )


          })
        }




      </div>

      
    </Swiper>

  )
}

export default SpecialProductCard
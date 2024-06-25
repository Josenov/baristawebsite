import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import CartContext from '../context/CartContext';
import { AiFillStar } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";


const SpecialProductCard = () => {

  const {addToCart, cartSpecialProducts} = useContext(CartContext);

  const [specialProducts, setSpecialProducts] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/api/specialProducts')
      .then(response => setSpecialProducts(response.data.specialProductsList))
      .catch(err => console.log(err))
  }, [])

  

 // console.log(specialProducts)

  return (

    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      
      spaceBetween={0}
      breakpoints={{
        768:{
            slidesPerView:5,
            centeredSlides:true,
            loop:true,
            

        }
    }}  
      pagination={{
        clickable: true,
        dynamicBullets: true


      }}
      navigation = {{
        clickable:true
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper rounded-md  w-screen text-center flex items-center justify-center    " >

<div className="flex items-center justify-center text-center   ">
        {
          specialProducts?.map((specialProduct) => {
            return (

              <SwiperSlide key={specialProduct._id} className="  rounded-lg mb-5">
                {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                <div className='grid grid-rows-[auto, auto, auto, auto, auto]  justify-items-center h-[500px]  rounded-lg'>
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
                  <button onClick={()=>addToCart(specialProduct)} className=' flex justify-center items-center border-2 border-[#C8A178] rounded-lg  w-16 mt-3'><FaCartPlus className='w-8 h-8 text-[#C8A178] ' /></button>
                  
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
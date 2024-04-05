import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const TopCategoryCard = () => {
    return (
        <Swiper

        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
            clickable:true,
            dynamicBullets:true
            
            
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-md  w-screen text-center flex items-center justify-center  h-56 md:hidden " >

            <div className="flex w-full items-center justify-center md:gap-5 font-bold">
                <SwiperSlide className='ml-2 '>
                    <img src="https://media.istockphoto.com/id/1411994205/es/foto/caf%C3%A9-moca-helado-con-crema-en-un-vaso-alto-y-granos-de-caf%C3%A9-portafiltro-tamper-y-jarra-de.jpg?s=612x612&w=0&k=20&c=G4-ZrqUMguJ1PXTC_P8YT4pnaoOwEpAwmCfErGstOR8=" className="h-48 w-72 object-cover rounded-xl" alt="" />
                    <p className="mt-[-130px] text-white text-4xl mb-2 ml-[-70px] font-bold ">Cafe Mocha</p>
                    <a href="" className=" text-lg ml-[-80px] text-gray-200 border border-solid bg-transparent p-1">ver más</a>
                </SwiperSlide>
                <SwiperSlide className='ml-1'>
                    <img src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/12/07/cafe-expresso.jpeg" className="h-48 w-72 object-cover rounded-xl" alt="" />
                    <p className="mt-[-130px] text-white mb-2 flex text-4xl items-center justify-center ml-[-70px] font-bold">Espresso</p>
                    <a href="" className=" text-lg ml-[-80px] text-gray-200 border border-solid bg-transparent p-1">ver más</a>
                </SwiperSlide>
                <SwiperSlide className='ml-2' >
                    <img src="https://cdn.pixabay.com/photo/2016/08/03/05/33/latte-1565931_1280.jpg" className="h-48 w-72 object-cover rounded-xl" alt="" />
                    <p className="mt-[-130px] text-white mb-2 flex text-4xl items-center justify-center ml-[-70px] font-bold">Capuccino</p>
                    <a href="" className=" text-lg ml-[-80px] text-gray-200 border border-solid bg-transparent p-1">ver más</a>
                </SwiperSlide>
            </div>
        </Swiper>

    )
}

export default TopCategoryCard
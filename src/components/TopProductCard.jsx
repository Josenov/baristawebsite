import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const TopProductCard = () => {
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
            className="mySwiper rounded-md  w-screen text-center flex items-center justify-center h-[420px] mb-20 md:hidden  mt-16 "




        >
            <div className="flex flex-wrap items-center justify-center rounded-lg ">

                <SwiperSlide className=" flex  flex-col rounded-lg ">
                    <p className='bg-[#C8A178] rounded-full text-white w-12 text-center text-sm font-sans m-2 ml-20 font-pro'>-20%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                    
                        <img className='object-cover h-64' src="https://img.freepik.com/fotos-premium/vaso-cafe-irlandes-aislado-sobre-fondo-blanco_185193-52146.jpg" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Cafe Irlandes</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$5200</p>
                            <del className='text-sm text-slate-500'>$6500</del>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                    <p className='bg-[#C8A178] rounded-full text-white w-12 text-center text-sm font-sans m-2 ml-20 font-pro'>-30%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                        <img className='object-cover h-64' src="https://i.pinimg.com/originals/5a/d5/10/5ad510d619e6c797c4914de4a72c2859.jpg" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Capuccino</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$3500</p>
                            <del className='text-sm text-slate-500'>$5000</del>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                    <p className='bg-[#C8A178] rounded-full text-white w-12 text-center text-sm font-sans m-2 ml-20 font-pro'>-10%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                        <img className='object-cover h-64' src="https://americancookiesbrasil.com.br/wp-content/uploads/2022/06/mocha.png" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Cafe Mocha</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$6375</p>
                            <del className='text-sm text-slate-500'>$7500</del>
                        </div>

                    </div>

                </SwiperSlide>
            </div>
        </Swiper>

    )
}

export default TopProductCard
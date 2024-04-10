import React from 'react'
import { BiPaperPlane, BiWallet, BiHeadphone, BiGift } from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const InfoBanner = () => {
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
            className="mySwiper   w-screen text-center flex items-center justify-center  h-36 md:hidden mt-28 mb-6"

        >
            <div className='md:hidden flex items-center justify-center'>
                <SwiperSlide className="flex flex-col gap-2 items-center">
                    <BiPaperPlane className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p className="text-sm">ENVIO SIN CARGO</p>
                        <p className="text-gray-400 text-sm md:text-md">en compras por encima de $10000</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="flex flex-col gap-2 items-center">
                    <BiWallet className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p className="text-sm">CONTRA REEMBOLSO</p>
                        <p className="text-gray-400 text-sm md:text-md">Tu compra protegida 100%</p>
                    </div>

                </SwiperSlide>
            

            
                <SwiperSlide className="flex flex-col gap-2 items-center">
                    <BiGift className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p className="text-sm">CUPONES DE DESCUENTO</p>
                        <p className="text-gray-400 text-sm md:text-md">Ofrecemos cupones especiales</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="flex flex-col gap-2 items-center">
                    <BiHeadphone className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p className="text-sm">ATENCION AL CLIENTE 24/7</p>
                        <p className="text-gray-400 text-sm md:text-md">Llamanos al 0800-888-888</p>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    )
}

export default InfoBanner
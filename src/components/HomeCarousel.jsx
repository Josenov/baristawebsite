import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const HomeCarousel = () => {
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
            className="mySwiper rounded-md  w-screen text-center flex items-center justify-center  h-full md:hidden mt-[-50px] " >



            <div className="flex items-center justify-center text-center  ">
                
                <SwiperSlide>
                    <img className="h-96 object-cover w-full" src="https://img.freepik.com/foto-gratis/vista-maquina-hacer-cafe_23-2150698727.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96 object-cover  w-full" src="https://cafeplatino.com/wp-content/uploads/2022/01/como-hacer-un-capuccino-perfecto-.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96 object-cover w-full" src="https://img.freepik.com/fotos-premium/mano-barista-cafe-vertido-taza-cafeteria-cafetera-maquina-closeup-portafiltro-profesional-ai-generativa_771335-59187.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96 object-cover w-full" src="https://www.somoselcafe.com.ar/img/novedades/20.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96 object-cover w-full" src="https://s0.smartresize.com/wallpaper/738/342/HD-wallpaper-coffee-coffee-maker-hands-barista.jpg" alt="" />
                </SwiperSlide>

            </div>
        </Swiper>
    )
}

export default HomeCarousel
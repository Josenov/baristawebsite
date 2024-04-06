import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const BlogCard = () => {
    return (

        <Swiper
            centeredSlides={true}
            loop={true}
            slidesPerView={1} 
            spaceBetween={10}
            breakpoints={{
                768:{
                    slidesPerView:3,
                    centeredSlides:true,
                    loop:true,
                    

                }
            }}  
            pagination={{
                clickable: true,
                dynamicBullets: true


            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-96  rounded-md md:w-[990px] h-[650px]    md:h-[550x]  mt-10" >

            <div className='mb-10'>
                <SwiperSlide className="max-w-sm md:w-full rounded  shadow-lg">
                    <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/1134471347/photo/couple-relaxing-in-a-cafe.jpg?s=612x612&w=0&k=20&c=1VQ5AKVNA9PoE2OhYLU9bPKcYP7GmgUHShxPMiB3On8=" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Encuentro de almas afines</div>
                        <p className="text-gray-700 text-base">
                            "Moonbean no es solo un lugar para tomar café, es un punto de encuentro para almas afines. Me encanta venir aquí y sumergirme en conversaciones profundas con amigos nuevos y viejos. La variedad de bebidas es impresionante, pero lo que realmente destaca..."
                        </p>
                        <button className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cafe</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigos</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#moonbean</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full rounded-lg" src="https://t4.ftcdn.net/jpg/03/21/81/99/360_F_321819999_XAqAPgIi23WC2bCIKGyMdwOWK2HXWX1t.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Lo recomendare a mis amigos</div>
                        <p className="text-gray-700 text-base">
                            "MoonBean es mi lugar favorito para relajarme después de un largo día. El ambiente acogedor y la deliciosa variedad de cafés hacen que siempre vuelva por más. El personal es super amable y lo mejor..."
                        </p>
                        <button className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cafe</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigos</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#moonbean</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full rounded-lg" src="https://nypost.com/wp-content/uploads/sites/2/2022/05/coffee-daily-longer-life-feat-image.jpg?quality=75&strip=all&w=744" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Increible Experiencia!</div>
                        <p className="text-gray-700 text-base">
                            "¡Qué descubrimiento MoonBean! Desde que lo encontré, se ha convertido en mi refugio para disfrutar de un buen café y un ambiente tranquilo para trabajar. La calidad del café es excepcional, y la variedad de opciones siempre me sorprende. Además..."
                        </p>
                        <button className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cafe</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigos</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#moonbean</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/1466610287/photo/three-young-women-smiling-looking-at-camera-in-a-coffee-shop-a-group-of-multiracial-happy.webp?b=1&s=170667a&w=0&k=20&c=dFIyJ2UPf9ajBSqRHnV2rPiFufBicfrDk2-2YaFE3Ps=" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Un lugar encantador</div>
                        <p className="text-gray-700 text-base">
                            "MoonBean es el lugar perfecto para reunirse con amigos. Nos encanta pasar horas charlando y disfrutando de los deliciosos cafés y tés que ofrecen. El personal es muy atento y siempre nos hacen sentir como en casa. Definitivamente es..."
                        </p>
                        <button className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cafe</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigos</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#moonbean</span>
                    </div>
                </SwiperSlide>
            </div>



        </Swiper>

    )
}

export default BlogCard
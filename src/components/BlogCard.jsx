import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import apiUrl from '../utils/api';



const BlogCard = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/blogs`)
            .then(response => setBlogs(response.data.blogs))
            .catch(err => console.log(err))

    }, [])

   // console.log(blogs)
    return (

        <Swiper
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                768: {
                    slidesPerView: 4,
                    centeredSlides: true,
                    loop: true,


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
            className="mySwiper w-96   rounded-md md:w-screen    flex items-center justify-center mt-10" >

            <div className=''>
                {
                    blogs.map((blog) => {
                        return (
                        <SwiperSlide key={blog._id} className="max-w-sm md:w-full rounded h-[600px] mb-2  flex flex-col justify-between  shadow-lg">
                            <img className="w-full rounded-lg object-cover h-48" src={blog.image} alt="blog image" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{blog.title}</div>
                                <p className="text-gray-700 text-base">
                                    {blog.description}
                                </p>
                                <p className=" mt-5 text-sm">
                                    {blog.user}
                                </p>
                                
                            </div>

                            <div className=' px-6 pb-4'>
                            <RouterLink to='/underConstruction' className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</RouterLink>
                            </div>
                            
                            
                        </SwiperSlide>
                        )
                    })
                }


            </div>



        </Swiper>

    )
}

export default BlogCard
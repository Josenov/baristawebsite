import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import axios from 'axios';


const BlogCard = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs')
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
            className="mySwiper w-96  rounded-md md:w-screen p-2 h-screen flex items-center justify-center     mt-10" >

            <div className='mb-10  '>
                {
                    blogs.map((blog) => {
                        return (
                        <SwiperSlide key={blog._id} className="max-w-sm md:w-full rounded   shadow-lg">
                            <img className="w-full rounded-lg object-cover h-48" src={blog.image} alt="blog image" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{blog.title}</div>
                                <p className="text-gray-700 text-base">
                                    {blog.description}
                                </p>
                                <p className=" mt-5 text-sm">
                                    {blog.user}
                                </p>
                                {/* <button className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</button> */}
                            </div>
                            {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cafe</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigos</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#moonbean</span>
                            </div> */}
                        </SwiperSlide>
                        )
                    })
                }


            </div>



        </Swiper>

    )
}

export default BlogCard
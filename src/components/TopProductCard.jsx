import { useEffect, useState } from "react";
import axios from 'axios'
import { AiFillStar } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import getTopProducts from "../store/actions/topProductActions";



const TopProductCard = () => {
    

    const [categorySelected, setCategorySelected] = useState('clasicos');

    const [activeButton, setActiveButton] = useState('clasicos');

   

    const dispatch = useDispatch();

    const storeTopProducts = useSelector((storeTopProducts)=>storeTopProducts.topProductReducer.topProducts)
    /* console.log(storeTopProducts) */

    useEffect(() => {

        /* axios.get('http://localhost:8000/api/topProducts')
            .then(response => setTopProducts(response.data.topProductList))
            .catch(err => console.log(err)) */


        //Redux Async
        dispatch(getTopProducts())

    }, [])



    //console.log(topProducts)

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setCategorySelected(button);
        
    }

    const filteredProducts = storeTopProducts.filter((category) => category.category === categorySelected).map((category) => category.products)

    //console.log(filteredProducts)


    
    return (
        <>
            <div className="flex text-lg  items-center ">
                        <button onClick={() => handleButtonClick('clasicos')} className={`p-2 rounded-full md:w-36 h-8 mt-3 font-semibold flex items-center justify-center ${activeButton === 'clasicos' ? 'bg-[#C8A178] text-white' : 'text-gray-500'}`}>Clasicos</button>
                        <button onClick={() => handleButtonClick('nuevos')} className={`p-2 rounded-full md:w-36 h-8 mt-3 font-semibold flex items-center justify-center ${activeButton === 'nuevos' ? 'bg-[#C8A178] text-white' : 'text-gray-500'}`}>Nuevos</button>
                        <button onClick={() => handleButtonClick('mas_vendidos')} className={`p-2 rounded-full md:w-36 h-8 mt-3 font-semibold flex items-center justify-center ${activeButton === 'mas_vendidos' ? 'bg-[#C8A178] text-white' : 'text-gray-500'}`}>Mas vendidos</button>
                    </div>

            <Swiper
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={20}
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
                className="mySwiper rounded-md   text-center flex items-center justify-center flex-col w-screen  h-[490px]  "




            >


                <div className="flex flex-col items-center justify-center rounded-lg ">

                






                    {
                        filteredProducts.map((filteredProduct, index) => {
                            return (


                                <div key={index} className=" flex   rounded-lg justify-center items-center ">
                                    {/* <p className='bg-[#C8A178] rounded-full text-white w-12 text-center text-sm font-sans m-2 ml-20 font-pro'>-20%</p> */}

                                    { filteredProduct.map((product) => (
                                        
                                    <SwiperSlide key={product._id} className=' flex items-center justify-center flex-col rounded-lg  w-screen h-full'>



                                        <img className='object-cover h-64' src={product.image} alt="" />
                                        <div className='flex mt-2 p-2'>
                                            <AiFillStar className='h-3 text-[#C8A178]' />
                                            <AiFillStar className='h-3 text-[#C8A178]' />
                                            <AiFillStar className='h-3 text-[#C8A178]' />
                                            <AiFillStar className='h-3 text-[#C8A178]' />
                                            <AiFillStar className='h-3 text-[#C8A178]' />
                                        </div>
                                        <div className="flex flex-col  gap-2">
                                        <p className='text-lg'>{product.title}</p>
                                        <p className='text-sm text-center md:m-4 text-gray-500 p-2'>{product.ingredients.join('  ')}</p>
                                        </div>
                                        
                                        <div className='flex items-center gap-1'>
                                            <p className='text-2xl font-bold'>$ {product.price}</p>
                                            {/* <del className='text-sm text-slate-500'>$6500</del> */}
                                        </div>

                                    </SwiperSlide>
                        )) }
                                </div>

                            )

                        })
                    }



                </div>
            </Swiper>

        </>

    )
}

export default TopProductCard
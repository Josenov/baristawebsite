import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { AiFillStar } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { addToCart } from '../store/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import CartModalPopup from './CartModalPopup';
import apiUrl from '../utils/api';
import { AiOutlineShoppingCart } from "react-icons/ai";




const SpecialProductCard = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTimeout, setModalTimeout] = useState(null);

  const dispatch = useDispatch();
  
  const  cart  = useSelector(cart => cart.cartReducer.cartProducts);

  

  const handleAddToCart = async (product) =>{

    

    try {
        const response = await dispatch(addToCart(product));

        console.log(response)

        setModalMessage(response.payload.message);

        setIsModalOpen(true);

        setModalTimeout(setTimeout(() => {
          closeModal();
        }, 2000));

        
        
        
        
        
    } catch (error) {
        setModalMessage(error.message)
    }

    

}

const closeModal = () => {
  
    setIsModalOpen(false);
  
    
    

  };

  

  

  

  const [specialProducts, setSpecialProducts] = useState();

  useEffect(() => {
    axios.get(`${apiUrl}/specialProducts`)
      .then(response => setSpecialProducts(response.data.specialProductsList))
      .catch(err => console.log(err))
  }, [])

  

 // console.log(specialProducts)

  return (
    <div>

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
      className="mySwiper rounded-md  w-screen text-center flex items-center justify-center h-full  " >

<div className="flex items-center justify-center text-center ">
        {
          specialProducts?.map((specialProduct) => {
            return (

              <SwiperSlide key={specialProduct._id} className="  rounded-lg mb-5   ">
                {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                <div className='grid grid-rows-[auto, auto, auto, auto, auto]  justify-items-center h-[500px]   rounded-lg'>
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
                  <div className='flex flex-col items-center justify-center'>
                  <p className='text-2xl font-bold mt-2'>$ {specialProduct.price}</p>
                  <div className='flex flex-col items-center justify-center'>
                  <p className='text-sm'>Agregar al carrito</p>
                  <button onClick={()=>handleAddToCart(specialProduct) } className=' flex justify-center items-center  rounded-full   w-14 h-14 border-2 border-[#C8A178] p-1 mt-2 mr-2'><AiOutlineShoppingCart className='h-8 w-8  text-[#C8A178]'   /></button>
                  
                  </div>
                  
                    
                    
                    
                    {/* <del className='text-sm text-slate-500'>$6500</del> */}
                  </div>
                  
                  
                  
                </div>
              </SwiperSlide>

            )


          })
        }




      </div>

      
    </Swiper>

    <CartModalPopup  isOpen={isModalOpen} onClose={closeModal} message={modalMessage} title={'Iniciar Sesion'}/>
    </div>
  )
}

export default SpecialProductCard
import React, { useState, useEffect } from 'react'
/* import CartContext, { CartProvider } from '../context/CartContext' */
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai'
import Sidenav from './Sidenav'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user_signout } from '../store/actions/userActions'
import { addToCart } from '../store/actions/cartActions'
import { getCartProducts } from '../store/actions/cartActions'

import Cart from './Cart'













const Header = () => {

    const [showModal, setShowModal] = useState(false);
    

    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartProducts());

    }, [dispatch])

  

    

    const userImgDefault = 'https://www.svgrepo.com/show/420331/avatar-lazybones-sloth.svg'

    


    const user = useSelector(store => store.userReducer.user)

    const toggleModal = () => {
        setShowModal(!showModal);
        console.log("Modal state:", !showModal); // Verifica si el estado cambia
    };

    
    const handleSignOut = () => {
        dispatch(user_signout());
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false); // Cierra el modal sin cerrar sesión
    };

    


    return (
        <>

            

            <div className='h-24 w-full  flex items-center justify-between gap-5  bg-[#F9F6F1] p-4 fixed md:relative z-10 '>

                

                <div className='hidden md:flex md:items-center md:gap-2 '>
                    <AiOutlinePhone className='w-8 h-8 text-[#C8A178]' />
                    <div className='flex flex-col text-xs font-bold font-pro'>
                        <p>Estamos para ayudarte</p>
                        <p>Tel.: 0800-888-888</p>
                    </div>

                </div>

                <div className='ml-[135px] md:ml-1'>
                <RouterLink to='/' >
                    <img src="/coffeelogo.png" className='w-16 h-16 md:w-20 md:h-20' alt="" />
                </RouterLink>
                </div>







                <div className='flex items-center gap-2 '>
                
                    <RouterLink to={user?'/':'/signin'} className=''> {user ? 
                    
                    <div className='flex gap-2 items-center font-pro md:ml-[-140px] '>
                        <div className='flex flex-col  items-center'>
                        <p className='hidden md:flex '>Hola</p> 
                        <p className='hidden md:flex '>{user.name}!</p> 
                            
                        </div>
                        
                        <img onClick={toggleModal}  className='md:h-12 md:w-12 w-10 h-10 rounded-full flex items-center justify-center mt-2' src={user.image?user.image:userImgDefault} alt="" />
                        
                        
                        </div> 
                        : <AiOutlineUser className='w-8 h-8 text-[#C8A178]' />}</RouterLink>
                    <div className='flex items-center mt-5'>  <Cart /> </div>
                    <div className='hidden md:flex md:flex-col text-xs font-bold font-pro'>
                        <p>Compra en linea</p>
                        <p>Envio sin cargo</p>
                    </div>
                </div>


            </div>


            <div className=' h-12  bg-[#C8A178] flex items-center justify-between font-pro'>
                <div className='hidden font-thin text-sm md:flex gap-5 pl-20'>
                    <RouterLink to="/">HOME</RouterLink>
                    <a href="">MOCKA HELADO</a>
                    <a href="">ESPRESSO</a>
                    <a href="">CAPUCCINO</a>
                    <a href="">MAS</a>
                    <a href="">BLOGS</a>
                </div>
                <div className='flex items-center pl-3 md:pr-10 gap-1'>
                    <input className='rounded-full w-48 h-8 md:w-56 pl-5 text-black' type="text" placeholder='buscar...' />
                    <AiOutlineSearch className='h-6 w-6 text-white' />
                </div>



            </div>

            <Sidenav className="md:hidden" />

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg font-pro h-56 flex items-center justify-center flex-col border-1 border-red-600">
                    
                        <p className="mb-6 text-xl">¿Quieres cerrar sesión?</p>
                        <div className="flex gap-4">
                            <button
                                onClick={handleSignOut}
                                className="bg-[#C8A178] text-white py-2 px-4 rounded"
                            >
                                Cerrar Sesión
                            </button>
                            <button
                                onClick={handleCancel}
                                className="bg-gray-500 text-white py-2 px-4 rounded"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Header
import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai'
import Sidenav from './Sidenav'
import { Link as RouterLink } from 'react-router-dom'



const Header = () => {
    return (
        <>

            <div className='h-24 w-full  flex items-center justify-center bg-[#F9F6F1]  md:justify-between md:p-4 fixed md:relative z-[99]'>
                        
                <div className='hidden md:flex md:items-center md:gap-2'>
                    <AiOutlinePhone className='w-8 h-8 text-[#C8A178]' />
                    <div className='flex flex-col text-sm'>
                    <p>Estamos para ayudarte</p>
                    <p>Tel.: 0800-888-888</p>
                    </div>
                    
                    
                </div>

                <RouterLink to='/'>
                <img src="/coffeelogo.png" className='w-16 h-16 md:w-20 md:h-20' alt="" />
                </RouterLink>
                
                
                
                <div className='hidden md:flex gap-5'>
                    <a href=""> <AiOutlineUser className='w-8 h-8 text-[#C8A178]' /></a>
                    <a href=""><AiOutlineShoppingCart className='w-8 h-8 text-[#C8A178]' /></a>
                    
                    
                    
                    <div className='text-xs'>
                    <p>Compra en linea</p>
                    <p>Envio sin cargo</p>
                    </div>
                </div>


            </div>
            <div className=' h-12  bg-[#C8A178] flex items-center justify-between font-pro'>
                <div className='hidden font-thin text-sm md:flex gap-5 pl-20'>
                    <a href="">HOME</a>
                    <a href="">MOCKA HELADO</a>
                    <a href="">ESPRESSO</a>
                    <a href="">CAPUCCINO</a>
                    <a href="">MAS</a>
                    <a href="">BLOGS</a>
                </div>
                <div className='flex items-center pl-3 md:pr-10 gap-1'>
                    <input className='rounded-full w-48 h-8 md:w-56 pl-5 text-black' type="text" placeholder='buscar...' />
                    <AiOutlineSearch className='h-6 w-6 text-white'/>
                </div>

                
                
            </div>
            
            <Sidenav className="md:hidden"/>

        </>
    )
}

export default Header
import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai'
import Sidenav from './Sidenav'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'





const Header = () => {


    const user = useSelector(store => store.userReducer.user)
    console.log(user)

    /* const userImageDefault =  */


    return (
        <>

            

            <div className='h-24 w-full  flex items-center  bg-[#F9F6F1]  justify-between p-4 fixed md:relative z-[99]'>

                

                <div className='hidden md:flex md:items-center md:gap-2 '>
                    <AiOutlinePhone className='w-8 h-8 text-[#C8A178]' />
                    <div className='flex flex-col text-xs font-bold font-pro'>
                        <p>Estamos para ayudarte</p>
                        <p>Tel.: 0800-888-888</p>
                    </div>

                </div>

                <div className='flex ml-32 md:ml-0'>
                <RouterLink to='/'>
                    <img src="/coffeelogo.png" className='w-16 h-16 md:w-20 md:h-20' alt="" />
                </RouterLink>
                </div>







                <div className='flex  gap-2'>
                
                    <RouterLink to="/signin" className=''> {user ? <div className='flex gap-2 items-center font-pro '><p className='hidden md:flex'>{user.name}</p>  <img className='h-10 w-10 rounded-full' src={user.image} alt="" /></div> : <AiOutlineUser className='w-8 h-8 md:text-[#C8A178]' />}</RouterLink>
                    <RouterLink to="/signin"><AiOutlineShoppingCart className='w-8 h-8 md:text-[#C8A178]' /></RouterLink>
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

        </>
    )
}

export default Header
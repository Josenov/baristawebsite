import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const ItemCart = ({ item }) => {
    const { addToCart, deleteItemToCart } = useContext(CartContext)
    /* const { id } = item; */
    return (
        <div className='h-[150px] bg-[#fafafa] flex m-4 items-center justify-center gap-8 text-black rounded-lg'>
            <img className='h-32 w-32' src={item.image} alt="" />

            <div>
                <div className='flex flex-col'>
                    <p>{item.name}</p>
                    <div className='flex'>
                    <p className='text-sm mr-2'>Precio: ${item.price}</p>
                    <p className='text-sm'>Cantidad:</p>
                    <div className='h-5 w-5 top-5 right-0 bg-red-500 text-white rounded-full flex items-center justify-center font-bold font-pro text-[12px] ml-1'>
                        
                          <p>{item.amount}</p>
                          </div>
                    </div>
                    
                    <div className='flex gap-2 items-center justify-center'>
                        <button onClick={() => addToCart(item)} className='p-3 rounded-full md:w-16 h-1 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white' >Agregar</button>
                        <button onClick={() => deleteItemToCart(item)} className='p-3 rounded-full md:w-16 h-1 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white'>Sacar</button>
                    </div>
                </div>
                <div className='mt-4 text-center'>

                    <p>Total $ {item.amount * item.price}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemCart
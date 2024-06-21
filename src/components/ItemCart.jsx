import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const ItemCart = ({ item }) => {
    const { addToCart, deleteItemToCart } = useContext(CartContext)
    const { id } = item;
    return (
        <div className='h-[200px] bg-[#3a3a3a] flex mt-2 items-center justify-center gap-16'>
            <img className='h-32 w-32' src={item.image} alt="" />

            <div>
                <div>
                    <p>{item.name}</p>
                    <div className='h-5 w-5 top-5 right-0 bg-red-500 text-white rounded-full flex items-center justify-center font-bold font-pro text-[12px]'> {item.amount}</div>
                    <div className='flex'>
                        <button onClick={() => addToCart(item)} className='p-3 rounded-full md:w-16 h-1 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white' >Agregar</button>
                        <button onClick={() => deleteItemToCart(item)} className='p-3 rounded-full md:w-16 h-1 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white'>Sacar</button>
                    </div>
                </div>
                <div>

                    <p>Total $ {item.amount * item.price}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemCart
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editItemToCart, addToCart } from '../store/actions/cartActions'
import { getCartProducts } from '../store/actions/cartActions'



const ItemCart = ({ item }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartProducts());

    }, [dispatch])

    

    
    

    const [localAmount, setLocalAmount] = useState(item.amount);

    

    const {amount} = item

    useEffect(() => {
        setLocalAmount(item.amount);
        
    }, [item.amount]);

    

    const handleEditItem =  (id, query) => {
        if (query === "add") {
            setLocalAmount(prevAmount => prevAmount + 1);
            
        } else if (query === "del" && localAmount > 0) {
            setLocalAmount(prevAmount => prevAmount - 1);
            
            
            
        } 
       
        
        dispatch(editItemToCart({ id, query, amount }));
       

        

        
        
        
    };


    if (localAmount <= 0) {
        return null ;
    }

    

    console.log(localAmount)


    
    

    
    

    
    
    

    

    



    return (
        <div className='md:max-h-[200px] m-5 p-2  bg-[#fafafa] flex md:m-4  items-center justify-center md:gap-8 text-black rounded-lg'>
            <div className=''>
            <img className='h-32 w-32 object-cover ' src={item.image} alt={item.title} />
            </div>

            <div>
                <div className='flex flex-col w-56 '>
                    <p className='mb-2'>{item.title}</p>
                    <div className='flex gap-1'>
                        <p className='text-sm mr-2'>Precio: ${item.price}</p>
                        <p className='text-sm'>Cantidad:</p>
                        <div className='h-5 w-5 top-5 right-0 bg-red-500 text-white rounded-full flex items-center justify-center font-bold font-pro text-[12px] ml-1'>

                            <p>{localAmount}</p>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center justify-center'>
                        <button onClick={() => handleEditItem(item._id, "add")} className='p-3 w-[90px] rounded-full md:w-16 h-[48px] md:h-1 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white' >Agregar</button>
                        <button onClick={() => handleEditItem(item._id, "del")} className='p-3 w-[90px] rounded-full md:w-16 h-[48px] md:h-1 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white'>Sacar</button>
                    </div>
                </div>
                <div className='mt-4 text-center'>

                    <p>Total $ {localAmount * item.price}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemCart




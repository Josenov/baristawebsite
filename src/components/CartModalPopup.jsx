import React from 'react'
import { useSelector } from 'react-redux';


const CartModalPopup = ({title,  isOpen, onClose, message }) => {
  
    const cartItems = useSelector(state => state.cartReducer.cartProducts);
    console.log(cartItems)
    const okImg = 'https://cdn-icons-png.flaticon.com/512/7595/7595571.png'
    const deniedImg = 'https://static-00.iconduck.com/assets.00/denied-icon-1024x1024-2uhyid6q.png'
    

    return (
        <div
            className={`fixed z-10 inset-0  ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="flex items-center justify-center min-h-screen text-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-48 h-54">
                    
                    <div className="flex flex-col items-center justify-center">
                        <img className='h-24 w-24 mb-5' src={cartItems?okImg:deniedImg}alt="" />
                        <p className="text-gray-700 text-center w-48 text-sm">{message?message:'Producto Agregado!'}</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CartModalPopup
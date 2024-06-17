import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
useSelector





const ModalPopup = ({ isOpen, onClose, message }) => {

    let user = useSelector(store=>store.userReducer.user);
    const okImg = 'https://cdn-icons-png.flaticon.com/512/7595/7595571.png'
    const deniedImg = 'https://static-00.iconduck.com/assets.00/denied-icon-1024x1024-2uhyid6q.png'

    return (
        <div
            className={`fixed z-10 inset-0  ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="flex items-center justify-center min-h-screen text-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="flex justify-end">
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className='h-36 w-36 mb-5' src={user?okImg:deniedImg}alt="" />
                        <p className="text-gray-700 text-center w-48">{message}</p>
                        {!user? <Link
                            
                            to="/signin"
                            className="bg-[#C8A178] hover:bg-[#B0662E] text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Iniciar sesión
                        </Link>: null
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPopup
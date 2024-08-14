import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

const UnderConstructionPage = () => {
    return (
        <div className="flex items-center justify-center mt-20 md:m-12  font-pro">
            <div className="text-center">
            
                <div className="inline-block p-6 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Página en Construcción</h1>
                    <p className="text-gray-600">Estamos trabajando en ello. ¡Vuelve pronto!</p>
                    
                    
                    <div className="mt-6 flex flex-col mb- items-center justify-center">
                    <RouterLink to='/'  className=" border border-solid border-black p-2 bg-transparent text-black font-thin rounded-md ">Volver a Home</RouterLink>
                        <img className='h-36 mt-5' src="./coffeelogo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnderConstructionPage
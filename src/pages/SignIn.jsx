import React from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { user_image } from '../store/actions/userActions'






const SignIn = () => {

    const dispatch = useDispatch();

    const handleSignIn = () =>{

        const userData = {
            image: "https://josenovillo.netlify.app/assets/portfolio-pic-d01024c8.jpg"
        }
    
        dispatch(user_image(userData))

    }

    

    return (
        <>


            <div className="bg-gray-100 flex flex-col md:flex-row justify-center items-center  h-screen font-pro">

                <RouterLink to='/'  className="md:hidden border border-solid border-black p-2 bg-transparent text-black font-thin rounded-md ">Volver a Home</RouterLink>

                <div className="w-1/2 h-screen hidden lg:block">
                    <img className="object-cover h-full w-full" src="https://w0.peakpx.com/wallpaper/162/1011/HD-wallpaper-coffee-by-window-street-coffee-window-cup-ai-art.jpg" alt="Placeholder Image"  />
                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 font-thin">
                    <h1 className="text-2xl font-semibold mb-4">Inicio de Sesión</h1>
                    <div action="#" method="POST">

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">Correo Electronico</label>
                            <input type="text" id="email" name="email" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-[#B0662E]" autoComplete="off" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Contraseña</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-[#B0662E]" autoComplete="off" />
                        </div>

                        

                        <div className="mb-6 text-[#B0662E]">
                            <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button onClick={handleSignIn} type="submit" className="bg-[#C8A178] hover:bg-[#B0662E] text-white font-semibold rounded-md py-2 px-4 w-full">Iniciar Sesión</button>
                    </div>

                    <div className="mt-6 text-[#B0662E] text-center">
                        <RouterLink to='/signup' className="hover:underline">Crear Cuenta</RouterLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SignIn
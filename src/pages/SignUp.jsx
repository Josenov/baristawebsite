import axios from 'axios';
import React, { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import ModalPopup from '../components/ModalPopup';




const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '', 
        email: '',
        password: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleInput = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        
    }
    console.log(formData)

    const handleSignUp = async (event) =>{
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/auth/signup', formData)
            console.log(response)
            
            setModalMessage(response.data.message);

            if(response.data.success == true) {

                
                setIsModalOpen(true);
                

            }

            

        } catch (error) {
            console.log(error)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/signin')
      };

    return (
        <>
            <div className="bg-gray-100 flex flex-col md:flex-row justify-center items-center h-screen font-pro">

            <RouterLink to='/'  className="md:hidden border border-solid border-black p-2 bg-transparent text-black font-thin rounded-md ">Volver a Home</RouterLink>

                <div className="w-1/2 h-screen hidden lg:block">
                    <img className="object-cover h-full w-full" src="https://w0.peakpx.com/wallpaper/162/1011/HD-wallpaper-coffee-by-window-street-coffee-window-cup-ai-art.jpg" alt="Placeholder Image" />
                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 font-thin">
                    <h1 className="text-2xl font-semibold mb-4">Crear Cuenta</h1>
                    <form onSubmit={handleSignUp} action="">

                        <div className="mb-4">
                            <label for="name" className="block text-gray-600">Nombre</label>
                            <input onChange={handleInput} type="text" id="name" name="name" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:focus:border-[#B0662E]" autocomplete="off" />
                        </div>

                        <div className="mb-4">
                            <label for="lastName" className="block text-gray-600">Apellido</label>
                            <input onChange={handleInput} type="text" id="lastName" name="lastName" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-[#B0662E]" autocomplete="off" />
                        </div>

                        <div className="mb-4">
                            <label for="email" className="block text-gray-600">Correo Electronico</label>
                            <input onChange={handleInput} type="text" id="email" name="email" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-[#B0662E]" autocomplete="off" />
                        </div>

                        <div className="mb-4">
                            <label for="password" className="block text-gray-600">Contraseña</label>
                            <input onChange={handleInput} type="password" id="password" name="password" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-[#B0662E]" autocomplete="off" />
                        </div>



                        

                        <button type="submit" className="bg-[#C8A178] hover:bg-[#B0662E] text-white font-semibold rounded-md py-2 px-4 w-full">Registrame</button>
                    </form>

                    <ModalPopup isOpen={isModalOpen} onClose={closeModal} message={modalMessage}/>

                    
                </div>
            </div>


        </>
    )
}

export default SignUp
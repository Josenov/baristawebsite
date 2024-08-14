
import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user_signin_google } from '../store/actions/userActions';
import axios from 'axios';
import ModalPopup from './ModalPopup';
import { useNavigate } from 'react-router-dom';








const GoogleSignInButton = () => {

    const navigate = useNavigate()

    let user = useSelector(store=>store.userReducer.user);

    

    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const googleButton = useRef();

    const dispatch = useDispatch();

   

    



    const handleCredentialResponse = async (response) => {
        /* console.log("Encoded JWT ID token: " + response.credential); */
        try {
            const data = {
                token_id: response.credential
            }
    
    
            const userResponse = await axios.post('http://localhost:8000/api/auth/googlesignin', data)

            dispatch(user_signin_google(userResponse.data.response))

            console.log(userResponse)

            setModalMessage(userResponse.data.message);

            setIsModalOpen(true);
        } catch (error) {
            setModalMessage(error.message)
        }

        

        /* console.log(userResponse) */




        


    }

    const closeModal = () => {
        setIsModalOpen(false);
        if(user){
            navigate('/')
        }
        

      };




    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "149119083542-dd558p48ei9049tola3g02gs6v3mfrja.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });

            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "outline", size: "large" }
            );
        }
    }, [])
    return (
        <>
        <div ref={googleButton}></div>
        <ModalPopup isOpen={isModalOpen} onClose={closeModal} message={modalMessage} title={'Iniciar Sesion'}/>
        </>
        
        
    )
}



/* const handleCredentialResponse = async (response) => {
    
    

    const data = {
        token_id: response.credential
    }


    const userResponse = await axios.post('http://localhost:8000/api/auth/googlesignin', data)

   




    dispatch(user_signin_google(userResponse.data.response))


} */
export default GoogleSignInButton




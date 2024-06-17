
import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { user_signin_google } from '../store/actions/userActions';
import axios from 'axios';





const GoogleSignInButton = () => {

    const googleButton = useRef();

    const dispatch = useDispatch();



    const handleCredentialResponse = async (response) => {
        /* console.log("Encoded JWT ID token: " + response.credential); */

        const data = {
            token_id: response.credential
        }


        const userResponse = await axios.post('http://localhost:8000/api/auth/googlesignin', data)

        /* console.log(userResponse) */




        dispatch(user_signin_google(userResponse.data.response))


    }




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
        <div ref={googleButton}></div>
    )
}

export default GoogleSignInButton
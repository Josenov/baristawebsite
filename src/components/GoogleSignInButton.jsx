import React, { useRef, useEffect } from 'react'


const GoogleSignInButton = () => {
    const googleButton = useRef();

    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
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
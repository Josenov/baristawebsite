import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';




const ProtectedRoutes = ( {children} ) => {

    

    let user = useSelector(store=>store.userReducer.user);
    /* console.log(user) */

    if(user){
        /* return <Navigate to= '/'/> */
    }
  return (
     children
  )
}

export default ProtectedRoutes
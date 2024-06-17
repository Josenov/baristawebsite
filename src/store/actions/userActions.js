import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const user_image = createAction('user_image', (obj)=>{
    return {
        payload:{
            image:obj.image
        }
    }
})

export const user_signin = createAsyncThunk ('user_signin', async (obj)=>{
    
    try {

        const {data} = await axios.post('http://localhost:8000/api/auth/signin',obj.data)
            console.log(data.message)
            localStorage.setItem('token', (data.response.token));
            localStorage.setItem('user', JSON.stringify(data.response.user));

        return {
            user:data.response.user,
            token:data.response.token,
            message:data.message,
            
        }
        
    } catch (error) {
        console.log(error)
        return {
            
                user:null,
                message:error.response.data.message,
                
            }
        
        
    }
})

export const user_signin_google = createAsyncThunk ('user_signin_google', async (obj)=>{
    const body = obj.data ? obj.data : obj

    localStorage.setItem('token', body.token)
    localStorage.setItem('user', JSON.stringify(body.user))

    return {
        user:body.user,
        token:body.token
    }
})

export const user_token = createAction ('user_token', (user)=>{
    return {
        payload:{
            user
        }
    }
})

export const user_signout = createAction ('reset', ()=>{
    localStorage.removeItem('token')

    return{
        payload:{
            payload:null
        }
    }
})
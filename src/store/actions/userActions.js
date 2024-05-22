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
            console.log(data)
            localStorage.setItem('token', (data.response.token));
            localStorage.setItem('user', JSON.stringify(data.response.user));

        return {
            user:data.response.user,
            token:data.response.token
        }
        
    } catch (error) {
        console.log(error)
        return {
            
                user:null
            }
        
        
    }
})
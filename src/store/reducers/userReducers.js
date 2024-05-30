import { createReducer } from "@reduxjs/toolkit";
import { user_image, user_signin, user_token, user_signout, user_signin_google } from "../actions/userActions";

const initial_state = {
    user: null,
    token:null
}

const userReducer = createReducer(initial_state, (builder)=>builder
            /* .addCase(user_image,(state, action)=>{
                return {
                    ...state,
                    image:action.payload.image
                }
            }) */

            .addCase(user_signin.fulfilled,(state, action)=>{
                return {
                    ...state,
                    user:action.payload.user,
                    token:action.payload.token
                }
            })

            .addCase(user_token,(state, action)=>{
                return {
                    ...state,
                    user:action.payload.user,
                    
                }
            })

            .addCase(user_signout,(state, action)=>{
                return {
                    ...state,
                    user:null,
                    token:null
                    
                }
            })

            .addCase(user_signin_google.fulfilled, (state, action)=>{
                return{
                    ...state,
                    user:action.payload.user,
                    token:action.payload.token
                }
            })


        )

export default userReducer;


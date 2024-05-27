import { createReducer } from "@reduxjs/toolkit";
import { user_image, user_signin, user_token, user_signout } from "../actions/userActions";

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


        )

export default userReducer;


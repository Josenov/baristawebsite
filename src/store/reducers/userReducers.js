import { createReducer } from "@reduxjs/toolkit";
import { user_image, user_signin } from "../actions/userActions";

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
        )

export default userReducer;


import { createReducer } from "@reduxjs/toolkit";
import { user_image } from "../actions/userActions";

const initial_state = {
    name: "Jose Maria",
    image: "https://josenovillo.netlify.app/assets/portfolio-pic-d01024c8.jpg"
}

const userReducer = createReducer(initial_state, (builder)=>builder
            .addCase(user_image,(state, action)=>{
                return {
                    ...state,
                    image:action.payload.image
                }
            }))

export default userReducer;


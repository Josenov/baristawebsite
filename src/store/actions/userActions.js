import { createAction } from "@reduxjs/toolkit";

export const user_image = createAction('user_image', (obj)=>{
    return {
        payload:{
            image:obj.image
        }
    }
})
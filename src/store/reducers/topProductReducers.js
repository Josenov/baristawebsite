import { createReducer } from "@reduxjs/toolkit";
import getTopProducts from "../actions/topProductActions";

const initialState = {
    topProducts : []
}

const topProductReducer = createReducer(initialState,
    (builder)=>builder
        .addCase(getTopProducts.fulfilled, (state, action)=>{
            return {
                ...state,
                topProducts:action.payload.topProducts
            }
        })
)

export default topProductReducer;
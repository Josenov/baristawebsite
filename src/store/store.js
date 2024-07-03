import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import topProductReducer from "./reducers/topProductReducers";
import cartReducer from "./reducers/cartReducer";


export const store = configureStore({
    reducer:{
        userReducer:userReducer,
        topProductReducer:topProductReducer,
        cartReducer:cartReducer,

    }
})
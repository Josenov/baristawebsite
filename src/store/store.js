import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import topProductReducer from "./reducers/topProductReducers";

export const store = configureStore({
    reducer:{
        userReducer:userReducer,
        topProductReducer:topProductReducer

    }
})
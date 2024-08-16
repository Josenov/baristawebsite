import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../utils/api";

const getTopProducts = createAsyncThunk ('getTopProducts', async()=>{
    try {
        const response = await axios.get(`${apiUrl}/topProducts`)
       /*  console.log(response.data) */

        return {
            topProducts:response.data.topProductList
        }
    } catch (error) {
        console.log(error)
    }
})

export default getTopProducts;
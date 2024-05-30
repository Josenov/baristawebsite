import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const getTopProducts = createAsyncThunk ('getTopProducts', async()=>{
    try {
        const response = await axios.get('http://localhost:8000/api/topProducts')
       /*  console.log(response.data) */

        return {
            topProducts:response.data.topProductList
        }
    } catch (error) {
        console.log(error)
    }
})

export default getTopProducts;
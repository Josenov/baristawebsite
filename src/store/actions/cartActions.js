import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const getCartProducts = createAsyncThunk('getCartProducts', async () => {

    try {

        const response = await axios.get('http://localhost:8000/api/cartProducts')



        return {
            cartProducts: response.data.cartProducts,

        }






    } catch (error) {
        console.log(error)
    }

})




export const addToCart = createAsyncThunk('addToCart', async (product) => {
    try {
        const { title, image, price, description } = product;
        const response = await axios.post("http://localhost:8000/api/cartProducts", {
            title,
            image,
            price,
            description
        });
        return response.data

    } catch (error) {
        console.error(error.response.data.message)
        throw error;
    }
}
);





 export const editItemToCart = createAsyncThunk('editItemToCart', async ({ id, query, amount }) => { // Include id as a parameter
    try {
        if (query === "del" && amount === 1 ) {
            await axios.delete(`http://localhost:8000/api/cartProducts/${id}`);
            return { id }; // Return the deleted item's id for reducer handling
        } else {
            await axios.put(`http://localhost:8000/api/cartProducts/${id}?query=${query}`, { amount: amount  });
            ; // Return updated information for reducer handling
            return { id, query, amount }

        }

    } catch (error) {
        console.error('Error editing item quantity:', error);
        throw error;
    }
}
); 




import { createReducer } from "@reduxjs/toolkit";
import { addToCart, editItemToCart, getCartProducts } from "../actions/cartActions";

const initialState = {

    cartProducts: []

}

const cartReducer = createReducer(initialState,
    (builder) => builder

        .addCase(getCartProducts.fulfilled, (state, action) => {

            return {
                ...state,
                cartProducts: action.payload.cartProducts
            }

        })

        .addCase(addToCart.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addToCart.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Check if item already exists in cart
            const existingItemIndex = state.cartProducts.findIndex(item => item._id === action.payload._id);
            if (existingItemIndex !== -1) {
                // If item exists, increase its quantity
                state.cartProducts[existingItemIndex].amount += action.payload.amount;
            } else {
                // If item doesn't exist, add it to cart
                state.cartProducts.push(action.payload);
            }
        })
        .addCase(addToCart.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })

        

        .addCase(editItemToCart.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const { id, query, amount } = action.payload;
            const updatedItemIndex = state.cartProducts.findIndex(item => item._id === id);
            if (updatedItemIndex !== -1) {
                if (query === "add") {
                    state.cartProducts[updatedItemIndex].amount += amount;
                    
                } else  if(query === "del") {
                    state.cartProducts[updatedItemIndex].amount -= 1;
                    // If amount goes to zero, remove the item from cart
                    if (state.cartProducts[updatedItemIndex].amount <= 0) {
                        state.cartProducts[updatedItemIndex].amount = 0 
                        /* state.cartProducts.splice(updatedItemIndex, 1)  */
                    }
                }
            } else {
                console.log('Producto no encontrado en el carrito:', id);
            }
        })
        .addCase(editItemToCart.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })

        


);

export default cartReducer;







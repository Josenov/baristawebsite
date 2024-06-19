import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const [specialProducts, setSpecialProducts] = useState([])

    const getSpecialProducts = async () => {
        await axios 
            .get("http://localhost:8000/api/cartProducts")
            .then(({data}) => setSpecialProducts(data.specialProducts))
    }

    const getCartProducts = async () => {
        await axios 
            .get("http://localhost:8000/api/cartProducts")
            .then(({data}) => setCartItems(data.productsCart))
            .catch((error) => console.log(error))
    }

    useEffect(()=>{
        getSpecialProducts();
        getCartProducts();

    }, [])


    const addItemToCart = async (product) => {

        const {title, image, price, description } = product

        await axios.post("http://localhost:8000/api/cartProducts")

        getSpecialProducts();
        getCartProducts();
    }

    const editItemToCart = async (id, query, amount) => {
        if (query === "del" && amount === 1){
            await axios 
                .delete(`http://localhost:8000/api/cartProducts/${id}`)
                .then(({data}) => console.log(data))
        } else {
            await axios 
            .put(`http://localhost:8000/api/cartProducts/${id}?query=${query}`, {
                amount,
            })
            .then(({data}) => console.log(data))
        }

        getSpecialProducts();
        getCartProducts();
    }

    return (
        <CartContext.Provider
        
        value={{cartItems, specialProducts, addItemToCart, editItemToCart}}
        >

            {children}
        </CartContext.Provider>
    )
}

export default CartContext
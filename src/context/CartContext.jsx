/* import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    

        const [cartItems, setCartItems] = useState([])

        const [cartSpecialProducts, setCartSpecialProducts] = useState([])

        const getSpecialProducts = async () => {
            await axios 
                .get("http://localhost:8000/api/cartProducts")
                .then(({data}) => setCartSpecialProducts(data.cartProducts))
                
        }

        console.log(cartSpecialProducts)


    
        const getCartProducts = async () => {
            await axios 
                .get("http://localhost:8000/api/cartProducts")
                .then(({data}) => setCartItems(data.cartProducts))
                .catch((error) => console.log(error))
            }

        

    

    useEffect(()=>{
        getSpecialProducts();
        getCartProducts();

    }, [])

    console.log(cartItems)

    

    
 



    

    const addToCart = async (product) => {

        const {title, image, price, description } = product

        await axios.post("http://localhost:8000/api/cartProducts", {title, image, price, description})

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
        <CartContext.Provider value={{cartItems, cartSpecialProducts,addToCart, editItemToCart}}>

            {children}

        </CartContext.Provider>
    )

}

export default CartContext











 */
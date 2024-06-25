import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    /* const [cartItems, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error) {
            return [];
        }
    }) */

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

        

    /* useEffect(()=>{

        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
        console.log(cartItems)

    },[cartItems]) */

    useEffect(()=>{
        getSpecialProducts();
        getCartProducts();

    }, [])

    console.log(cartItems)

    /* useEffect(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts');
            if (productosEnLocalStorage) {
                const loadedCartItems = JSON.parse(productosEnLocalStorage);
                setCartItems(loadedCartItems);
                console.log('Cart items loaded from localStorage:', loadedCartItems);
            }
        } catch (error) {
            console.error('Error loading cart items from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('cartProducts', JSON.stringify(cartItems));
            console.log('productos guardados en local storage ', cartItems)
        } catch (error) {
            console.error('Error saving cart items to localStorage:', error);
        }
    }, [cartItems]); */

    
 



    /* const addToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart
                })
            );
            console.log('Added to cart:', { id: product.id, name: product.name, image: product.image, price: product.price, amount: inCart.amount + 1 });
        } else {
            setCartItems([...cartItems, { id: product.id, name: product.name, image: product.image, price: product.price, amount: 1 }])
            
        }

    }; */

    const addToCart = async (product) => {

        const {title, image, price, description } = product

        await axios.post("http://localhost:8000/api/cartProducts", {title, image, price, description})

        getSpecialProducts();
        getCartProducts();
    }

       

    /* const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount - 1 }
                    } else return productInCart;
                }))
        }
    };

    console.log(cartItems) */

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












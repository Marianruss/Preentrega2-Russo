import { useState, createContext } from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


export const CartContext = createContext()

export const Cart = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    console.log(cart)
    console.log(quantity)

    const deleteFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
        setQuantity(quantity - 1)
    }

    const emptyCart = () =>{
        setCart([])
        setQuantity(0)
    }



    const addToCart = (item) => {

        if (cart.some((prod) => prod.id === item.id)) {
            alertify.error('Ya tienes este item en el carrito');
        }
        else {
            alertify.success('Item agregado al carrito');
            setCart([...cart, item])
            setQuantity(quantity + 1)
            console.log(quantity)
        }
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            cart,
            quantity,
            deleteFromCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

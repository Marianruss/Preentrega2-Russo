import { useState, createContext } from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


export const CartContext = createContext()

export const Cart = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total,setTotal] = useState(0)

    const deleteFromCart = (id,price) => {
        setCart(cart.filter((prod) => prod.id !== id))
        setQuantity(quantity - 1)
        setTotal(total - price)
    }

    const emptyCart = () =>{
        setCart([])
        setQuantity(0)
        setTotal(0)
    }



    const addToCart = (item) => {

        if (cart.some((prod) => prod.id === item.id)) {
            alertify.error('Ya tienes este item en el carrito');
        }
        else {
            alertify.success('Item agregado al carrito');
            setTotal(total + item.price)
            setCart([...cart, item])
            setQuantity(quantity + 1)
        }
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            cart,
            quantity,
            deleteFromCart,
            emptyCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}

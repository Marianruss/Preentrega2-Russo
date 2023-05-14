import { useState, createContext } from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


export const CartContext = createContext()

export const Cart = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total,setTotal] = useState(0)
    const [totalUnidades,setTotalUnidades] = useState(0)

    const deleteFromCart = (id,totalCompra) => {
        setCart(cart.filter((prod) => prod.id !== id))
        setQuantity(quantity - 1)
        setTotal(total - totalCompra)
    }

    const emptyCart = () =>{
        setCart([])
        setQuantity(0)
        setTotal(0)
    }

    const renewOrderNumber = () =>{
        let min = Math.ceil(1111);
        let max = Math.floor(9999);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    const addToCart = (item,unidades) => {

            alertify.success('Item agregado al carrito');
            setCart([...cart, item])
            setQuantity(quantity + 1)
    }

    const checkIfInCart = (item) =>{
        if (cart.some((prod) => prod.id === item.id)) {
            return true;
        }
        else {return false}
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            cart,
            quantity,
            deleteFromCart,
            emptyCart,
            total,
            setTotal,
            renewOrderNumber,
            checkIfInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

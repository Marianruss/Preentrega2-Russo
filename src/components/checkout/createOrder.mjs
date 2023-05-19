import { db } from "../../firebase/firebaseConfig.js";
import { addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";
import { DataContext } from "../../contexts/DataContext.js";

const createOrder = () => {

    const [datos] = useContext(DataContext)
    const [cart] = useContext(CartContext)

    const order = () =>{
        comprador : {[...datos]}
    }

    console.log(order)
}

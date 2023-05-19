
import { CartContext } from "../../contexts/CartContext"
import { DataContext } from "../../contexts/DataContext"
import { ModalWin } from "../utils/modal"
import { useContext, useState } from "react"

import { getFirestore, collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/upload.mjs"
import { GenerateReceipt } from "./receipt/generatePdf"

export const PurchaseFinished = () => {

    const [sent, setSent] = useState(false)
    const { cart, total } = useContext(CartContext)
    const { datos } = useContext(DataContext)
    const [orden, setOrden] = useState(false)

    const reducedCart = [{}]





    {
        for (let i = 0; i < cart.length; i++) {
            reducedCart[i] = {
                producto: cart[i].name,
                precio: cart[i].price,
                cantidad: cart[i].unidadesCompradas
            }
        }
    }

    const setOrder = () => {
        if (!orden){
            setOrden(true)
        }
        return Math.floor(Math.random() * (9999 - 1111 + 1) + 1111);
        
    }

    const order = {
        client: {
            "nombre": datos.nombre,
            "email": datos.mail,
            "dirección": datos.direccion
        },
        items: reducedCart,
        total: total,
        date: new Date(),
        orden: setOrder()
    }
    console.log(order)

    if (!sent) {
        const orderRef = collection(db, "orders")
        addDoc(orderRef, order)
        setSent(true)
    }





    return (

        <ModalWin title={"Compra finalizada con exito"} message={"Gracias por tu compra"} factura={<GenerateReceipt />} />
    )
}
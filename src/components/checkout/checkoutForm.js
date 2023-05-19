import { useContext, useState } from "react"
import { DataContext } from "../../contexts/DataContext"
import { CartContext } from "../../contexts/CartContext"
import { PurchaseFinished } from "./checkoutSuccess"
import { Formulary } from "./form"
import { db } from "../../firebase/firebaseConfig"



export const Form = () => {

    const { saveFormData, submitted, data } = useContext(DataContext)
    const {cart} = useContext(CartContext)

    return (
        <div>
            {!submitted
                ? <Formulary />
                : <PurchaseFinished />}
        </div>
    )
}
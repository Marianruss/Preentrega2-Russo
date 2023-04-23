
import { CartContext } from "../../contexts/CartContext"
import { ModalWin } from "../utils/modal"
import { useContext } from "react"

import { pdf } from "@react-pdf/renderer"
import { GenerateReceipt } from "./receipt/generatePdf"

export const PurchaseFinished = () =>{
    
    
    return (
        
        <ModalWin title={"Compra finalizada con exito"} message={"Gracias por tu compra"} factura={<GenerateReceipt/>}/>
    )
}

import { CartContext } from "../../contexts/CartContext"
import { ModalWin } from "../utils/modal"
import { useContext } from "react"
import { MyDocument } from "../utils/generatePdf"
import { pdf } from "@react-pdf/renderer"
import { Test } from "../utils/generatePdf"

export const PurchaseFinished = () =>{


    
    return (
        
        <ModalWin title={"Compra finalizada con exito"} message={"Gracias por tu compra"} test={<MyDocument/>}/>
        
    )
}
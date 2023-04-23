import { useContext } from "react"
import { CartContext } from '../../contexts/CartContext'
import { setLogo } from "./functions"


export const Item = (product) => {

    const { cart, quantity, deleteFromCart, emptyCart,total } = useContext(CartContext)

    return (

        <div className="d-flex flex-column mb-50 mt-50">
            <div className="d-flex flex-row mb-50 mt-50">
                <img src={`${product.photo}`} className="h-80 w-50 md:h-150 md:w-150 "></img>
                <div className="d-flex flex-column justify-center gap-10">
                    <p className="text-white font-card text-l self-center ml-10 md:text-2xl">{product.name}</p>
                    <img src={`${setLogo(product.subcategory)}`} className="w-10 h-10 self-center md:w-20 md:h-20 "></img>
                    <p className="text-white font-card text-l self-center">${product.price}</p>
                </div>
            </div>
        </div>
    )
}
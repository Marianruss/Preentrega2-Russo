import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"
import { setLogo } from "../utils/functions"


export const ProductDetail = ({ item }) => {

    const { addToCart } = useContext(CartContext)

    const [cantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        addToCart(newItem)
    }

    return (
        <div className=" container mb-100 grid grid-cols-2 w-100 my-10 md:grid-cols-2 md:gap-y-0 align-center ">
            <img src={item.photo} className="w-150 h-200 md:w-300 md:h-500 object-contain ml-5" />
            <div className=" d-flex flex-col md:mt-50 row-span-2 h-10 md:gap-y-60 md:w-400">
                <p className=" text-xl self-center text-white text-base md:text-3xl font-card outline-black mb-10  ">{item.name}</p>
                <p className="text-white w-180 md:w-auto mb-10 text-xs md:text-xl mr-15 font-card outline-black">{item.description}</p>
            </div>
            <div className="md:w-330 d-flex flex-col mt-20  justify-between items-center gap-y-20 md:mt-0 ">
                <img className="w-30 h-30" src={`${setLogo(item.subcategory)}`}/>
                <button onClick={handleAgregar} className="mb-60 w-32 h-12 bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 mr-10 md:w-300 md:h-50">Agregar al carro</button>
            </div>



        </div>
    )
}
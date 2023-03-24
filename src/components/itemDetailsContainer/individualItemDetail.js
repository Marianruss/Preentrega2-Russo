import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"
import doom from "../../assets/images/product-photos/gamepictures/doom.jpg"

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
        <div className="d-flex flex-row gap-10 my-10">
            <div className="ml-5">
                <img src={doom} className="w-150 h-200 md:w-600 md:h-600 object-cover" />

            </div>
            <div className="d-flex flex-col justify-around gap-10 mr-10 md:mr-0 md:w-400 items-start ">
                <p className="text-white text-base md:text-3xl font-card outline-black ">{item.name}</p>
                <p className="text-white text-sm md:text-xl font-card outline-black">{item.description}</p>
                <div className="d-flex flex-row items-center gap-20">
                    <button onClick={handleAgregar} className=" mt-10 w-32 h-12 bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Agregar al carro</button>
                    <small className="text-white">{item.subcategory.toUpperCase()}</small>
                </div>
            </div>
        </div>
    )
}
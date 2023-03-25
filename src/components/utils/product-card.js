import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import Aos from "aos"
import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import "../../assets/images/product-photos/gamepictures/doom.jpg"





export const Product = ({ item }) => {

    useEffect(() => {
        Aos.init ()
        Aos.refresh()
    }, [])

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


        <div>
            <div className="flex items-center h-500 w-250 container items-center self-center my-50 " data-aos="zoom-in">
                <div>
                    {/* Inicia tarjeta */}
                    <div className="flex flex-col justify-around mx-2  md:w-250 md:h-500 shadow-2xl shadow-gray-900">
                        <Link to={`/detail/${item.id}`}><img alt={item.name} src="https://placehold.co/600x400"  className=" m-0 w-250 h-300 object-cover product-photo" /></Link>
                        <div className="flex items-center  justify-around  bg-white  bg-transparent ">
                            <div className="flex flex-column self-center items-center gap-20 mt-10 md:w-150 md:justify-center ">
                                <p className='flex items-end flex-row w-200 text-white font-card outline-black content-start text-xs'><small>{item.subcategory.toUpperCase()}</small></p>

                                <p className="text-white font-card outline-black">{item.name}</p>
                                <p className="text-white font-card">${item.price}</p>
                                <button onClick={handleAgregar} className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Añadir al carro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
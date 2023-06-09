import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import Aos from "aos"
import { useContext, useEffect, useState } from "react"
import { setLogo } from './functions';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import "../../assets/images/product-photos/gamepictures/doom.jpg"





export const Product = ({ item }) => {

    useEffect(() => {
        Aos.init()
        Aos.refresh()
    }, [])

    const { addToCart, checkIfInCart, setTotal, total } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)
    const [unidades, setUnidades] = useState(0)


    const handleSumar = () => {
        if (unidades === item.stock){
            alertify.error("No tenemos stock para cubrir tu orden")
        }
        else{
        setUnidades(unidades + 1)}
    }

    const handleRestar = () => {
        if (unidades === 0) {
            alertify.error("Ya tienes cero items")
        }
        
        else {
            setUnidades(unidades - 1)
        }
    }

    const handleAgregar = () => {
        if (unidades === 0){
            alertify.error("No puedes comprar cero items")
            return
        }        
        const newItem = {
            ...item,
            "unidadesCompradas": unidades,
            cantidad,
            "totalCompra": item.price * unidades
        }

        setTotal(total + newItem.totalCompra)
        addToCart(newItem, cantidad)
    }



    return (


        <div>
            <div className="flex items-center h-500 w-250 container items-center self-center my-50 " data-aos="zoom-in">
                <div>
                    {/* Inicia tarjeta */}
                    <div className="flex flex-col justify-around mx-2  md:w-250 md:h-550 shadow-2xl shadow-gray-900">
                        <Link to={`/detail/${item.id}`}><img alt={item.name} src={item.photo} className=" m-0 w-250 h-300 object-cover product-photo" /></Link>
                        <div className="flex items-center  justify-around  bg-white  bg-transparent ">
                            <div className="flex flex-column self-center items-center gap-20 mt-10 md:w-150 md:justify-center ">
                                <img className='w-20 h-20' src={`${setLogo(item.subcategory)}`} />
                                <p className="text-white text-l font-card outline-black">{item.name}</p>
                                <p className="text-white font-card">${item.price}</p>

                                {checkIfInCart(item) === true
                                    ? <div>
                                        <p className='d-flex text-s justify-center text-white font-card mb-20'>
                                            En tu carrito
                                        </p>
                                        <Link to={"/cart"}><button className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Ir al carrito</button></Link>
                                    </div>
                                    : <div>
                                        <div className='d-flex justify-center mb-20 flex-row gap-15 text-white'>
                                            <button onClick={handleRestar}>-</button>
                                            <p>{unidades}</p>
                                            <button onClick={handleSumar}>+</button>
                                        </div>
                                        <button onClick={handleAgregar} className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Añadir al carro</button>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
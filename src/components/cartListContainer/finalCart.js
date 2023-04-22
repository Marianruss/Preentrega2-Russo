import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ModalWin } from "../utils/modal";
import { Link } from "react-router-dom";
import { setLogo } from "../utils/functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons'


export const CartPage = () => {

    const { total, quantity, cart, deleteFromCart } = useContext(CartContext)


    return (

        <div>
            {quantity === 0
                ? <ModalWin title={"Pagina no disponible"} message={"No tenes items en el carrito"}/>
                : <div>
                    <h3 className="text-white font-card mt-50 ml-50 text-2xl">Tu carrito</h3>
                    {cart.map((prod) =>
                        <div key={prod.id} className=" d-flex flex-row ml-50 mr-50 border-b-2 border-gray-500">

                            <div className="d-flex mt-20 w-800 md:gap-200">
                                <img src={`${prod.photo}`} className="h-80 w-80 md:h-100 md:w-100"></img>
                                <div className="d-flex flex-column gap-20 w-150">
                                    <p className="text-white font-card text-s self-center md:text-l">{prod.name}</p>
                                    <img src={`${setLogo(prod.subcategory)}`} className="w-10 h-10 self-center md:w-20 md:h-20 "></img>
                                    <p className="text-white font-card text-l self-center">${prod.price}</p>
                                </div>
                                <span onClick={() => deleteFromCart(prod.id,prod.price)}className=' self-end self-center p-px hover:animate-bounce '><FontAwesomeIcon icon={faX} style={{ color: "white", }} /></span>
                            </div>
                        </div>)}
                    <div className="d-flex flex-column gap-10 mt-50 mb-50">
                        <h3 className=" text-white font-card ml-50 md:ml-100">Total: ${total}</h3>
                        <Link to={"/checkout"}><button className="bg-amber-300 w-110 hover:bg-grey-500 rounded-xl w-32  p-2 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ml-50 md:ml-100">Ir a pagar</button></Link>
                    </div>
                </div>
            }</div>

    )
}
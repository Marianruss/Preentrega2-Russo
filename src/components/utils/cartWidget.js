import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'




export const CartWidget = () => {

    const { cart, quantity, deleteFromCart, emptyCart } = useContext(CartContext)

    return (
        <div className="cart">

            <span className="cart-button">
                <div className='cart-icon'>

                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>{quantity}</p>
                </div>

                <div className="cart-content w-300 h-auto ">
                    {quantity < 1
                        ? <h6>No tenes items en tu carrito</h6>
                        : <div>
                            {cart.map((item) => (
                                <div>
                                    <div key={item.id} className='d-flex justify-between items-center mb-2 h-50' >
                                        <img src={item.photo} className='w-25 h-50'></img>
                                        <h6 className='text-xs'>{item.name}</h6>
                                        <small className='text-xs'>${item.price}</small>
                                        <span onClick={() => deleteFromCart(item.id)} className=' w-30 p-px hover:animate-bounce'><FontAwesomeIcon icon={faX} style={{ color: "black", }} /></span>
                                    </div>
                                </div>))}
                            <div className='d-flex flex-row justify-between mt-20 '>
                                <button onClick={emptyCart} className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 ">Vaciar carrito</button>
                                <button className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300">Ir a pagar</button>
                            </div>
                        </div>
                    }

                </div>
            </span >
        </div >

    )
}
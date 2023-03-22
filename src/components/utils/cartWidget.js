import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


export const CartWidget = () => {

    const [cartQuantity, setcounter] = useState(0)

    const addItem = () => {
        setcounter(cartQuantity+1)
        console.log(cartQuantity)
    }

    // useEffect(() =>{
    //     setcounter(cartQuantity+1)
    // })


    return (
        <div className="cart">

            <button onClick={addItem} className="cart-button">
                <div className='cart-icon'>

                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>{cartQuantity}</p>
                </div>

                <div className="cart-content">
                    <h6>No tenes items en tu carrito</h6>
                </div>
            </button >
        </div >

    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = ({cartMessage}) => {

    return (
        <div className="cart">

            <button className="cart-button">
                <div className='cart-icon'>
                    <a href="pages/cart.html">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <p>0</p>
                </div>

                <div className="cart-content">
                    <h6>{ cartMessage="No tenes items en tu carrito"}</h6>
                </div>
            </button >
        </div >

    )
}
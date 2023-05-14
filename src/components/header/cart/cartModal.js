import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import { useContext, useState } from 'react';

export const CartModal = () => {

    const { emptyCart } = useContext(CartContext)
    const [show, setShow] = useState(true)

    return (
        <div>
            <Modal show={true} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>¿Seguro que deseas vaciar el carrito?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={emptyCart} className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300"'>
                        Vaciar
                    </Button>
                    <Button onClick={setShow(false)} className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300'>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
            );
}

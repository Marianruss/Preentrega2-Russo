import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { useContext, useState } from 'react';

export const ModalWin = ({ title, message, factura }) => {

    const { emptyCart, renewOrderNumber, quantity } = useContext(CartContext)

    const { download, setDownload } = useState(false)
    renewOrderNumber()

    return (
        <div>
            <Modal show={true} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Link to={"/"}> <Button onClick={emptyCart} className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300"'>
                        Ir al inicio
                    </Button> </Link>
                    {quantity > 0
                        ? <Button  className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300'>{factura}</Button>
                        : null
                    }
                </Modal.Footer>
            </Modal>
        </div>

    );
}

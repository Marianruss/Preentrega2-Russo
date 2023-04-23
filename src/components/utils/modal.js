import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export const ModalWin = ({title,message,factura}) => {

    const {emptyCart} = useContext(CartContext)

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
                    <Button className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300'>{factura}</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

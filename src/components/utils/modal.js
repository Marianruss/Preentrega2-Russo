import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { DataContext } from '../../contexts/DataContext';
import { useContext, useState } from 'react';

export const ModalWin = ({ title, message, factura }) => {

    const { emptyCart, renewOrderNumber, quantity } = useContext(CartContext)

    const {datos} = useContext(DataContext)


    return (
        <div>
            <Modal show={true} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Gracias por comprar.</p>
                    <p>Recibirás un correo con los datos de tu compra en {datos.mail} </p>

                </Modal.Body>
                <Modal.Footer>
                   
                    <Link to={"/"}> <Button onClick={emptyCart} className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300"'>
                        Ir al inicio
                    </Button> </Link>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

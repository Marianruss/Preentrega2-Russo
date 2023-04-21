import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ModalWin = () => {

    return (
        <div>
            <Modal show={true} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Pagina no disponible</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>No tenés items en el carrito</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={"/"}> <Button className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300"'>
                        Ir al inicio
                    </Button> </Link>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

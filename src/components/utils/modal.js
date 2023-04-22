import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ModalWin = ({title,message,test}) => {

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
                    <Link to={"/"}> <Button className='bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300"'>
                        Ir al inicio
                    </Button> </Link>
                    <Button className='text-bg-amber-300 hover:bg-grey-500 rounded-xl w-32  p-1 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300'>{test}</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

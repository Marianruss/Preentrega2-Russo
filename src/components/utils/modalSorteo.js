import alertify from "alertifyjs";
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const ModalSorteo = () => {

    const success = () => {
        alertify.success("Ya estas participando")
    }

    const error = () => {
        alertify.error("No participarás del sorteo")
    }

    return (
        <div>
            <Modal show={true} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Sorteo del mes!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Para participar, ingresá tu email</p>
                    <input type="email" placeholder="  E-mail" className="border-2 border-gray-500 rounded mt-20" required={true}></input>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={"/"}><Button onClick={success} className="bg-amber-300 hover:bg-grey-500 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 "> Participar </Button></Link>
                    <Link to={"/"}><Button onClick={error} className="bg-red-300 hover:bg-red-600 rounded-xl w-32 p-1 mb-10 font-card hover:text-white hover:bg-gray-500 hover:border-gray-300 duration-300 "> Cancelar </Button></Link>
            </Modal.Footer>
        </Modal>
            </div >
    
    )
}
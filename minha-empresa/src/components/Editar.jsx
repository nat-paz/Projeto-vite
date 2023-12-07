import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { TfiPencilAlt } from "react-icons/tfi";
import axios from "axios";
import Formulario from "./Formulario";

function Editar(id){

    const [show, setShow] = useState(false)

    // function EditarDados(){
    //     axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios" + id)
    //     .then(() => { location.reload()})
    //     .cath((error) =>{
    //         console.log("Erro ao Editar")
    //     })
    // }

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}><TfiPencilAlt size={20} className="text-success"/></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario />
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="primary">Editar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import '../Styles/Modal.css'

function StaticExample({ show, handClose }) {
    const [visible, setVisible] = useState(false)

    //Uso do useEffect para fechar a mensagem de "Cadastrado com sucesso" após 3 segundos
    useEffect(() => {
        setVisible(show)
        const timer = setTimeout(() => {
            setVisible(handClose)
   
        }, 3000)
       
        return () => clearTimeout(timer)
    })

    return (
        <>
            {visible && (<div 
                style={{ display: `${show}`, position: 'initial', variant: 'success' }}
            >
                <Modal.Dialog >
                    <Modal.Header id='dialog'>
                        <p>Cadastrado com sucesso</p>
                    </Modal.Header>
                </Modal.Dialog>
            </div>)}  
        </>

    );
}

export default StaticExample;
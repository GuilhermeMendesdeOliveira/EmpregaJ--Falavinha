import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import "../Styles/FormData.css"
import StaticExample from './Alerts';
import InputsForm from './InputsForm';
import InputSelectForm from './InputSelectForm';


function FormData() {
    const usuario = {
        nome: "",
        email: "",
        telefone: "",
        uf: "",
        cidade: "",
        data_nasc: "",
        vaga: "",
        pretensao: "",
        plano: ""
    }

    //Guarda as informações do formulario para enviar para o back-end.
    const [usuarios, setResult] = useState([]);
    const [objUsuario, setObjUsuario] = useState(usuario);

    const [show, setShow] = useState('none')

    const handleClose = () => setShow('none')
    const handleShow = () => setShow('block')


    // Armazena o estados das informações a medida que forem digitadas.
    const handleChange = (e) => {
        setObjUsuario({ ...objUsuario, [e.target.name]: e.target.value })
    }

    // Envia as informações para o back-end quando o botão cadastrar é clicado
    const handleSubmit = () => {
        fetch('http://localhost:3000/usuario', {
            method: "POST",
            body: JSON.stringify(objUsuario),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                }
                else {
                    setResult([...usuarios, retorno_convertido]);
                    handleShow();
                    clearForm();
                }
            })
    }

    const clearForm = () => {
        setObjUsuario(usuario);
    }




    return (
        <Form id='form-style'>
            <StaticExample show={show} handClose={handleClose} />
            <Container className='input-style-all'>
                <div id="titulo-form">
                    <h1>Cadastre-se</h1>
                </div>
                <Row>
                    <Col>
                        <InputsForm label={'Nome'} value={objUsuario.nome} name={'nome'} onChange={handleChange} placeholder={'Digite seu nome completo'} obj={objUsuario.nome} />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <InputsForm label={'Email'} value={objUsuario.email} name={'email'} onChange={handleChange} placeholder={'Digite seu melhor email'} obj={objUsuario.email} />
                    </Col>
                    <Col>
                        <InputsForm label={'Telefone'} value={objUsuario.telefone} name={'telefone'} onChange={handleChange} placeholder={'(XX) XXXXX-XXXX'} obj={objUsuario.telefone} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputSelectForm label={'UF'} name={'uf'} id={'lista-planos '} value={objUsuario.uf} onChange={handleChange} option1={'Escolha UF'} option2={'PR'} option3={'SP'} option4={'RJ'} option5={'MG'} optvalue={'PR'} optvalue2={'SP'} optvalue3={'RJ'} optvalue4={'MG'} />
                    </Col>

                    <Col>
                        <InputsForm label={'Cidade'} value={objUsuario.cidade} name={'cidade'} onChange={handleChange} placeholder={'Cidade'} obj={objUsuario.cidade} />
                    </Col>
                    <Col>
                        <InputsForm label={'Data de Nasc'} value={objUsuario.data_nasc} name={'data_nasc'} onChange={handleChange} placeholder={'__/__/____'} obj={objUsuario.data_nasc} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputsForm label={'Vaga'} value={objUsuario.vaga} name={'vaga'} onChange={handleChange} placeholder={'Atuação'} obj={objUsuario.vaga} />
                    </Col>
                    <Col>
                        <InputsForm label={'Pretensão'} value={objUsuario.pretensao} name={'pretensao'} onChange={handleChange} placeholder={'R$ 0.000,00'} obj={objUsuario.pretensao} />
                    </Col>
                    <Col>
                        <InputSelectForm label={'Planos'} name={'plano'} id={'lista-planos '} value={objUsuario.plano} onChange={handleChange} option1={'Selecione seu Plano'} option2={'Gratis'} option3={'Prata'} option4={'Ouro'} option5={'Diamante'} optvalue={'Gratis'} optvalue2={'Prata'} optvalue3={'Ouro'} optvalue4={'Diamante'} />
                    </Col>
                </Row>
                <Row id='btn-cadastrar'>
                    <Button id='btn' onClick={handleSubmit} variant='primary' style={{ width: 150 }} >Cadastrar</Button>
                </Row>
            </Container>

        </Form>



    )
}

export default FormData;
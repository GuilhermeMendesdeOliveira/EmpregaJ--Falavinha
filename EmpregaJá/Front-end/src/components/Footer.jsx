import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoIcon from './LogoIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope"
import "../Styles/Footer.css"


function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="informacao" id="informacao-col">
                        <ul>
                            <li><p>Rua Qualquer, n 1200 | Centro | Curitiba | PR</p></li>
                            <li><p>Telefone: (XX) XXXXX-XXXX</p></li>
                            <li><p>contato@empregaja.com.br</p></li>
                            <li><p>CNPJ: 00.000.000/0000-00</p></li>
                            <li><p>Ajuda</p></li>
                        </ul>
                    </Col>
                    <Col className="logo-footer" id="logo-col">
                        <LogoIcon heights="80" />
                    </Col>
                    <Col className="icons-footer" id="redes-col">
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} color="black" style={{ padding: '10px', width: '30px', height: '30px' }} /></a>
                        <a href="http://Instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} color="black" style={{ padding: '10px', width: '30px', height: '30px' }} /></a>
                        <a href=""><FontAwesomeIcon icon={faWhatsapp} color="black" style={{ padding: '10px', width: '30px', height: '30px' }} /></a>
                        <a href="mailto:mendesoliveiragmo@gmail.com"><FontAwesomeIcon icon={faEnvelope} color="black" style={{ padding: '10px', width: '30px', height: '30px' }} /></a>
                    </Col>
                </Row>
                <hr />
                <Row id="powered">
                    <p>Powered By - <u>GM Tech - Technology</u> &reg; | 2024 - Todos os direitos reservados &copy;</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
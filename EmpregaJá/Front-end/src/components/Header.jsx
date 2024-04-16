import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import LogoIcon from './LogoIcon.jsx';
import Formulario from './FormData.jsx'
import "../Styles/Header.css"
import IconMedia from './IconMedia.jsx';


function Header() {

    return (
        <header>
            <Navbar className='navbar-emprega-ja'>
                <Container>
                    <LogoIcon  heights='80'/>
                    <IconMedia />
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col id='col-descri-header'>
                        <Row className='descricao-header' >
                            <p>As melhores empresas estão aqui oferecendo as melhores vagas de emprego.</p>
                        </Row>
                        <Row className='logo-header'>
                            <LogoIcon heights='200'/>
                        </Row>
                    </Col>
                    <Col id='col-form-header' className='form-header'>
                        <Formulario />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
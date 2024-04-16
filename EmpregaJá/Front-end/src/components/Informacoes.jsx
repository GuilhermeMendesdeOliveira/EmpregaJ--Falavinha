import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import {faLandmark} from '@fortawesome/free-solid-svg-icons/faLandmark'
import {faHandshake} from '@fortawesome/free-solid-svg-icons/faHandshake'
import ImgSelecao from '../assets/selecao-emprego.jpg'

import "../Styles/Informacoes.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Informacoes() {
    return (
        <section id="info">
            <Container>
                <Row>
                    <Col>
                        <h3>Estamos ao seu lado para apoiar sua jornada profissional!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <ul>
                                    <FontAwesomeIcon icon={faGlobe} color='black' style={{ width: '40px', height: '40px', padding: '5px' }} />
                                    <h5>Mais de 12.000 vagas de emprego</h5>
                                    <hr />
                                    <FontAwesomeIcon icon={faPenToSquare} color='black' style={{ width: '40px', height: '40px', padding: '5px' }} />
                                    <h5>Vagas de empregos para todos os perfis</h5>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <FontAwesomeIcon icon={faLandmark} color='black' style={{ width: '40px', height: '40px', padding: '5px' }} />
                                    <h5>Grandes empresas estão no Emprega Já</h5>
                                    <hr />
                                    <FontAwesomeIcon icon={faHandshake} color='black' style={{width: '40px', height: '40px', padding: '5px'}} />
                                    <h5>Com uma comunidade sempre disposta ajudar</h5>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col id='col-info-img'>
                        <img id='img' src={ImgSelecao} style={{width:'300px', height: 'auto', borderRadius: '250px', boxShadow: '5px 5px 20px black', border:'2px solid black', margin: '15px'}}  alt="" />
                    </Col>
                </Row>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur sequi, reprehenderit sed laboriosam voluptate dolorem voluptas? Soluta deleniti voluptatem, dolor suscipit eum fuga ad vero id temporibus corporis doloremque.</p>

            </Container>


        </section>
    )
}

export default Informacoes
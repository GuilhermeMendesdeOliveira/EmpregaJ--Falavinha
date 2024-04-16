import "../Styles/Depoimentos.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "./Cards";

function Depoimentos() {
    return (
        <>
            
            <Container className="depo">
            <h1>Conheça algumas empresas parceiras</h1>
                <Row>
                    <Col>
                        <Cards name={'GM Tech - Technology'} beneficio={'Mais de 10 anos no mercado'} beneficio01={'Os melhores profissionais estão aqui'} beneficio02={'No Dress'} beneficio03={'DayOff'} valor={'Mais Sobre Nós'} imgg={''} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Depoimentos;
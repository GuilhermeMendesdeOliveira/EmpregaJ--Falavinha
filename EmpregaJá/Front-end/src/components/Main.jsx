import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerRotativo from './BannerRotativo.jsx';
import Formulario from "./FormData"
import "../Styles/Main.css"

function Conteudo() {
  return (
    <main>
      <Container>
        <Row>
          <Col><h2 id='titulo-planos'>Conheça nossos Planos</h2></Col>
        </Row>
        <Row className='row-banner-rotativo'>
          <Col id="col-banner-tv"><p><u>Estabeleça Metas Claras:</u> Tenha objetivos definidos para o que você deseja alcançar em sua carreira. Isso pode ajudá-lo a manter o foco e a direção. </p><hr />
          <p><u>Desenvolva Habilidades Relevantes:</u> Identifique as habilidades necessárias para avançar em sua área e trabalhe constantemente para desenvolvê-las. Isso pode incluir habilidades técnicas, habilidades interpessoais e habilidades de liderança.</p>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6} > <BannerRotativo /> </Col>
          <Col id='col-banner-desktop'>
            <p><u>Networking Efetivo:</u> Construa e mantenha uma rede sólida de contatos profissionais. Participar de eventos do setor, conferências e grupos de networking pode ser uma ótima maneira de conhecer pessoas e oportunidades.</p><hr />
            <p><u>Seja Proativo:</u> Esteja sempre disposto a assumir responsabilidades extras, contribuir com ideias e projetos e buscar oportunidades de crescimento dentro da empresa.</p>
          </Col>
        </Row>
        <Row id='row-from-conteudo'>
          <Col>
            <Formulario />
          </Col>
        </Row>
        <Row className='aviso'>
          <p><b>Políticas de Privacidade e Termos de Uso:</b> Leia atentamente as políticas de privacidade e os termos de uso do site antes de concordar com eles. Isso pode ajudá-lo a entender como suas informações serão usadas e protegidas pelo site.</p>
        </Row>
      </Container>
    </main>
  );
}

export default Conteudo;
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';
import imgg from "../assets/Logo-Transp.png"
import "../Styles/BannerRotativo.css";


function BannerRotativo() {
    return (
        <Carousel >
            <Carousel.Item>
                <Cards name="Plano Gratis" beneficio='Criação de CV online' beneficio01="" beneficio02='' beneficio03='' valor='00,00' imgg={imgg} />
            </Carousel.Item>
            <Carousel.Item>
                <Cards name="Plano Prata" beneficio='Criação de CV online' beneficio01='Candidaturas ilimitadas' beneficio02='' beneficio03='' valor='29,90' imgg={imgg} />
            </Carousel.Item>
            <Carousel.Item>
                <Cards name="Plano Ouro" beneficio='Criação de CV online' beneficio01='Candidaturas ilimitadas' beneficio02='Testes de Habilidades' beneficio03='' valor='59,90' imgg={imgg} />
            </Carousel.Item>
            <Carousel.Item>
                <Cards name="Plano Diamante" beneficio='Criação de CV online' beneficio01="Candidaturas ilimitadas" beneficio02='Testes de Habilidades' beneficio03='Insig' valor='99,90' imgg={imgg} />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerRotativo;
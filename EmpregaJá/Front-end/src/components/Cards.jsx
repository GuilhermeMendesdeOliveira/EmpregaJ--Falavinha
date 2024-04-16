import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Styles/Cards.css"
//import imgg from "../assets/Logo-Transp.png"



function Cards({name, beneficio, beneficio01, beneficio02, beneficio03, valor, imgg}) {
  return (
    <Card className='style-card'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img src={imgg}/>
        <Card.Text>
          <ul>
            <li> {beneficio} </li>
            <li> {beneficio01} </li>
            <li> {beneficio02} </li>
            <li> {beneficio03} </li>
          </ul>
        </Card.Text>
        <Button variant="primary">{valor}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
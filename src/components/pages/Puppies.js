import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Modal, Button, Accordion, Carousel, Jumbotron} from "react-bootstrap";
import Carousels from './Carousels';
import MissRed from '../assets/missred.jpg';
import mrWhite from '../assets/mrWhite.jpg';
import Daphne1 from '../assets/DaphneInLivingRoom.png';
import Daphne2 from '../assets/DaphneOutsideMall.png';
import Daphne3 from '../assets/nathanDaphneByDaphne.png';
import Yoda2 from '../assets/yodatruck-2.png';
import MrBlue from '../assets/Mrblue.jpg';
import '../pages/Home.css';

class Puppies extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };
  }

  handleClose(id) {
    this.setState({show: id});
  }

  handleShow(id) {
    this.setState({show: id});
  }

    render(){
      return (
        <div className="PuppiesPage">
        <h1>Puppies</h1>
        <Jumbotron id="jumboImg">
  <h1>Welcome, to our puppies page!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        <CardDeck>
  <Card>
    <Card.Img variant="top" src={MissRed} id="missRedCard" />
    <Card.Body>
      <Card.Title>Miss. Red</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('red')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal 
              show={this.state.show == 'red'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Miss.Red
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Miss Red has the fun and playful side everyone needs and loves!
                      
                  </p>
                  
                  <Carousels />
                  <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Meet My Dad!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      Hello! This is Yoda, My Dad!
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Yoda at 5 months</h3>
      <p>Just got done playing fetch and eating.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Yoda2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Yoda 8 months</h3>
      <p>Waiting on us to get done in the RV.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Long day of running outside</h3>
      <p> First time having a fire in the fireplace, Daphne enjoyed it!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Meet My Mom!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! This is Daphne, My Mom!
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Daphne at 5 months</h3>
      <p>Just got done playing fetch and eating.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Daphne 8 months</h3>
      <p>Working hard as a services dog at the Mall Of America.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Long day of running outside</h3>
      <p> First time having a fire in the fireplace, Daphne enjoyed it!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                  
                </Modal.Body>
              </Modal>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Avalible to leave our home to yours by July</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Mr.White</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('white')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal 
              show={this.state.show == 'white'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Mr.White
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Mr White has the most fun out of the group
                      
                  </p>
                  <img src={mrWhite} id="mrWhiteModal" />
                </Modal.Body>
              </Modal>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Mr.Blue</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('blue')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal 
              show={this.state.show == 'blue'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Mr.Blue
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Mr Blue has the a great little personality
                      
                  </p>
                  <img src={MrBlue} id="MrBlueModal" />
                </Modal.Body>
              </Modal>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        
</div>
      ); 
    }
  }
  
  
  export default Puppies;
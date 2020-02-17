import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import tetris from '../assets/tetris.png';
import FaceRec from '../assets/facerec.gif';
import LittleYoda from '../assets/littleYoda.png';

import { Link } from 'react-router-dom';
class Portfolio extends Component {
    render(){
      return (
        
        <CardGroup>
        <Card>
    <Card.Img variant="top"  src={ LittleYoda }/>
    <Card.Body>
      <Card.Title><a href="https://littleyodas.com">Little Yodas - Dog breeder website</a></Card.Title>
      
      <Card.Text>
      I hand coded this just for fun and majority in HTML and CSS, without flexbox or SASS.
      I use javascript for the Navi bar in mobile and for the payment processing for the debit payment in the reserve page.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Upload coming soon!</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={tetris} />
    <Card.Body>
      <Card.Title><a href='https://krotzer.herokuapp.com'>Tetris </a></Card.Title>
      <Card.Text>
        Play Tetris created with react! I add some extra shapes and my first initial "d". 
        My Git hub for this porject: <a href="https://github.com/krotzer/tetris_with_react">GitHub</a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uploaded but needing mobile support!</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={FaceRec} />
    <Card.Body>
      <Card.Title><a href="https://facerecwithparticles.herokuapp.com">Facial Recognition API Utilization</a></Card.Title>
      <Card.Text>
      <strong>In the process of getting the  back end to with the heroku hosting, but check out the front end UI!</strong><br />
      <br />
      Facial Recognition app has a fully intergrated front and back end using javascript check it out! 
      It will automatically rank you in the usage you have input.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">bug with source root, works on local host but not on heroku hosting, fix in progress</small>
    </Card.Footer>
  </Card>
</CardGroup>
        

      ); 
    }
  }
  
  
  export default Portfolio;
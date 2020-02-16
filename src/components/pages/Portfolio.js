import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import tetris from '../assets/tetris.gif';
import FaceRec from '../assets/facerec.gif';
import BtcTracker from '../assets/btcTracker.gif';
import { Link } from 'react-router-dom';
class Portfolio extends Component {
    render(){
      return (
        
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={tetris} />
    <Card.Body>
      <Card.Title><a href='https://krotzer.herokuapp.com'>Tetris </a></Card.Title>
      <Card.Text>
        Play Tetris created with react! I add some extra shapes and my first initial "d". 
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
      Facial Recognition app has a fully intergrated front and back end using javascript check it out! 
      It will automatically rank you in the usage you have input.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">bug with source root, works on local host but not on heroku hosting, fix in progress</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={BtcTracker} />
    <Card.Body>
      <Card.Title>Crypto Currency Checker</Card.Title>
      <Card.Text>
      This app makes checking crypto prices readily available. Updating 7 day and 24 hours! 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Upload coming soon!</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"  />
    <Card.Body>
      <Card.Title>My first app in javascript - 2015</Card.Title>
      <Card.Text>
      javascript calculator
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Upload coming soon!</small>
    </Card.Footer>
  </Card>
</CardGroup>
        

      ); 
    }
  }
  
  
  export default Portfolio;
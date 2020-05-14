import React, { Component } from 'react';
import {Jumbotron, Button } from 'react-bootstrap';
import '../pages/Home.css';

class Homepage extends React.Component {
    render(){
      
      
      
      return (
        
<div>

<Jumbotron>
  <h1>Welcome, to LittleYodas!</h1>
  <h4> - Dogs are Family - </h4>
  <p>
    In order to access the ability to see puppy prices, buy a puppy or put a deposit down you must register first.
  </p>
  <p>
    <Button variant="primary">Register Now</Button>
  </p>
</Jumbotron>
  </div>
      ); 
    }
  }
  
  
  export default Homepage;
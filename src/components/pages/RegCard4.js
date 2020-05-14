import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
class RegCard4 extends Component {
    constructor() {
        super();
        this.state = {
          name: "RegCards"
        };
      }
    render(){
      return (
        <form className="RegCard">
    
        <h1> Registration Completed! </h1>
        Some Type of suprise eye pleasing animation goes here!
        <br />
        <h4>Please Check your email for conformation of your account successtion.</h4>
       
        <Button> Close </Button>
        </form>

      ); 
    }
  }
  export default RegCard4;
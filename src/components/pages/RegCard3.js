import React, { Component } from 'react';
import TermsAndCond from './TermsAndCond';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard3 extends Component {
    constructor() {
        super();
        this.state = {
          name: "RegCards"
        };
      }
    render(){
      return (
        <form className="RegCard">
    
        <h1> Terms And Conditions </h1>
        <input  type="checkbox" />
        <label> I agree to the <Link to="/TermsAndCond">Terms And Conditions</Link>
        </label>
        <br />
        <input  type="checkbox" />
        <label> I want to receive newsletter
        </label>
        <br />
        <Button> Previous </Button>
        <Button> Submit </Button>
        </form>

      ); 
    }
  }
  export default RegCard3;
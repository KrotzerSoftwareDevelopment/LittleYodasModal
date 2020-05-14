import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
class TermsAndCond extends Component {
    constructor() {
        super();
        this.state = {
          name: "RegCards"
        };
      }
    render(){
      return (
        <Card>

<Card.Body>
<Card.Title> Terms And Conditions </Card.Title>
        <form className="RegCard">
    
        <label> <u>Indexed Quick Links</u>
        </label>
        <br />
        <label> Deposits 
        </label>
        <br />
        <label> Shipping
        </label>
        <label> Taxes
        </label>
        <label> Extra Fees
        </label>
        <br />
        <Card.Title> Terms And Conditions </Card.Title>
  This is the terms 
  <br />

        </form>
  
  </Card.Body>
</Card>
        

      ); 
    }
  }
  export default TermsAndCond;
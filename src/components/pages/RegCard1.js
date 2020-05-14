import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
class RegCard1 extends Component {
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
<Card.Title> Account Login </Card.Title>
        <form className="RegCard">
    <br />
    <br />
    <h1>Acccount Information</h1>
        <label> Email:   
        <input  type="text" />
        </label>
        <br />
        <label> Password:   
        <input  type="text" />
        </label>
        <br />
        <label> Repeat Password:   
        <input  type="text" className="CardInput" />
        </label>
        <br />
        <Button> Next </Button>


        </form>
  
  </Card.Body>
</Card>
        

      ); 
    }
  }
  export default RegCard1;
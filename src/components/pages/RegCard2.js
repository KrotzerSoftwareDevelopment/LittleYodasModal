import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class RegCard2 extends Component {
    constructor() {
        super();
        this.state = {
          name: "RegCards"
        };
      }

    render(){
      return (
        <form className="RegCard">
    
        <h1>Contact Information</h1>
        <label> First Name:   
        <input  type="text" />
        </label>
        <br />
        <label> Last Name:   
        <input  type="text" />
        </label>
        <br />
        <label> Phone Number:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> Street Address:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> City:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> State:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> Zip Code:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <Button> Previous </Button>
        <Button> Next </Button>
        </form>


      ); 
    }
  }
  export default RegCard2;
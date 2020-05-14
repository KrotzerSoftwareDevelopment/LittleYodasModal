import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Contact extends Component {
    render(){
      return (
        <div>
       <form>
         <label>LittleYodas Contact Information</label>
         <br />
         <label> Dogs Are family</label>
         <br />
         <br />
         <label>Phone <br /> <a href="tel:9068699277">906.869.9277 </a></label>
         <br />
         <br />
         <label>Online</label>
         <br />
         Facebook | Twitter | Instagram | Youtube
         <br />
         <br />
         <br />
         <label>Email <br /> <a href="mailto:customersupport@littleyodas.com">customersupport@littleyodas.com </a></label>
        <br />
        <br />
        <u>Contact LittleYodas</u>
        <br />
        <br />
        <label> Your Name (required) </label>
        <br />
        <input type="text"></input>
        <br />
        <label> Your Email (required) </label>
        <br />
        <input type="text"></input>
        <br />
        <label> Subject </label>
        <br />
        <input type="text"></input>
        <br />
        <label> Your Message </label>
        <br />
        <textarea></textarea>
        <br />
        <br />
        <Button> Submit </Button>
       </form>
        </div>

      ); 
    }
  }
  export default Contact;
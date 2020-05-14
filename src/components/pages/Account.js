import React, { Component } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import '../pages/Home.css';
class Account extends Component {

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
        <Card className="text-center">

  <Card.Body>
    <Card.Title> Account Login </Card.Title>
    <label> Email:   
        <input  type="text" />
        </label>
        <br />
        <label> Password:   
        <input  type="text" />
        </label>
        <br />
        <label>Forgot Password?</label>
 
    <Button variant="primary"> Login </Button>
    <br />
    <br />
    <br />
    Login With Facebook
    <Button> Facebook Login </Button>
    <br />
    <br />
    Login with Google
    <Button>Google Login</Button>
    <br />
    <br />
    Dont have an account? Signup now!
    <br />
    <Button onClick={() => this.handleShow('Signup')}> Signup</Button>
    <Modal 
              show={this.state.show == 'Signup'} onHide={this.handleClose} >
            <Modal.Header closeButton closeLabel="close window">
              LittleYodas - Dogs Are Family
                </Modal.Header>
                
              <Signup />
              </Modal>
  </Card.Body>
</Card>

      ); 
    }
  }
  export default Account;
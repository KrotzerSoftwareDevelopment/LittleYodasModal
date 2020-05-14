import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Modal, Button } from "react-bootstrap";
import Account from './Account';
import Signup from './Signup';
import '../pages/Home.css';

class Navigation extends React.Component {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" id="navifontLogo" ><Link to="/"><img src={logo} id="logo" /> </Link> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" ><Link to="/Puppies">Puppies</Link></a>
            <a className="nav-item nav-link" ><Link to="/About">About</Link></a>
            <a className="nav-item nav-link" ><Link to="/Contact">Contact</Link></a>
            <a className="nav-item nav-link"  onClick={() => this.handleShow('Account')}> Account </a>
            <Modal 
              show={this.state.show == 'Account'} onHide={this.handleClose} 
              >
              <Modal.Header closeButton closeLabel="close window">
              LittleYodas - Dogs Are Family
                </Modal.Header>
                <Account />
                
                
                
              </Modal>
          </div>
        </div>
        
      </nav>
    ); 
  
  }
}
  export default Navigation;
  
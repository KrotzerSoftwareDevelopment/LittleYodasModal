import React from "react";
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"><Link to="/">Krotzer Software Development</Link> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" ><Link to="/Portfolio">Portfolio</Link></a>
            <a className="nav-item nav-link" ><Link to="/About">About</Link></a>
          
          </div>
        </div>
      </nav>
    ); 
  
  }
}
  export default Navigation;
  
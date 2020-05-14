import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import RegCard1 from './RegCard1';
import RegCard2 from './RegCard2';
import RegCard3 from './RegCard3';
import RegCard4 from './RegCard4';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "RegCards",
      showHideRegCard1: true,
      showHideRegCard2: false,
      showHideRegCard3: false,
      showHideRegCard4: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideRegCard1":
        this.setState({ showHideRegCard1: !this.state.showHideRegCard1 });
        break;
      case "showHideRegCard2":
        this.setState({ showHideRegCard2: !this.state.showHideRegCard2 });
        break;
      case "showHideRegCard3":
        this.setState({ showHideRegCard3: !this.state.showHideRegCard3 });
        break;
      case "showHideRegCard4":
        this.setState({ showHideRegCard4: !this.state.showHideRegCard4 });
        break;
      default:
        return null;
    }
  }
    render(){
      const { showHideRegCard1, showHideRegCard2, showHideRegCard3, showHideRegCard4 } = this.state;
      return (
        
     
      <div className="signup">
        <div className="steps-form-2">
        <div className="steps-row-2 setup-panel-2 d-flex justify-content-between">
          <button className="#step-1" onClick={() => this.hideComponent("showHideRegCard1")}>
            Account
          </button>
         
          <button className="#step-2" onClick={() => this.hideComponent("showHideRegCard2")}>
            Contact
          </button>
          <button className="#step-3" onClick={() => this.hideComponent("showHideRegCard3")}>
            Terms And Conditions
          </button>
          <button className="#step-4" onClick={() => this.hideComponent("showHideRegCard4")}>
            Finish
          </button>
          </div>
          </div>
          <div>
        {showHideRegCard1 && <RegCard1 />}
        <hr />
        {showHideRegCard2 && <RegCard2 />}
        <hr />
        {showHideRegCard3 && <RegCard3 />}
        <hr />
        {showHideRegCard4 && <RegCard4 />}
        <hr />
        <div>
        </div>
      </div>
          
          
  
    <br />
    
</div>
     
      ); 
    }
  }
  export default Signup;
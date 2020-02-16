import React, { Component } from 'react';
import '../pages/about.css';
import Typing from 'react-typing-animation';
import PortPic from '../assets/portpic.png';
class About extends Component {
    render(){
      return (
        <div>
        
        <div className="portContainer">
        <img src={PortPic} className="portpic"></img>
        </div>
        <p className="pContainer">
        <h1>My Mentor</h1>
        I was Named after my grandfather; he was also my mentor and father figure. 
        He was a great innovator and an inspiration to many. 
        He created great things like the giant Paul Bunyan statue in Akeley Minnesota.
        He also created a life size renaissance castle replica in Caver Massachusetts.
        He passed away doing what he loved, and he changed the world while doing it. 
        You can expect nothing less from me as well. I strive to break barriers, push limits, create, grow with software and hardware creation. 
        

       <Typing>
        <h1>The Last four years</h1>
        </Typing>
        Aside from earing my Mobile Application Development degree with honors, and a current member of Phi Theta Kappa Honor Society.
        I have spent most of my personal time coding, being a Dad and teaching my kids how to program at a young age.
        My current stack is Javascript and Python along with the majority of frameworks associated with them. 
        I have a strong desire to create scalable reusable code and programs. 
        I aspire to lead a team of engineers through a full development life cycle.
        </p>
        </div>

        

      ); 
    }
  }

  export default About;
  
import React, { Component } from 'react';
import '../pages/about.css';
import Typing from 'react-typing-animation';
import PortPic from '../assets/portpic.png';
class About extends Component {
    render(){
      return (
        <div>
        <img src={PortPic} className="portpic"></img>
        <p>
        
        <h1>My Mentor</h1>
I was Named after my grandfather; he was also my mentor and father figure. 
He was a great innovator and an inspiration to many. 
He created great things like the giant Paul Bunyan statue in Akeley Minnesota. 
He passed away doing what he loved, and he changed the world while doing it. 
You can expect nothing less from me as well. I strive to break barriers, push limits, learn, create, grow with software and hardware creation. 
I believe very much that we can all learn something new every day.

        <Typing>
        <h1>My History With Computers</h1>
        <div className="typeFontAbout">
        I have been designing, creating, and modifying computer software and hardware since my adolescence. 
        I have always had a problem with over thinking since I was very young.
        Everything in life didnt seem quite right, like a world without color, until I embraced becoming a software engineer. 
        Developing software allows my overactive mind a place in my life that not only works well but thrives!
        </div>
      </Typing>

        </p>
        </div>

      ); 
    }
  }

  export default About;
  
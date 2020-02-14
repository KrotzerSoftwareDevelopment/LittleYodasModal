import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import '../pages/Home.css';
class Homepage extends React.Component {
    render(

    ){
      return (
<div>
  <div className="background">
  <Typing>
  <div className="typeFont">
    My name is Dean Krotzer,
    <Typing.Delay ms={1000} />
    I am a Javascript & Python Software Engineer.
  </div>
</Typing>
  </div>
  </div>
      ); 
    }
  }
  
  
  export default Homepage;
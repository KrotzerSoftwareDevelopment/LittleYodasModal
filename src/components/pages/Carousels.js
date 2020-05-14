import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../pages/about.css';


class Carousels extends Component {
    render(){
      return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First Puppy Picture</h3>
      <p>Miss Red when she was First Born!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>2nd Puppy Picture</h3>
      <p>Getting bigger and stronger!.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>With my Siblings</h3>
      <p>Very warm and happy.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      );
  }
    
    }

  export default Carousels;
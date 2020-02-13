import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../src/index.css';

import Homepage from'../src/components/pages/Homepage';
import Portfolio from'../src/components/pages/Portfolio';
import About from'../src/components/pages/About';
import Contact from'../src/components/pages/Contact';
import Navigation from './components/Navigation';

class App extends Component {
  render(){
    return (
      <Router>
      <Navigation />
      <Route exact path='/Homepage' component={Homepage} />
       <Route exact path='/Portfolio' component={Portfolio} />
       <Route exact path='/About' component={About} />
       <Route exact path='/Contact' component={Contact} />
      </Router>
    ); 
  
  }
}


export default App;

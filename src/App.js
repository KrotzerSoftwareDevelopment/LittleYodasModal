import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../src/index.css';

import Homepage from'../src/components/pages/Homepage';
import Puppies from'../src/components/pages/Puppies';
import About from'../src/components/pages/About';
import Contact from'../src/components/pages/Contact';
import Account from'../src/components/pages/Account';

import Signup from'../src/components/pages/Signup';
import Footer from '../src/components/pages/Footer';
import Navigation from './components/pages/Navigation';
import TermsAndCond from './components/pages/TermsAndCond';

class App extends Component {
  render(){
    return (
      <div>
      <Router>
      <div className="navi">
      <Navigation />
      </div>
      <Route exact path='/' component={Homepage} />
       <Route exact path='/Puppies' component={Puppies} />
       <Route exact path='/About' component={About} />
       <Route exact path='/Contact' component={Contact} />
       <Route exact path='/Account' component={Account} />

       <Route exact path='/Signup' component={Signup} />
       <Route exact path='/TermsAndCond' component={TermsAndCond} />
      </Router>
      <div className="Footer">
      <Footer />
      </div>
      </div>
    ); 
  }
}

export default App;

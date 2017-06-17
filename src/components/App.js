import React, { Component } from 'react';
import Home from './home/Home'
import Clinic from './clinic/Clinic'
import FamilyPlanning from './familyplanning/FamilyPlanning'
import About from './about/About'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container-body">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/clinic' component={Clinic} />
              <Route exact path='/familyplanning' component={FamilyPlanning} />
              <Route exact path='/about' component={About} />
              <Route render={function() {
                return <p>Not Found</p>
              }} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;

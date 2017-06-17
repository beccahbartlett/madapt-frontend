import React, { Component } from 'react';
import Home from './home/Home'
import Clinic from './clinic/Clinic'
import Relationship from './relationship/Relationship'
import WomensHealth from './womens-health/WomensHealth'
import TeenHealth from './teen-health/TeenHealth'
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/clinic' component={Clinic} />
            <Route exact path='/relationship' component={Relationship} />
            <Route exact path='/womens-health' component={WomensHealth} />
            <Route exact path='/teen-health' component={TeenHealth} />
            <Route exact path='/about' component={About} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
         <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;

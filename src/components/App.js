import React, { Component } from 'react';
import Home from './home/Home'
import Access from './access/Access'
import FamilyPlanning from './family-planning/FamilyPlanning'
import MentalHealth from './mentalhealth/MentalHealth'
import Relationship from './relationship/Relationship'
import Violence from './violence/Violence'
import FamilyHealth from './family-health/FamilyHealth'
import SexualHealth from './sexual-health/SexualHealth'
import Contraception from './family-planning/contraception/Contraception'
import About from './about/About'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  componentDidMount() {
    window.analytics.identify('testUserId', {
      username: 'testUsername'
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container-body">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/access' component={Access} />
            <Route exact path='/relationship' component={Relationship} />
            <Route exact path='/family-planning' component={FamilyPlanning} />
            <Route exact path='/mentalhealth' component={MentalHealth} />
            <Route exact path='/violence' component={Violence} />
            <Route exact path='/family-health' component={FamilyHealth} />
            <Route exact path='/sexual-health' component={SexualHealth} />
            <Route exact path='/family-planning/contraception' component={Contraception} />
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

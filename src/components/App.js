import React, { Component } from 'react';
import Home from './home/Home'
import Access from './access/Access'
import FamilyPlanning from './family-planning/FamilyPlanning'
import Violence from './violence/Violence'
import FamilyHealth from './family-health/FamilyHealth'
import PregnancyNewborn from './pregnancy-newborn/PregnancyNewborn'
import SexualHealth from './sexual-health/SexualHealth'
import Contraception from './family-planning/contraception/Contraception'
import HealthSystemOverview from './access/health-system-overview/HealthSystemOverview'
import AustralianNorms from './access/australian-norms/AustralianNorms'
import BirthSpacing from './family-planning/birth-spacing/BirthSpacing'
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
            <Route exact path='/family-planning' component={FamilyPlanning} />
            <Route exact path='/family-planning/birth-spacing' component={BirthSpacing} />
            <Route exact path='/violence' component={Violence} />
            <Route exact path='/family-health' component={FamilyHealth} />
            <Route exact path='/pregnancy-newborn' component={PregnancyNewborn} />
            <Route exact path='/sexual-health' component={SexualHealth} />
            <Route exact path='/family-planning/contraception' component={Contraception} />
            <Route exact path='/access/health-system-overview' component={HealthSystemOverview} />
            <Route exact path='/access/australian-norms' component={AustralianNorms} />
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

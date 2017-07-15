import React, { Component } from 'react';
import Access from '../pages/access/Access'
import FamilyPlanning from '../pages/family-planning/FamilyPlanning'
import Violence from '../pages/violence/Violence'
import FamilyHealth from '../pages/family-health/FamilyHealth'
import WomensHealth from '../pages/family-health/womens-health/WomensHealth'
import PregnancyNewborn from '../pages/pregnancy-newborn/PregnancyNewborn'
import SexualHealth from '../pages/sexual-health/SexualHealth'
import HealthyRelationships from '../pages/sexual-health/healthy-relationships/HealthyRelationships'
import SafeSex from '../pages/sexual-health/safe-sex/SafeSex'
import Contraception from '../pages/family-planning/contraception/Contraception'
import HealthSystemOverview from '../pages/access/health-system-overview/HealthSystemOverview'
import AustralianNorms from '../pages/access/australian-norms/AustralianNorms'
import BirthSpacing from '../pages/family-planning/birth-spacing/BirthSpacing'
import Pregnancy from '../pages/pregnancy-newborn/pregnancy/Pregnancy'
import Postnatal from '../pages/pregnancy-newborn/postnatal/Postnatal'
import Birth from '../pages/pregnancy-newborn/birth/Birth'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;


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
            <Route exact path="/" render={() => (
              <Redirect to="/"/>
            )}/>
            <Route exact path='/access' component={Access} />
            <Route exact path='/family-planning' component={FamilyPlanning} />
            <Route exact path='/family-planning/birth-spacing' component={BirthSpacing} />
            <Route exact path='/violence' component={Violence} />
            <Route exact path='/family-health' component={FamilyHealth} />
            <Route exact path='/family-health/womens-health' component={WomensHealth} />
            <Route exact path='/pregnancy-newborn' component={PregnancyNewborn} />
            <Route exact path='/sexual-health' component={SexualHealth} />
            <Route exact path='/sexual-health/healthy-relationships' component={HealthyRelationships} />
            <Route exact path='/sexual-health/safe-sex' component={SafeSex} />
            <Route exact path='/family-planning/contraception' component={Contraception} />
            <Route exact path='/access/health-system-overview' component={HealthSystemOverview} />
            <Route exact path='/access/australian-norms' component={AustralianNorms} />
            <Route exact path='/pregnancy-newborn/pregnancy' component={Pregnancy} />
            <Route exact path='/pregnancy-newborn/postnatal' component={Postnatal} />
            <Route exact path='/pregnancy-newborn/birth' component={Birth} />
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

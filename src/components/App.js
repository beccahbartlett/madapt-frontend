import React, { Component } from 'react';
import ContentPageContainer from './content-page-container/ContentPageContainer'
import Access from '../pages/access/Access'
import FamilyPlanning from '../pages/family-planning/FamilyPlanning'
import FamilyHealth from '../pages/family-health/FamilyHealth'
import WomensHealth from '../pages/family-health/womens-health/WomensHealth'
import PregnancyNewborn from '../pages/pregnancy-newborn/PregnancyNewborn'
import SexualHealth from '../pages/sexual-health/SexualHealth'
import HealthyRelationships from '../pages/sexual-health/healthy-relationships/HealthyRelationships'
import SafeSex from '../pages/sexual-health/safe-sex/SafeSex'
import Contraception from '../pages/family-planning/contraception/Contraception'
import HealthSystemOverview from '../pages/access/health-system-overview/HealthSystemOverview'
import AustralianNorms from '../pages/access/australian-norms/AustralianNorms'
import Birth from '../pages/pregnancy-newborn/birth/Birth'
import Nav from './nav/Nav'
import NavMenu from './navmenu/NavMenu'
import Footer from './footer/Footer'
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;

class App extends Component {
  constructor() {
    super()
    this.state = {
      lang: 'en'
    }
    this.toggleLanguage = this.toggleLanguage.bind(this)  
  }

  toggleLanguage() {
    this.setState({
      lang: this.state.lang === 'en' ? 'ar' : 'en'
    })
  }

  componentDidMount() {
    window.analytics.identify('testUserId', {
      username: 'testUsername'
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav toggleLanguage={this.toggleLanguage}/>
          <NavMenu lang={this.state.lang} />
          <div className="container-body">
            <Switch>
              <Route exact path="/" render={() => (
                <Redirect to="/access"/>
              )}/>

              <Route exact path='/access' component={Access} lang={this.state.lang} />
              <Route exact path='/access/health-system-overview' component={HealthSystemOverview} lang={this.state.lang} />
              <Route exact path='/access/australian-norms' component={AustralianNorms} lang={this.state.lang} />
              {/* Medicare and Centrelink  */}
              {/* Your Rights and Responsibilities  */}
              {/* Disability Access  */}
              {/* Private vs. Public Health Services */}

              <Route exact path='/family-planning' component={FamilyPlanning} lang={this.state.lang} />
              <Route
                exact path='/family-planning/birth-spacing'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-planning/birth-spacing.json' lang={this.state.lang} />} />
              <Route exact path='/family-planning/contraception' component={Contraception} lang={this.state.lang} />
              {/* Unplanned Pregnancy */}
              {/* Fertility and Infertility */}

              <Route exact path='/pregnancy-newborn' component={PregnancyNewborn} lang={this.state.lang} />
              <Route
                exact path='/pregnancy-newborn/pregnancy'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/pregnancy.json' lang={this.state.lang} />} />
              <Route
                exact path='/pregnancy-newborn/complications'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/complications-of-pregnancy.json' lang={this.state.lang} />} /> 
              <Route exact path='/pregnancy-newborn/birth' component={Birth} lang={this.state.lang} />
              <Route
                exact path="/pregnancy-newborn/postnatal"
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/postnatal.json' lang={this.state.lang} />} />
              <Route
                exact path='/pregnancy-newborn/newborn'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/newborn.json' lang={this.state.lang} />} />

              <Route exact path='/sexual-health' component={SexualHealth} lang={this.state.lang} />
              <Route exact path='/sexual-health/healthy-relationships' component={HealthyRelationships} lang={this.state.lang} />
              <Route exact path='/sexual-health/safe-sex' component={SafeSex} lang={this.state.lang} />
              {/* STIs/HIV  */}
              {/* Sexuality  */}
              
              <Route exact path='/family-health' component={FamilyHealth} lang={this.state.lang} />              
              <Route exact path='/family-health/womens-health' component={WomensHealth} lang={this.state.lang} />
              
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

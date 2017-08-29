import React, { Component } from 'react';
import ContentPageContainer from './content-page-container/ContentPageContainer'
import Access from '../pages/access/Access'
import FamilyPlanning from '../pages/family-planning/FamilyPlanning'
import FamilyHealth from '../pages/family-health/FamilyHealth'
import PregnancyNewborn from '../pages/pregnancy-newborn/PregnancyNewborn'
import SexualHealth from '../pages/sexual-health/SexualHealth'
import Nav from './nav/Nav'
import NavMenu from './navmenu/NavMenu'
import Footer from './footer/Footer'
import About from '../pages/about/About'
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;
var ReactGA = require('react-ga')
ReactGA.initialize('UA-105402728-1')

global.logPageView = function(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      lang: 'en',
      style: 1
    }
    this.toggleLanguage = this.toggleLanguage.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
  }

  toggleLanguage() {
    this.setState({
      lang: this.state.lang === 'en' ? 'ar' : 'en'
    })
    ReactGA.event({
      category: 'Locale',
      action: 'Toggle Language To',
      label: this.state.lang
    });
  }

  changeStyle(style) {
    if (this.state.style !== style) {
      this.setState({style: style});
    }
  }

  render() {
    return (
      <Router onUpdate={this.logPageView}>
        <div>
          <Nav lang={this.state.lang} toggleLanguage={this.toggleLanguage}/>
          <NavMenu lang={this.state.lang} />
          <div className={`container-body style-${this.state.style}`}>
            <Switch>
              <Route exact path="/" render={() => (
                <Redirect to="/access"/>
              )}/>

              <Route
                exact path='/access'
                component={(props) => <Access {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle} />} />
              <Route
                exact path='/access/health-system-overview'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/access/health-system-overview.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/access/australian-norms'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/access/australian-norms.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/access/medicare-centrelink'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/access/medicare-centrelink.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/access/private-vs-public'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/access/private-vs-public.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              {/* Your Rights and Responsibilities  */}
              {/* Disability Access  */}

              <Route
                exact path='/family-planning'
                component={(props) => <FamilyPlanning {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-planning/birth-spacing'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-planning/birth-spacing.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-planning/contraception'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-planning/contraception.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-planning/unplanned-pregnancy'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-planning/unplanned-pregnancy.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-planning/fertility'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-planning/fertility.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              {/* Unplanned Pregnancy */}
              {/* Fertility and Infertility */}

              <Route
                exact path='/pregnancy-newborn'
                component={(props) => <PregnancyNewborn {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle} />} />
              <Route
                exact path='/pregnancy-newborn/pregnancy'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/pregnancy.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/pregnancy-newborn/complications'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/complications-of-pregnancy.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/pregnancy-newborn/birth'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/birth.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path="/pregnancy-newborn/postnatal"
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/postnatal.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/pregnancy-newborn/newborn'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/pregnancy-newborn/newborn.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />

                <Route
                exact path='/sexual-health'
                component={(props) => <SexualHealth {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle} />} />
              <Route
                exact path='/sexual-health/healthy-relationships'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/sexual-health/healthy-relationships.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/sexual-health/safe-sex'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/sexual-health/safe-sex.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/sexual-health/sti'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/sexual-health/sti.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/sexual-health/sexuality'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/sexual-health/sexuality.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />

              <Route
                exact path='/family-health'
                component={(props) => <FamilyHealth {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-health/womens-health'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-health/womens-health.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-health/mens-health'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-health/mens-health.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-health/teen-health'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-health/teen-health.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-health/childrens-health'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-health/childrens-health.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-health/mental-health'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-health/mental-health.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                exact path='/family-health/violence'
                component={(props) => <ContentPageContainer {...props} filePath='/Content/family-health/violence.json' lang={this.state.lang} changeStyle={this.changeStyle} />} />
              <Route
                  exact path='/about'
                  component={(props) => <About {...props}
                  lang={this.state.lang}
                  changeStyle={this.changeStyle} />} />
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

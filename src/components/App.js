import React, { Component } from 'react';
import ContentPageContainer from './content-page-container/ContentPageContainer'
import HealthcareAustralia from '../pages/healthcare-australia/HealthcareAustralia'
import HealthcareAustraliaCMS from '../pages/healthcare-australia-cms/HealthcareAustraliaCMS'
import FamilyPlanning from '../pages/family-planning/FamilyPlanning'
import FamilyHealth from '../pages/family-health/FamilyHealth'
import PregnancyNewborn from '../pages/pregnancy-newborn/PregnancyNewborn'
import SexualHealth from '../pages/sexual-health/SexualHealth'
import Nav from './nav/Nav'
import NavMenu from './navmenu/NavMenu'
import Footer from './footer/Footer'
import axios from 'axios'
import './App.css';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var ReactGA = require('react-ga')
ReactGA.initialize('UA-105402728-1')

global.logPageView = function(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}

global.getUserLocation = function() {
	axios.get('http://freegeoip.net/json/')
	.then(res => {
		const postcode = res.data["zip_code"]
		ReactGA.event({
			category: 'Locations',
			action: 'Get Postcode',
			label: 'Postcode',
			value: parseInt(postcode)
		});
	})
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      lang: 'en',
			style: 1,
			routes: null
		}
		this.getRoutes()
    this.toggleLanguage = this.toggleLanguage.bind(this)
		this.changeStyle = this.changeStyle.bind(this)
	}
	
	getRoutes() {
		// get data from JSON
    axios.get('/content/routes.json')
      .then(res => {
        this.setState({
          routes: res.data
				})
      })
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
		const routes = this.state.routes
    return (
      <Router onUpdate={this.logPageView}>
        <div>
          <Nav lang={this.state.lang} toggleLanguage={this.toggleLanguage} style={this.state.style}/>
          <NavMenu lang={this.state.lang} />
          <div className={`container-body style-${this.state.style}`}>
            <Switch>

							{routes && routes.map((route, index) => {
								return (
									<Route
										key={index}
										exact path={route.displayUrl}
										component={(props) => <ContentPageContainer {...props} filePath={route.contentUrl} lang={this.state.lang} changeStyle={this.changeStyle} style={route.style} />} />
								)
							})}
							
							<Route
                exact path='/healthcare-australia'
                component={(props) => <HealthcareAustralia {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle}
								theme={1} />} />
							<Route
                exact path='/family-planning'
                component={(props) => <FamilyPlanning {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle}
								theme={2} />} />
							<Route
                exact path='/pregnancy-newborn'
                component={(props) => <PregnancyNewborn {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle}
								theme={3} />} />
							<Route
                exact path='/sexual-health'
                component={(props) => <SexualHealth {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle}
								theme={4} />} />
							<Route
                exact path='/family-health'
                component={(props) => <FamilyHealth {...props}
                lang={this.state.lang}
                changeStyle={this.changeStyle}
								theme={5} />} />
              <Route
                exact path='/healthcare-australia-cms'
                component={(props) => <HealthcareAustraliaCMS/>} />
							<Route
                exact path='/clinics'
                component={(props) => <div className="wrapper"><h1>قريبا / Coming Soon!</h1></div>} />
              <Route render={function() {
                return <p>Not Found</p>
              }} />
            </Switch>
          </div>
          <Footer lang={this.state.lang}></Footer>
        </div>
      </Router>
    );
  }
}

export default App;

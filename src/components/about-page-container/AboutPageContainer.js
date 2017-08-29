import React, { Component } from 'react';
import teamPhoto from './mAdapt-team.jpg';
import './AboutPageContainer.css'

class AboutPageContainer extends Component {
  componentDidMount() {
    global.logPageView(window.location.pathname + window.location.search)
  }
  render() {
    return (
      <div className="aboutContainer">
        <div className="aboutMAdaptTeam">
          <img className="teamPhoto" src={teamPhoto} alt='mAdapt team photo' />
          <p className="bold">The mAdapt team is based in Australia and the United States.</p>
          <span>Rebeccah Bartlett, Founder and CEO</span><br/>
          <span>Registered nurse-midwife, BA</span><br/>
          <span>History/Anthropology, MPH MAternal and Child Health</span><br/><br/>

          <span>Sarah Fortuna, Communications and strategy</span><br/>
          <span>BA, MSS, EMA</span><br/><br/>

          <span>Claire Butselaar, Public Health Technical Advisor</span><br/>
          <span>Registered Nurse, MPH</span><br/><br/>

          <span>Alex Sloman, Tech Advisor</span><br/>
        </div>
        <div className="aboutMAdaptContent">
          <h4>About mAdapt</h4>
          <p>mAdapt was born out of a public health philosophy and we actively partner with stakeholders from different backgrounds, interests and methodologies to deliver an interdisciplinary and cross-sectoral approach.</p>
          <p>What sets mAdapt apart is the niche market in which we choose to work, our novel approach to making an impact, and our committed leadership to achieving our specific, measurable outcomes.</p>
          <p>mAdapt is committed to working with our targeted communities to the develop capacity that we know already exists and to collaborate instead of compete for the resources needed to improve the reproductive health of the people we work with.</p>
          <p>mAdapt recognises that many refugee groups are over-sampled with little consideration of their agency or desire to be a part of, instead of subject to, the research experience. As such, mAdapt has been designed with the intention to be a health intervention as well as a movement to increase community ownership of the health products and programs that affect them directly. This means building our organisational capacity from within our target communities and contributing to a workforce that is health empowered as well as gender and culture diverse.</p>

          <h4>Vision</h4>
          <li>Respectful health knowledge, accessible in every language</li>

          <h4>Mission</h4>
          <li>We share reproductive health knowledge in a respectful way and in a language users can understand.</li>
          <li>Our web app Shifra is state of the art and the first of its kind, both in Australia and in the world.</li>
          <li>Shifra is available in Arabic and English and will be made accessible to Victoria’s five largest non-English speaking populations by the end of 2018.</li>
        </div>
      </div>
    )
  }
}

export default AboutPageContainer

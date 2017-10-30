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
          <img className="teamPhoto" src={teamPhoto} alt='mAdapt team' />
          <p className="bold">The mAdapt team is based in Australia and the United States.</p>

          <p>
            <span className="heading">Founders</span><br/>
            <span>Rebeccah Bartlett, Founder and CEO</span><br/>
            <span>Hannah Rackers (USA)</span>
          </p>

          <p>
            <span className="heading">Executives</span><br/>
            <span>Zainab Alidina (USA)</span><br/>
            <span>Stephanie Metzin (USA)</span><br/>
            <span>Claire Butselaar</span><br/>
            <span>Sarah Fortuna</span><br/>
            <span>Julie Gibson</span><br/>
            <span>Sid Verma</span>
          </p>

          <p>
            <span className="heading">Researchers</span><br/>
            <span>Jenny Ora Anand (USA)</span><br/>
            <span>Fekir Negussie (USA)</span>
          </p>

          <p>
            <span className="heading">Researchers</span><br/>
            <span>Jenny Ora Anand (USA)</span><br/>
            <span>Fekir Negussie (USA)</span>
          </p>

          <p>
            <span className="heading">Developers</span><br/>
            <span>Stephen Dodd</span><br/>
            <span>James Liu</span><br/>
            <span>David McDeavitt</span><br/>
            <span>Enrique “Kit” Perez</span>
          </p>

          <p>
            <span className="heading">Designers</span><br/>
            <span>Boying Fu</span><br/>
            <span>Rebecca Hranalovic</span><br/>
            <span>Katherine Wu</span>
          </p>
        </div>
        <div className="aboutMAdaptContent">
          <h4>About mAdapt</h4>
          <p>mAdapt was born out of a public health philosophy and we actively partner with stakeholders from different backgrounds, interests and methodologies to deliver an interdisciplinary and cross-sectoral approach.</p>
          <p>What sets mAdapt apart is the niche market in which we choose to work, our novel approach to making an impact, and our committed leadership to achieving our specific, measurable outcomes.</p>
          <p>mAdapt is committed to working with our targeted communities to the develop capacity that we know already exists and to collaborate instead of compete for the resources needed to improve the reproductive health of the people we work with.</p>
          <p>mAdapt recognises that many refugee groups are over-sampled with little consideration of their agency or desire to be a part of, instead of subject to, the research experience. As such, mAdapt has been designed with the intention to be a health intervention as well as a movement to increase community ownership of the health products and programs that affect them directly. This means building our organisational capacity from within our target communities and contributing to a workforce that is health empowered as well as gender and culture diverse.</p>

          <h4>Vision</h4>
          <li>Respectful health knowledge, accessible in every language.</li>

          <h4>Mission</h4>
          <li>We share reproductive health knowledge in a respectful way and in a language users can understand.</li>
          <li>Our web app Shifra is state of the art and the first of its kind, both in Australia and in the world.</li>
          <li>Shifra is available in Arabic and English and will be made accessible to Victoria’s five largest non-English speaking populations by the end of 2018.</li>
          <br />
          <h4><a href="http://www.madapt.org/contact/">Contact Us</a></h4>
        </div>
      </div>
    )
  }
}

export default AboutPageContainer

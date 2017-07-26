import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footerEmergencyBanner">
          <a href="tel:000">In case of emergency call 000</a>
          <a href="tel:131114">Lifelline Phone Service 13 11 14</a>
        </div>

        <div className="footerCore">
          <div className="footerItem">
            <ul>
              <li><a href="#">About mAdapt</a></li>
              <li><a href="#">All Topics</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footerItem">
            <ul>
              <li><a href="#">Statistics</a></li>
              <li><a href="#">Premium for Clinics</a></li>
            </ul>
          </div>

          <div className="footerItem social">
            <h4>Save our website on your phone!</h4>
            <ul>
              <li><a className="fa fa-facebook" aria-hidden="true"></a>Facebook</li>
              <li><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</li>
              <li><i className="fa fa-youtube-play" aria-hidden="true"></i>Youtube</li>
              <li><i className="fa fa-instagram" aria-hidden="true"></i>Insta</li>
            </ul>
          </div>

          <div className="footerCopyright footerItem">
            &copy; 2017 mAdapt
          </div>
        </div>

      
      </div>
    )
  }
}

export default Footer

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import IoPhone from 'react-icons/lib/io/ios-telephone-outline';
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footerEmergencyBanner">
          <a href="tel:000"><IoPhone size={25} />In case of emergency call 000</a>
          <a href="tel:131114"><IoPhone size={25} />Lifeline Phone Service 13 11 14</a>
        </div>

        <div className="footerCore">
          <div className="footerItem">
            <ul>
              <li><a>About mAdapt</a></li>
              <li><a>All Topics</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          <div className="footerItem footerItemBorder">
            <ul>
              <li><a>Statistics</a></li>
              <li><a>Premium for Clinics</a></li>
            </ul>
          </div>

          <div className="footerItem social">
            <h4>Save our website on your phone!</h4>
            <ul className="footerIcons">
              <li><SocialIcon url="https://www.facebook.com/mAdapt-1777571399195093/" network="facebook" color="white" style={{ height:23, width:23 }}/></li>
              <li><SocialIcon url="https://twitter.com/mAdapt_app" network="twitter" color="white" style={{ height:23, width:23 }}/></li>
              <li><SocialIcon url="https://www.youtube.com/watch?v=fOcwWc9X8v4" network="youtube" color="white" style={{ height:23, width:23 }}/></li>
              <li><SocialIcon url="https://www.instagram.com/mAdapt_app/" network="instagram" color="white" style={{ height:23, width:23 }}/></li>
            </ul>
          </div>

          <div className="footerCopyright footerItem">
            &copy; 2017 mAdapt. All rights reserved.
          </div>
        </div>

      
      </div>
    )
  }
}

export default Footer

import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <a href="#">In case of emergency call 000</a>
          <a href="tel:131114">Lifelline Phone Service 13 11 14</a>
        </div>

        <div>
          <ul>
            <li><a href="#">About mAdapt</a></li>
            <li><a href="#">All Topics</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Statistics</a></li>
            <li><a href="#">Premium for Clinics</a></li>
          </ul>
        </div>

        <div>
          <h4>Save our website on your phone!</h4>
          <ul>
            <li>f</li>
            <li>t</li>
            <li>yt</li>
            <li>i</li>
          </ul>
        </div>

        <div>
          <p>&copy; 2017 mAdapt</p>
        </div>

      </div>
    )
  }
}

export default Footer

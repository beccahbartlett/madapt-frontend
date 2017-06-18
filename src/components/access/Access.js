import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './Access.css'

class Access extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div>
      Access
        <main className="cards">
  <article className="card">
    <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
    <div className="text">
      <p>Health System Overview</p>

    </div>
  </article>
  <article className="card">
    <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
    <div className="text">
      <p>Australian norms</p>

    </div>
  </article>
  <article className="card">
  <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
    <div className="text">
      <p>Medicare and Centrelink</p>

    </div>
  </article>
  <article className="card">
  <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
    <div className="text">
      <p>Your Rights and Responsibilities</p>

    </div>
  </article>
  <article className="card">
  <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
    <div className="text">
      <p>Disability Access </p>

    </div>
  </article>
  <article className="card">
  <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
    <div className="text">
      <p>Private vs. Public Health Services</p>

    </div>
  </article>
</main>
      </div>
    )
  }
}

export default Access

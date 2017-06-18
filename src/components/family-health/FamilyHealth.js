import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './FamilyHealth.css'

class FamilyHealth extends Component {
  render() {
    return (
      <div>
      Family Health
        <main className="cards">
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Women's health</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Men's health</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Teen health</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Mental health</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Disability access</p>
            </div>
          </article>
        </main>
      </div>
    )
  }
}

export default FamilyHealth

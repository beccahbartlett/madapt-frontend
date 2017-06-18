import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './PregnancyNewborn.css'

class PregnancyNewborn extends Component {
  render() {
    return (
      <div>
      Family Health
        <main className="cards">
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Pregnancy</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Birth</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Postnatal</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Newborn -12 months</p>
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

export default PregnancyNewborn

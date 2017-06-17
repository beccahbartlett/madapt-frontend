import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './MentalHealth.css'

class MentalHealth extends Component {
  render() {
    return (
      <div>
      Mentalhealth
      <main className="cards">
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Perinatal Mental Health Overview</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Perinatal Depression and Anxiety</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Trauma</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Disability</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Grief</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Self Care</p>
          </div>
        </article>
      </main>
      </div>
    )
  }
}
export default MentalHealth

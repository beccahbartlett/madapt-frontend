import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './SexualHealth.css'

class SexualHealth extends Component {
  render() {
    return (
      <div>
      SexualHealth
        <main className="cards">
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>STI's</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>HIV & Aids</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Sexuality</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Content</p>
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
              <p>Safe sex</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Services</p>
            </div>
          </article>
        </main>
      </div>
    )
  }
}

export default SexualHealth

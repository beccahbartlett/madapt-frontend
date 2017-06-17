import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './TeenHealth.css'

class TeenHealth extends Component {
  render() {
    return (
      <div>
      TeenHealth
        <main className="cards">
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Australian norms</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Puberty</p>
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
              <p>Alcohol and other drugs</p>
            </div>
          </article>
          <article className="card">
            <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
            <div className="text">
              <p>Healthy and respectful relationships</p>
            </div>
          </article>
        </main>
      </div>
    )
  }
}

export default TeenHealth

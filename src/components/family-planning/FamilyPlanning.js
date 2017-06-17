import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './FamilyPlanning.css'

class FamilyPlanning extends Component {
  render() {
    return (
      <div>
      Clinic
      <main className="cards">
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Birth Spacing and Planning Overview</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Fertility</p>
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
            <p>Contraception</p>
          </div>
        </article>
        <article className="card">
          <img src="https://image.flaticon.com/icons/png/512/33/33777.png"/>
          <div className="text">
            <p>Unplanned Pregnancy</p>
          </div>
        </article>
      </main>
      </div>
    )
  }
}
export default FamilyPlanning

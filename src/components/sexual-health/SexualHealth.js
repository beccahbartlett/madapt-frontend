import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid';
import Card from '../card/Card';
import './SexualHealth.css'
import iconHIV from '../../images/icons/hiv-aids.png'
import iconSTI from '../../images/icons/sti.png'

class SexualHealth extends Component {
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={iconSTI}
          titleText="STI's"
          linkUrl="#" />
        <Card
          imgSrc={iconHIV}
          titleText="HIV & Aids"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Sexuality"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Disability"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Safe sex"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Services"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default SexualHealth

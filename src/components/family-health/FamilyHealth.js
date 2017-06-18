import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid';
import Card from '../card/Card';
import './FamilyHealth.css'

class FamilyHealth extends Component {
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Women's health"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Men's health"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Teen health"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Mental health"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Disability access"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default FamilyHealth

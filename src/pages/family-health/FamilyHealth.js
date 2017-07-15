import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';
import iconTeenHealth from '../../images/icons/teen-health.png'
import iconWomenHealth from '../../images/icons/women-health.png'

class FamilyHealth extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={iconWomenHealth}
          titleText="Women's health"
          linkUrl="/family-health/womens-health" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Men's health"
          linkUrl="#" />
        <Card
          imgSrc={iconTeenHealth}
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

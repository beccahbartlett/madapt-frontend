import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid';
import Card from '../card/Card';
import './PregnancyNewborn.css'

class PregnancyNewborn extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Pregnancy"
          linkUrl="/pregnancy-newborn/pregnancy" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Birth"
          linkUrl="pregnancy-newborn/birth" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Postnatal"
          linkUrl="pregnancy-newborn/postnatal" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Newborn - 12 months"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Disability Access"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default PregnancyNewborn

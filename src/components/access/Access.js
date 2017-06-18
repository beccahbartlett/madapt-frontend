import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid';
import Card from '../card/Card';
import { Grid, Row, Col } from 'flexbox-react';
import './Access.css'

class Access extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Health System Overview"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Australian norms"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Medicare and Centrelink"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Your Rights and Responsibilities"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Disability Access"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Private vs. Public Health Services"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default Access

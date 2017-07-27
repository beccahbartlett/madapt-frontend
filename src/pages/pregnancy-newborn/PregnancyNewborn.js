import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

import PregnancyIcon from '../../images/icons/pregnancy-newborn/pregnancy-newborn.png'
import BirthIcon from '../../images/icons/pregnancy-newborn/birth.png'
import PostnatalIcon from '../../images/icons/pregnancy-newborn/postnatal.png'
import NewbornIcon from '../../images/icons/pregnancy-newborn/newborn-12months.png'

class PregnancyNewborn extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={PregnancyIcon}
          titleText="Pregnancy"
          linkUrl="/pregnancy-newborn/pregnancy" />
        <Card
          imgSrc={BirthIcon}
          titleText="Birth"
          linkUrl="pregnancy-newborn/birth" />
        <Card
          imgSrc={PostnatalIcon}
          titleText="Postnatal"
          linkUrl="pregnancy-newborn/postnatal" />
        <Card
          imgSrc={NewbornIcon}
          titleText="Newborn - 12 months"
          linkUrl="pregnancy-newborn/pregnancy-newborn" />
      </CardGrid>
    )
  }
}

export default PregnancyNewborn

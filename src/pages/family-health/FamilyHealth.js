import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

import WomensHealthIcon from '../../images/icons/familyhealth/womens-health.png'
import MensHealthIcon from '../../images/icons/familyhealth/mens-health.png'
import TeenHealthIcon from '../../images/icons/familyhealth/teen-health.png'
import ChildrensHealthIcon from '../../images/icons/familyhealth/childrens-health.png'
import MentalHealthIcon from '../../images/icons/familyhealth/mental-health.png'
import Violence from '../../images/icons/familyhealth/violence.png'

class FamilyHealth extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={WomensHealthIcon}
          titleText="Women's health"
          linkUrl="/family-health/womens-health" />
        <Card
          imgSrc={MensHealthIcon}
          titleText="Men's health"
          linkUrl="#" />
        <Card
          imgSrc={TeenHealthIcon}
          titleText="Teen health"
          linkUrl="#" />
        <Card
          imgSrc={ChildrensHealthIcon}
          titleText="Children's health"
          linkUrl="#" />
        <Card
          imgSrc={MentalHealthIcon}
          titleText="Mental health"
          linkUrl="#" />
        <Card
          imgSrc={Violence}
          titleText="Violence"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default FamilyHealth

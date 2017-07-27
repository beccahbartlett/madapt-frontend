import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

import BirthSpacingIcon from '../../images/icons/familyplanning/birthspacing.png'
import ContraceptionIcon from '../../images/icons/familyplanning/contraception-types.png'
import FertilityIcon from '../../images/icons/familyplanning/fertility.png'
import FamilyPlanningIcon from '../../images/icons/familyplanning/family-planning.png'
import UnplannedPregnancyIcon from '../../images/icons/familyplanning/unplanned-pregnancy.png'

class FamilyPlanning extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={BirthSpacingIcon}
          titleText="Birth Spacing and Planning"
          linkUrl="/family-planning/birth-spacing" />
        <Card
          imgSrc={ContraceptionIcon}
          titleText="Contraception"
          linkUrl="/family-planning/contraception" />
        <Card
          imgSrc={FertilityIcon}
          titleText="Fertility"
          linkUrl="#" />
        <Card
          imgSrc={FamilyPlanningIcon}
          titleText="Family Planning"
          linkUrl="#" />
        <Card
          imgSrc={UnplannedPregnancyIcon}
          titleText="Unplanned Pregnancy"
          linkUrl="#" />
      </CardGrid>
    )
  }
}
export default FamilyPlanning

import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import BirthSpacingIcon from '../../images/icons/familyplanning/birthspacing.png'
import ContraceptionIcon from '../../images/icons/familyplanning/contraception-types.png'
import FertilityIcon from '../../images/icons/familyplanning/fertility.png'
import FamilyPlanningIcon from '../../images/icons/familyplanning/family-planning.png'
import UnplannedPregnancyIcon from '../../images/icons/familyplanning/unplanned-pregnancy.png'

class FamilyPlanning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: BirthSpacingIcon,
          theme: '2',
          titleText: 'Birth Spacing and Planning',
          linkUrl: '/family-planning/birth-spacing'
        },
        {
          imgSrc: ContraceptionIcon,
          theme: '2',
          titleText: 'Contraception',
          linkUrl: '/family-planning/contraception'
        },
        {
          imgSrc: FertilityIcon,
          theme: '2',
          titleText: 'Fertility',
          linkUrl: '/family-planning/fertility'
        },
        // {
        //   imgSrc: FamilyPlanningIcon,
        //   theme: '2',
        //   titleText: 'Family Planning',
        //   linkUrl: '#'
        // },
        {
          imgSrc: UnplannedPregnancyIcon,
          theme: '2',
          titleText: 'Unplanned Pregnancy',
          linkUrl: '/family-planning/unplanned-pregnancy'
        },
      ]
    }
  }
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <GridPageContainer cards={this.state.cards} />
    )
  }
}
export default FamilyPlanning

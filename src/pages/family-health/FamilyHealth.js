import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import WomensHealthIcon from '../../images/icons/familyhealth/womens-health.png'
import MensHealthIcon from '../../images/icons/familyhealth/mens-health.png'
import TeenHealthIcon from '../../images/icons/familyhealth/teen-health.png'
import ChildrensHealthIcon from '../../images/icons/familyhealth/childrens-health.png'
import MentalHealthIcon from '../../images/icons/familyhealth/mental-health.png'
import Violence from '../../images/icons/familyhealth/violence.png'

class FamilyHealth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: WomensHealthIcon,
          theme: '5',
          titleText: "Women's Health",
          linkUrl: '/family-health/womens-health'
        },
        {
          imgSrc: MensHealthIcon,
          theme: '5',
          titleText: "Men's health",
          linkUrl: '/family-health/mens-health'
        },
        {
          imgSrc: TeenHealthIcon,
          theme: '5',
          titleText: 'Teen Health',
          linkUrl: '/family-health/teen-health'
        },
        {
          imgSrc: ChildrensHealthIcon,
          theme: '5',
          titleText: "Children's Health",
          linkUrl: '/family-health/childrens-health'
        },
        {
          imgSrc: MentalHealthIcon,
          theme: '5',
          titleText: 'Mental Health',
          linkUrl: '/family-health/mental-health'
        },
        {
          imgSrc: Violence,
          theme: '5',
          titleText: 'Violence',
          linkUrl: '/family-health/violence'
        }
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

export default FamilyHealth

import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import PregnancyIcon from '../../images/icons/pregnancynewborn/pregnancy-newborn.png'
import BirthIcon from '../../images/icons/pregnancynewborn/birth.png'
import PostnatalIcon from '../../images/icons/pregnancynewborn/postnatal.png'
import NewbornIcon from '../../images/icons/pregnancynewborn/newborn-12months.png'

class PregnancyNewborn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: PregnancyIcon,
          theme: '3',
          titleText: 'Pregnancy',
          linkUrl: '/pregnancy-newborn/pregnancy'
        },
        {
          imgSrc: PregnancyIcon,
          theme: '3',
          titleText: 'Complications',
          linkUrl: '/pregnancy-newborn/complications'
        },
        {
          imgSrc: BirthIcon,
          theme: '3',
          titleText: 'Birth',
          linkUrl: 'pregnancy-newborn/birth'
        },
        {
          imgSrc: PostnatalIcon,
          theme: '3',
          titleText: 'Postnatal',
          linkUrl: 'pregnancy-newborn/postnatal'
        },
        {
          imgSrc: NewbornIcon,
          theme: '3',
          titleText: 'Newborn - 12 months',
          linkUrl: 'pregnancy-newborn/newborn'
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

export default PregnancyNewborn

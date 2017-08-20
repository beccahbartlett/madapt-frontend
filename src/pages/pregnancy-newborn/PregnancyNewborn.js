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
          titleText: {
            'en': 'Pregnancy',
            'ar': 'الحمل' 
          },
          linkUrl: '/pregnancy-newborn/pregnancy'
        },
        {
          imgSrc: PregnancyIcon,
          theme: '3',
          titleText: {
            'en': 'Complications',
            'ar': 'مضاعفات' 
          },
          linkUrl: '/pregnancy-newborn/complications'
        },
        {
          imgSrc: BirthIcon,
          theme: '3',
          titleText: {
            'en': 'Birth',
            'ar': 'الولادة' 
          },
          linkUrl: 'pregnancy-newborn/birth'
        },
        {
          imgSrc: PostnatalIcon,
          theme: '3',
          titleText: {
            'en': 'Postnatal',
            'ar': 'بعد الولادة' 
          },
          linkUrl: 'pregnancy-newborn/postnatal'
        },
        {
          imgSrc: NewbornIcon,
          theme: '3',
          titleText: {
            'en': 'Newborn - 12 months',
            'ar': 'حديثي الولادة حتى 12 شهر' 
          },
          linkUrl: 'pregnancy-newborn/newborn'
        }
      ]
    }
  }
  componentDidMount() {
    window.analytics.page();
    this.props.changeStyle(3);
  }
  render() {
    return (
      <GridPageContainer
        cards={this.state.cards}
        lang={this.props.lang} />
    )
  }
}

export default PregnancyNewborn

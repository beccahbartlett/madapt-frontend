import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid'
import Card from '../card/Card'

class GridPageContainer extends Component {
  render() {
    return (
      <CardGrid>
        {this.props.cards.map(item => {
          return (
            <Card
              imgSrc={item.imgSrc}
              theme={item.theme}
              titleText={item.titleText}
              linkUrl={item.linkUrl} />
          )
        })}
      </CardGrid>
    )
  }
}

export default GridPageContainer
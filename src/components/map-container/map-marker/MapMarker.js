import React, { Component } from 'react';
import './MapMarker.css'

class MapMarker extends Component {
	open() {
		console.log('MapMarker.open()')
	}

	render() {
		const result = this.props.result
		return (
			<div
				onClick={this.props.onClick}
				className={`sf-map-marker ${result['marker_type']}`}
			/>
		)
	}
}

export default MapMarker
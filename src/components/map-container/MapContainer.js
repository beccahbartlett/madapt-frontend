import React, { Component } from 'react';
import './MapContainer.css'

class MapContainer extends Component {

	render() {
		return (
			<div className="sf-map-container">
				<div className="sf-map-filters"></div>
				<div className="sf-map-view"></div>
			</div>
		)
	}
}

export default MapContainer
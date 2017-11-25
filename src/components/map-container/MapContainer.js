import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './MapContainer.css'

class MapContainer extends Component {

	render() {
		return (
			<div className="sf-map-container">
				<div className="sf-map-filters"></div>
				<div className="sf-map-view">
				<GoogleMapReact
					defaultCenter={{lat: 59.95, lng: 30.33}}
					defaultZoom={11}
				/>
				</div>
			</div>
		)
	}
}

export default MapContainer
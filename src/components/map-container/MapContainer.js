import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './MapContainer.css'

class MapContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			lat: -37.9722342,
			lon: 144.7729551
		}
		this.getUserLocation = this.getUserLocation.bind(this)
		this.getResults = this.getResults.bind(this)
		// this.getUserLocation()
	}

	getUserLocation() {
		global.getUserLocation((data) => {
			const lat = data.latitude
			const lon = data.longitude
			this.setState({
				lat: lat,
				lon: lon
			})
		})
	}

	getResults(e) {
		if (e.key === 'Enter') {
			const postcode = e.target.value
			console.log(`${postcode} entered`)
		}
	}

	render() {
		var lat = this.state.lat
		var lon = this.state.lon
		return (
			<div className="sf-map-container">
				<div className="sf-map-sidebar">
					<div className="sf-map-filters">
						<input id="sf-map-input-postcode" type="text" placeholder="Postcode" onKeyPress={this.getResults}/>
					</div>
				</div>
				<div className="sf-map-view">
				{lat && <GoogleMapReact
					defaultCenter={{lat: lat, lng: lon}}
					defaultZoom={9}
				/>}
				</div>
			</div>
		)
	}
}

export default MapContainer
import React, { Component } from 'react';
import axios from 'axios'
import GoogleMapReact from 'google-map-react';
import './MapContainer.css'

class MapContainer extends Component {

	constructor(props) {
		super(props)
		this.defaultCenter = {
			lat: -37.9722342,
			lng: 144.7729551,
		}
		this.defaultZoom = 9
		this.state = {
			coords: null,
			results: null,
			zoomLevel: null
		}
		this.getUserLocation = this.getUserLocation.bind(this)
		this.getResults = this.getResults.bind(this)
		this.makeSearchRequest = this.makeSearchRequest.bind(this)
		// this.getUserLocation()
	}

	getUserLocation() {
		global.getUserLocation((data) => {
			const lat = data.latitude
			const lon = data.longitude
			this.setState({
				coords: {
					lat: lat,
					lng: lon
				}
			})
		})
	}

	getResults(e) {
		if (e.key === 'Enter') {
			const postcode = e.target.value
			console.log(`${postcode} entered`)
			this.makeSearchRequest(postcode)
		}
	}

	makeSearchRequest(postcode) {
		var baseUrl = 'https://api.serviceseeker.com.au'
		var endpoint = '/api/v3/search'
		var url = baseUrl + endpoint
		var config = {
			url: url,
			method: 'get',
			params: {
				q: 'GP',
				area: postcode
			},
			auth: {
				username: 'FXFDVZVGZOWUEEPJWBOGACIZRYGPGBII',
				password: 'WIJOQPFWUOTPBRIPJYTYUFOBRWLUSZQY'
			}
		}
		axios(config)
			.then(res => {
				console.log(res.data)
				this.setState({
					results: res.data.objects,
					coords: {
						lat: res.data.objects[0].location.point.lat,
						lng: res.data.objects[0].location.point.lon,
					},
					zoomLevel: 15
				})
				console.log(this.state)
			})
	}

	render() {
		var coords = this.state.coords
		var zoomLevel = this.state.zoomLevel
		var results = this.state.results
		return (
			<div className="sf-map-container">
				<div className="sf-map-sidebar">
					<div className="sf-map-filters">
						<input id="sf-map-input-postcode" type="text" placeholder="Postcode" onKeyPress={this.getResults}/>
					</div>
					<div className="sf-map-results">
						{results && <div>Result</div>}
					</div>
				</div>
				<div className="sf-map-view">
					<GoogleMapReact
						center={coords}
						zoom={zoomLevel}
						defaultCenter={this.defaultCenter}
						defaultZoom={this.defaultZoom}>
						{results && results.map(result => {
							return (
								<div className="sf-map-marker"
									lat={result.location.point.lat}
									lng={result.location.point.lon}
									text={result.site.name}
								/>
							)
						})}
					</GoogleMapReact>
				</div>
			</div>
		)
	}
}

export default MapContainer
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
			zoomLevel: null,
			formValues: {
				postcode: null,
				gpChecked: null,
				pharmacyChecked: null,
				hospitalChecked: null
			}
		}
		this.getUserLocation = this.getUserLocation.bind(this)
		this.getResults = this.getResults.bind(this)
		this.makeSearchRequest = this.makeSearchRequest.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.onPostcodeChange = this.onPostcodeChange.bind(this)
		this.onServicesChange = this.onServicesChange.bind(this)
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

	onPostcodeChange(e) {
		const postcode = e.target.value
		if (parseInt(postcode)) {
			this.setState(prevState => {
				const before = prevState
				before.formValues.postcode = postcode
				return before
			})
		}
	}

	onServicesChange(e) {
		const type = e.target.dataset.type
		console.log(type)
		const checked = e.target.checked

		switch(type) {
			case 'gp':
				this.setState(prevState => {
					const before = prevState
					before.formValues.gpChecked = checked
					return before
				})
				break
			case 'pharmacy':
				this.setState(prevState => {
					const before = prevState
					before.formValues.pharmacyChecked = checked
					return before
				})
				break
			case 'hospital':
				this.setState(prevState => {
					const before = prevState
					before.formValues.hospitalChecked = checked
					return before
				})
				break
			default:
				break
		}
	}

	onSubmit(e) {
		e.preventDefault()
		console.log(this.state)
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
				res.data.objects && this.setState({
					results: res.data.objects,
					coords: {
						lat: res.data.objects[0].location.point.lat,
						lng: res.data.objects[0].location.point.lon,
					},
					zoomLevel: 15
				})
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
						<form onSubmit={this.onSubmit}>
							<input id="sf-map-input-postcode" type="text" placeholder="Postcode" onChange={this.onPostcodeChange}/>
							<label><input id="sf-map-input" type="checkbox" onChange={this.onServicesChange} data-type="gp"/>Doctor</label>
							<label><input id="sf-map-input" type="checkbox" onChange={this.onServicesChange} data-type="pharmacy"/>Pharmacy</label>
							<label><input id="sf-map-input" type="checkbox" onChange={this.onServicesChange} data-type="hospital"/>Hospital</label>
							<input type="submit" value="Submit"/>
						</form>
					</div>
					<div className="sf-map-results">
						{results && results.map(result => {
							return (
								<div>{result.site.name}</div>
							)
						})}
					</div>
				</div>
				<div className="sf-map-view">
					<GoogleMapReact
						center={coords}
						zoom={zoomLevel}
						defaultCenter={this.defaultCenter}
						defaultZoom={this.defaultZoom}>
						{results && results.map(result => {
							console.log(result.location.point)
							return (
								<div className="sf-map-marker gp"
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
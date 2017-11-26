import React, { Component } from 'react';
import axios from 'axios'
import GoogleMapReact from 'google-map-react';
import MapResult from './map-result/MapResult'
import MapMarker from './map-marker/MapMarker'
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
			results: [],
			zoomLevel: null,
			services: {
				gp: false,
				pharmacy: false,
				hospital: false
			},
			postcode: null,
			resultContainers: [],
			mapMarkers: []
		}
		this.getUserLocation = this.getUserLocation.bind(this)
		this.getResults = this.getResults.bind(this)
		this.makeSearchRequest = this.makeSearchRequest.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.onPostcodeChange = this.onPostcodeChange.bind(this)
		this.onServicesChange = this.onServicesChange.bind(this)
		this.parseStreetAddress = this.parseStreetAddress.bind(this)
		this.onMarkerClick = this.onMarkerClick.bind(this)
		this.onResItemClick = this.onResItemClick.bind(this)
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
		this.setState({
			postcode: postcode
		})
	}

	onServicesChange(e) {
		const type = e.target.dataset.type
		console.log(type)
		const checked = e.target.checked
		const state = this.state

		switch(type) {
			case 'gp':
				state.services.gp = checked
				break
			case 'pharmacy':
				state.services.pharmacy = checked
				break
			case 'hospital':
				state.services.hospital = checked
				break
			default:
				break
		}
		this.setState(state)
	}

	onSubmit(e) {
		e.preventDefault()
		const postcode = this.state.postcode
		// Clear current results
		this.setState({
			results: []
		})
		Object.keys(this.state.services).forEach(service => {
			if (this.state.services[service]) this.makeSearchRequest(postcode, service)
		})
		console.log(this.state)
	}

	parseStreetAddress(location) {
		const addr = `${location['street_number']} ${location['street_name']} ${location['street_type']}, ${location['suburb']} ${location['state']} ${location['postcode']}`
		return addr
	}

	onMarkerClick(idx) {
		// const data = JSON.parse(e.target.dataset.result)
		// console.log(data)
		console.log(`onMarkerClick ${idx}`)
	}

	onResItemClick(idx) {
		console.log(`onResItemClick ${idx}`)
		this.state.mapMarkers.forEach(marker => {
			if (marker && typeof marker.close === 'function') marker.close()
		})
		this.state.mapMarkers[idx].open()
	}

	makeSearchRequest(postcode, service) {
		console.log(service)
		var baseUrl = 'https://api.serviceseeker.com.au'
		var endpoint = '/api/v3/search'
		var url = baseUrl + endpoint
		var config = {
			url: url,
			method: 'get',
			params: {
				q: `${service} -type=practitioner`,
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
				res.data.objects && this.setState(prevState => {
					res.data.objects.map(obj => {
						return obj['marker_type'] = service
					})
					return {
						results: res.data.objects.concat(prevState.results),
						coords: {
							lat: res.data.objects[0].location.point.lat,
							lng: res.data.objects[0].location.point.lon,
						},
						zoomLevel: 12
					}
				})
			})
	}

	render() {
		var coords = this.state.coords
		var zoomLevel = this.state.zoomLevel
		var results = this.state.results
		var services = this.state.services
		console.log(this.state)
		return (
			<div className="sf-map-container">
				<div className="sf-map-sidebar">
					<form className="sf-map-filters" onSubmit={this.onSubmit}>
						<input id="sf-map-input-postcode" type="text" placeholder="Postcode or Suburb" onChange={this.onPostcodeChange}/>
						<input id="sf-map-input-submit" type="submit" value="Search"/>
						<label><input id="sf-map-input-checkbox" type="checkbox" onChange={this.onServicesChange} data-type="gp" checked={services.gp}/>Doctor</label>
						<label><input id="sf-map-input-checkbox" type="checkbox" onChange={this.onServicesChange} data-type="pharmacy" checked={services.pharmacy}/>Pharmacy</label>
						<label><input id="sf-map-input-checkbox" type="checkbox" onChange={this.onServicesChange} data-type="hospital" checked={services.hospital}/>Hospital</label>
					</form>
					<div className="sf-map-results">
						{results && results.map((result, idx) => {
							return (
								<MapResult
									parseStreetAddress={this.parseStreetAddress}
									result={result}
									ref={ref => this.state.resultContainers.push(ref)}
									onClick={() => { this.onResItemClick(idx) }}
								/>
							)
						})}
					</div>
				</div>
				<div className="sf-map-view">
					<GoogleMapReact
						bootstrapURLKeys={{
							key: "AIzaSyCBlA8RrGJKeWPM52vPQFASHZmpVCmuIdo",
						}}
						center={coords}
						zoom={zoomLevel}
						defaultCenter={this.defaultCenter}
						defaultZoom={this.defaultZoom}>
						{results && results.map((result, idx) => {
							return (
								<MapMarker
									lat={result.location.point.lat || this.state.defaultCenter.lat}
									lng={result.location.point.lon || this.state.defaultCenter.lng}
									text={result.name}
									result={result}
									ref={marker => this.state.mapMarkers.push(marker)}
									data-result={JSON.stringify(result)}
									onClick={() => { this.onMarkerClick(idx) }}
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
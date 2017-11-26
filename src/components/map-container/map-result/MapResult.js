import React, { Component } from 'react';
import './MapResult.css'

class MapResult extends Component {

	render() {
		const result = this.props.result
		const idx = this.props.idx
		return (
			<div
				className="sf-map-result-container">
				<span className="sf-map-result-title">{result.name}</span>
				<br/>
				<span className="sf-map-result-addr">{this.props.parseStreetAddress(result.location)}</span>
				<br/>
				<span className="sf-map-result-phone">{result.phones[0].number}</span>
				<br/>
				<span className="sf-map-result-bulkbill">{'Bulk Billing: ' + (!result['is_bulk_billing'] ? 'No' : 'Yes')}</span>
				<br/>
				<a href={result.web} className="sf-map-result-website">{result.web}</a>
			</div>
		)
	}
}

export default MapResult
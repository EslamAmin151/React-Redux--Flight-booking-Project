import React from "react";
import CheckoutForm from './CheckoutForm'

// ArrivalDateTime, DepartureDateTime, DesTerminal, Destination, DestinationAirportCity, Duration, Airline
const flight = (props) => {
	if(props.flight === null){
		return null
	}
	let flightDetails = props.flight.FlightDetails[0]

	return (
		<div className = "flightDetails">
			<table>
				<thead>
					<tr>
						<th>Airline</th>
						<th>Origin City</th>
						<th>Origin Airport</th>
						<th>Origin Terminal</th>
						<th>Departure Time</th>
						<th>Destination City</th>
						<th>Destination Airport</th>
						<th>Destination Terminal</th>
						<th>Arrival Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{flightDetails.AirlineName}</td>
						<td>{flightDetails.OriginAirportCity}</td>
						<td>{flightDetails.Origin}</td>
						<td>{flightDetails.OrgTerminal}</td>
						<td>{flightDetails.DepartureDateTime}</td>
						<td>{flightDetails.DestinationAirportCity}</td>
						<td>{flightDetails.Destination}</td>
						<td>{flightDetails.DesTerminal}</td>
						<td>{flightDetails.ArrivalDateTime}</td>
					</tr>
				</tbody>
				<div>
					<CheckoutForm />
				</div>
			</table>

		</div>
	)
}

export default flight

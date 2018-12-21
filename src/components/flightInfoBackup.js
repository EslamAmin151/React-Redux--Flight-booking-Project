import React from 'react'

const flightInfo = (props) => {
  let flightArray = props.info.OneWayAvailabilityResponse.ItinearyDetails[0].Items
  let returnFlight = null
  for (let i = 0; i < flightArray.length; i++) {
    let flight = flightArray[i]
    let flightFrom = flight.FlightDetails[0].OriginAirportCity
    let flightDestination = flight.FlightDetails[0].DestinationAirportCity
    console.log(flightFrom)
    console.log(props.from)
    console.log(flightDestination)
    console.log(props.destination)
    if (flightFrom == props.from &&  flightDestination == props.destination) {
      returnFlight = flight
    }
  }
  console.log(returnFlight)
  return "no"
}

export default flightInfo

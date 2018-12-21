import FlightJson from '../DB.json'

let flightArray = FlightJson.OneWayAvailabilityResponse.ItinearyDetails[0].Items

const flightSearch = (from, destination, date) => {
  let returnFlight = null
  for (let i = 0; i < flightArray.length; i++) {
    let flight = flightArray[i]
    let flightFrom = flight.FlightDetails[0].OriginAirportCity
    let flightDestination = flight.FlightDetails[0].DestinationAirportCity
    let flightDate = new Date (flight.FlightDetails[0].DepartureDateTime)
    if (flightFrom == from &&  flightDestination == destination && (date.getYear() == flightDate.getYear()) && (date.getMonth() == flightDate.getMonth()) && (date.getDate() == flightDate.getDate())){
      returnFlight = flight
      return returnFlight
    }
  }
}

export default flightSearch

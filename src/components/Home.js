import React, {Component} from 'react'
import Form from './Form'
import Flight from './Flight'

class Home extends Component {
  state = {
    flight: null
  }

  flightSelected = (flight) => {
    this.setState({
      ...this.state,
      flight: flight
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Form flightSearch = {this.flightSelected}/>
        <Flight flight = {this.state.flight}/>
      </div>
    )
  }
}

export default Home

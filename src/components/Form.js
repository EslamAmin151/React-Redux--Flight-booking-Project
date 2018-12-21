import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DateFormatInput } from "material-ui-next-pickers";
import Button from "@material-ui/core/Button";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";

import flightSearch from './flightSearch'

const DATA = require('../DB.json')

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		margin: "10px",
		alignItems: "center",
		justifyContent: "center"
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 150
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	},
	dateSelect: {
		marginTop: "16px"
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	},
	button: {
		marginTop: "16px"
	}
});

class Form extends React.Component {
	state = {
		search: false,
		from: null,
		destination: null,
		date: null
	};

componentDidMount() {
		// console.log("THIS IS THE DATA ", DATA["ExpMsg"])
		// console.log('THE FIRST MESSAGE IS ', DATA)
		// const rawResponse = await fetch(
		// 	"https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search",
		// 	{
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			apikey: "7e624020-2293-4",
		// 			mode: "sandbox"
		// 		},
		// 		body: JSON.stringify({
		// 			TripType: "O",
		// 			NoOfAdults: 1,
		// 			NoOfChilds: 0,
		// 			NoOfInfants: 0,
		// 			ClassType: "Economy",
		// 			OriginDestination: [
		// 				{ Origin: "SFO", Destination: "LAX", TravelDate: "04/23/2018" }
		// 			],
		// 			Currency: "USD"
		// 		})
		// 	}
		// );
		// const content = await rawResponse.json();
		//
		// console.log(content);
	}

	onChangeDate = date => {
		let newDate = new Date(date)
		this.setState({ date : newDate });
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

flightInfo = button => {
	let flight = flightSearch(this.state.from, this.state.destination, this.state.date)
	this.props.flightSearch(flight)
	// this.setState({Search:true});
}

	render() {
		const { classes } = this.props;
		const date = this.state.date

		return (
			<div className={classes.root}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-native-simple">From</InputLabel>
					<Select
						native
						value={this.state.from}
						onChange={this.handleChange("from")}
						inputProps={{
							from: "from",
							id: "age-native-simple"
						}}
					>
						<option value="" />
						<option value={"San Francisco"}>San Francisco</option>
						<option value={"HOU"}>Houston</option>
						<option value={"LVI"}>Las Vegas</option>
						<option value={"Miami"}>Florida</option>
						<option value={"ATL"}>Atlanta</option>
						<option value={"JFK"}>NewYork</option>
						<option value={"PH"}>Hawaii</option>
						<option value={"PA"}>Alaska</option>
						<option value={"Hobby"}>Houston</option>
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-native-simple">Destination</InputLabel>
					<Select
						native
						value={this.state.destination}
						onChange={this.handleChange("destination")}
						inputProps={{
							destionation: "destionation",
							id: "age-native-simple"
						}}
					>
						<option value="" />
						<option value={"San Fransico"}>San Francisco</option>
						<option value={"HOU"}>Houston</option>
						<option value={"LVI"}>Las Vegas</option>
						<option value={"Miami"}>Florida</option>
						<option value={"ATL"}>Atlanta</option>
						<option value={"JFK"}>NewYork</option>
						<option value={"PH"}>Hawaii</option>
						<option value={"PA"}>Alaska</option>
						<option value={"Hobby"}>Houston</option>
						<option value={"Los Angeles"}>Los Anglos</option>

					</Select>
				</FormControl>

				{/* Date Component: https://github.com/chingyawhao/material-ui-next-pickers */}
				<FormControl className={classes.formControl}>

					<DateFormatInput
						name="date-input"
						value={date}
						onChange={this.onChangeDate}
						className={classes.dateSelect}
					/>
				</FormControl>
				<FormControl>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						onClick={this.flightInfo}
					>
						Search
						<FlightTakeoff className={classes.rightIcon}>send</FlightTakeoff>
					</Button>
				</FormControl>
			</div>
		);
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);

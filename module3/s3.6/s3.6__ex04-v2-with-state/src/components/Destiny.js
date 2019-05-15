import React from 'react';
import CityImage from './CityImage';
import './Destiny.css'

class Destiny extends React.Component {
	constructor(props){
		super(props)
		//Atributes of my Class

		this.state={
			//Here I set the initial state
			myCity: "Buenos Aires"
		}

		//Binding all my methods
		this.onChangeListener = this.onChangeListener.bind(this)
	}

	//Methods of my Class
	onChangeListener(event) {
		//Updates the Class state on each interaction, so we don't need to forceUpdate (if the state changes, everything will re-render automatically)
		this.setState({
			myCity: event.currentTarget.value
		})
	}

	render() {
		return (
			<div>
				<h2 className="title">Pick your favourite city</h2>
				<select onChange={this.onChangeListener} name="city" id="city">
					<option value="Buenos Aires">Buenos Aires</option>
					<option value="Sydney">Sydney</option>
					<option value="Praga">Praga</option>
					<option value="Boston">Boston</option>
					<option value="Tokyo">Tokyo</option>
				</select>
				<CityImage city={this.state.myCity} />
			</div>
		);
	}
}

export default Destiny;

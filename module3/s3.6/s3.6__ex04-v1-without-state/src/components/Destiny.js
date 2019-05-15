import React from 'react';
import CityImage from './CityImage';
import './Destiny.css'

class Destiny extends React.Component {
	constructor(props){
		super(props)

		//Attributes of my Class
		this.myCity= "Buenos Aires"

		//Binding all my methods
		this.onChangeListener = this.onChangeListener.bind(this)
	}

	//Methods of my Class
	onChangeListener(event) {
		//Updates the Class attribute 'myCity' and force re-rendering with forceUpdate() as we are not using state yet, so need to force it manually
		this.myCity= event.currentTarget.value;
		this.forceUpdate();
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
				<CityImage city={this.myCity} />
			</div>
		);
	}
}

export default Destiny;

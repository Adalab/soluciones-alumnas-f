import React from "react";
import { fetchPeople } from "./services/PeopleService";
import PeopleList from "./components/PeopleList";
import Filter from "./components/Filter";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        cities: [],
        selectedCities: [],
        genders: [],
        selectedGenders: []
      },
      people: [],
      isLoading: true
    };
    this.fetchNewPeople=this.fetchNewPeople.bind(this);
    this.handleCheckboxCity = this.handleCheckboxCity.bind(this);
    this.handleCheckboxGender = this.handleCheckboxGender.bind(this);
    this.fetchNewPeople();
  }

  fetchNewPeople() {

    fetchPeople().then(data => {
      let citiesList=[];
      for (let i=0; i<data.results.length;i++){
        citiesList.push(data.results[i].location.city)
      }

      const filteredCities = citiesList.filter((item, index) => citiesList.indexOf(item) === index)

      let genderList = [];
      for (let i=0; i<data.results.length;i++){
        genderList.push(data.results[i].gender)
      }

      const filteredGenders = genderList.filter((item, index) => genderList.indexOf(item) === index); 

      this.setState(prevState => {
        return {
          people: data.results,
          filters: {
            ...prevState.filters,
            cities: filteredCities,
            genders: filteredGenders,
          }
        }
      });
    });
  }

  handleCheckboxCity(event) {
    const value = event.currentTarget.value;

    this.setState((prevState, index) => {
      
      let newArr;
      if (this.state.filters.selectedCities.includes(value)) {
        const ind = this.state.filters.selectedCities.indexOf(value);
        this.state.filters.selectedCities.splice(ind, 1);
        newArr = this.state.filters.selectedCities;
      } else {
        newArr = this.state.filters.selectedCities.concat(value);
      }

      return {
        filters: {
          ...prevState.filters,
          selectedCities: newArr,
        }
      }
    })
  }

  handleCheckboxGender(event) {
    const value = event.currentTarget.value;

    this.setState((prevState, index) => {

      let newArr;
      if (this.state.filters.selectedGenders.includes(value)) {
        const ind = this.state.filters.selectedGenders.indexOf(value);
        this.state.filters.selectedGenders.splice(ind, 1);
        newArr = this.state.filters.selectedGenders;
      } else {
        newArr = this.state.filters.selectedGenders.concat(value);
      }

      return {
        filters: {
          ...prevState.filters,
          selectedGenders: newArr,
        }
      }
    })
  }

  render() {

    return (
      <div className="App">

        <PeopleList 
          peopleData={this.state.people} 
          filtersData={this.state.filters}
          selectedCities={this.state.filters.selectedCities}
          selectedGenders={this.state.filters.selectedGenders}
        />

        <Filter 
          filteredCities={this.state.filters.cities} 
          filteredGenders={this.state.filters.genders}
          handleCheckboxCity={this.handleCheckboxCity}
          selectedCities={this.state.filters.selectedCities}
          selectedGenders={this.state.filters.selectedGenders}
          handleCheckboxGender={this.handleCheckboxGender}
        />

      </div>
    );
  }
}

export default App;

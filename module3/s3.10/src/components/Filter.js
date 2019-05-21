import React from "react";

function Filter(props) {
  return (
    <div>
      <ul className="first__filter">
        {props.filteredGenders.map((gender, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={gender}
              name="gender"
              value={gender}
              checked={props.selectedGenders.includes(gender)}
              onChange={props.handleCheckboxGender}
            />
            <label htmlFor={gender}>{gender}</label>
          </li>
        ))}
      </ul>
      <ul className="second__filter">
        {props.filteredCities.map((city, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={city}
              name="cities"
              value={city}
              checked={props.selectedCities.includes(city)}
              onChange={props.handleCheckboxCity}
            />
            <label htmlFor={city}>{city}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;

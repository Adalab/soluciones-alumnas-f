import React from "react";

function PeopleList(props) {

  return (
    <ul className="people">
      {props.peopleData
      .filter( elem => {
        return props.selectedCities.includes(elem.location.city) || props.selectedCities.length === 0;
      })
      .filter( elem => {
        return props.selectedGenders.includes(elem.gender) || props.selectedGenders.length === 0;
      })
      .map((person, ind) => {
        return (
          <li className="people__card" key={ind}>
            <h2 className="people__name">{`${person.name.first} ${person.name.last}`}</h2>
            <div className="people__photo"
              style={{
                backgroundImage: `url(${person.picture.thumbnail})`,
                height: "48px",
                width: "48px"
              }}
            />
            <div className="people__datum">
              <p>{person.location.city}</p>
              <p>{person.dob.age}</p>
            </div>
            
          </li>
        );
      })}
    </ul>
  );
}

export default PeopleList;

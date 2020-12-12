import React from "react";
import "./peopleDetails.css";

export default ({ people }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{people.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {people.birthday}
        </li>
        </ul>

      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
        Place of birth
        </li>
        <li key="rdv" className="list-group-item ">
          {people.place_of_birth}
        </li>
      </ul>
  
      <ul className="list-group list-group-horizontal">
       <li key="rdh" className="list-group-item list-group-item-dark">
       known for department
        </li>
        <li key="rdv" className="list-group-item ">
          {people.known_for_department}
        </li>
      </ul>
<ul className="list-group list-group-horizontal">
       <li key="rdh" className="list-group-item list-group-item-dark">
       Popularity
        </li>
        <li key="rdv" className="list-group-item ">
          {people.popularity}
        </li>
      </ul>



     
    </>
  );
};
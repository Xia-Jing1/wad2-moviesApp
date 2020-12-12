import React from "react";
import People from "../peopleCard/";
import "./peopleList.css";

const PeopleList = ({people, action}) => {

  const peopleCards = people.map(m => (
    <People key={m.id} people={m} action={action} />
  ));
  return <div className="row people bg-info">{peopleCards}</div>;
};

export default PeopleList;
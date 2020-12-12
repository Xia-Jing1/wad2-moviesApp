import React from "react";
import PeopleHeader from '../headerPeople'
import "./peoplePage.css";

const TemplatePeoplePage = ({ people, children }) => {
  return (
    <>
      <PeopleHeader people={people} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="people"
            alt={people.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePeoplePage;
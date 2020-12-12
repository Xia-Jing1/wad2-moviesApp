import React from "react";
import { Link } from "react-router-dom";
import "./peopleCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PeopleCard = ({people, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/people/${people.id}`}>
        <img
          className="card-img-tag center "
          alt={people.name}
          src={
            people.profile_path
              ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-name ">{people.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {people.overview}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {people.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(people)}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;

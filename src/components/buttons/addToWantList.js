import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWantListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWantList = e => {
    e.preventDefault();
    context.addToWantList (movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWantList }
    >
      Add to Want List
    </button>
  );
};

export default AddToWantListButton ;
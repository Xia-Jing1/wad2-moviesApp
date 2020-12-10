import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToEnjoyListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToEnjoyList = e => {
    e.preventDefault();
    context.addToEnjoyList (movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToEnjoyList }
    >
      Enjoy it
    </button>
  );
};

export default AddToEnjoyListButton ;
import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToLikeListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToLikeList = e => {
    e.preventDefault();
    context.addToLikeList (movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToLikeList }
    >
      Add to Like List
    </button>
  );
};

export default AddToLikeListButton ;
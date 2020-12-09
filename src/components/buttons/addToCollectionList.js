import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToCollectionListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToCollectionList = e => {
    e.preventDefault();
    context.addToCollectionList (movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToCollectionList }
    >
      Add to Collection List
    </button>
  );
};

export default AddToCollectionListButton ;